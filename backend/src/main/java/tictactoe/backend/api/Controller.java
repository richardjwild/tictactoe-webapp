package tictactoe.backend.api;

import org.springframework.web.bind.annotation.*;
import tictactoe.backend.exception.GameNotFound;
import tictactoe.backend.repository.GameRepository;
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
        var gameId = UUID.randomUUID();
        var game = new Game();
        gameRepository.store(game, gameId);
        return new TicTacToeResponse(game, gameId);
    }

    @PostMapping(value = "/games/{gameId}/play", produces = "application/json")
    public @ResponseBody TicTacToeResponse play(@PathVariable String gameId, @RequestParam String square) {
        var gameUUID = UUID.fromString(gameId);
        var toPlay = Square.fromString(square);
        return gameRepository.retrieve(gameUUID)
                .map(game -> {
                    game = game.play(toPlay);
                    gameRepository.store(game, gameUUID);
                    return new TicTacToeResponse(game, gameUUID);
                })
                .orElseThrow(GameNotFound::new);
    }
}
