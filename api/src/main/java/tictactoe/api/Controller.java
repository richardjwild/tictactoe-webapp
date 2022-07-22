package tictactoe.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import tictactoe.engine.Game;

import java.util.UUID;

@RestController
public class Controller {

    private final GameRepository gameRepository;

    public Controller(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @GetMapping(value = "/newgame", produces = "application/json")
    public @ResponseBody TicTacToeResponse newGame() {
        UUID gameId = UUID.randomUUID();
        Game game = new Game();
        gameRepository.store(game, gameId);
        return new TicTacToeResponse(game, gameId);
    }
}
