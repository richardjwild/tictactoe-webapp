package tictactoe.api;

import org.springframework.web.bind.annotation.*;
import tictactoe.engine.Game;
import tictactoe.engine.Square;

import java.util.UUID;

@RestController
public class Controller {

    private final GameRepository gameRepository;

    public Controller(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @PostMapping(value = "/games/new", produces = "application/json")
    public @ResponseBody TicTacToeResponse newGame() {
        UUID gameId = UUID.randomUUID();
        Game game = new Game();
        gameRepository.store(game, gameId);
        return new TicTacToeResponse(game, gameId);
    }

    @PostMapping(value = "/games/{gameId}/play", produces = "application/json")
    public @ResponseBody TicTacToeResponse play(@PathVariable String gameId, @RequestParam String square) {
        UUID gameUUID = UUID.fromString(gameId);
        Square toPlay = Square.fromString(square);
        return gameRepository.retrieve(gameUUID)
                .map(game -> {
                    game = game.play(toPlay);
                    gameRepository.store(game, gameUUID);
                    return new TicTacToeResponse(game, gameUUID);
                })
                .orElseThrow(() -> new IllegalArgumentException("Invalid game id"));
    }
}
