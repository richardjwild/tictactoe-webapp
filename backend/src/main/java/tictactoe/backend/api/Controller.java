package tictactoe.backend.api;

import org.springframework.web.bind.annotation.*;
import tictactoe.backend.exception.GameNotFound;
import tictactoe.backend.repository.GameRepository;
import tictactoe.engine.Game;
import tictactoe.engine.Square;

import java.util.UUID;

@RestController()
@RequestMapping(value = "/api/games/")
public class Controller {

    private final GameRepository gameRepository;

    public Controller(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @PostMapping(value = "new", produces = "application/json")
    public @ResponseBody TicTacToeResponse newGame() {
        var gameId = UUID.randomUUID();
        var game = new Game();
        gameRepository.store(game, gameId);
        return new TicTacToeResponse(game, gameId);
    }

    @PostMapping(value = "{gameId}/play", produces = "application/json")
    public @ResponseBody TicTacToeResponse play(@PathVariable String gameId, @RequestParam String square) {
        var gameUUID = UUID.fromString(gameId);
        var nextMove = Square.fromString(square);
        var game = gameRepository.retrieve(gameUUID).orElseThrow(GameNotFound::new);
        game = game.play(nextMove);
        gameRepository.store(game, gameUUID);
        return new TicTacToeResponse(game, gameUUID);
    }
}
