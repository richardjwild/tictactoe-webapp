package tictactoe.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import tictactoe.engine.Game;

@RestController
public class Controller {

    @GetMapping(value = "/newgame", produces = "application/json")
    public @ResponseBody TicTacToeResponse newGame() {
        return new TicTacToeResponse(new Game());
    }
}
