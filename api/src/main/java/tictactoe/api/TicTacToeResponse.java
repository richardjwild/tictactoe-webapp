package tictactoe.api;

import tictactoe.engine.Game;
import tictactoe.engine.GameState;
import tictactoe.engine.Player;
import tictactoe.engine.Square;

import java.util.HashMap;
import java.util.Map;

public class TicTacToeResponse {

    private final String status;
    private final String nextUp;
    private final Map<String, String> board;

    public TicTacToeResponse(Game game) {
        GameState gameState = game.state();
        status = convertStatus(gameState);
        nextUp = convertNextUp(gameState);
        board = convertBoard(gameState);
    }

    private String convertStatus(GameState gameState) {
        return gameState.getStatus().name();
    }

    private String convertNextUp(GameState gameState) {
        return gameState.getNextUp().name();
    }

    private Map<String, String> convertBoard(GameState gameState) {
        final Map<String, String> board = new HashMap<>();
        Map<Square, Player> takenSquares = gameState.getBoard().takenSquares();
        for (Square square: takenSquares.keySet()) {
            Player player = takenSquares.get(square);
            board.put(square.name(), player.name());
        }
        return board;
    }

    public String getStatus() {
        return status;
    }

    public String getNextUp() {
        return nextUp;
    }

    public Map<String, String> getBoard() {
        return board;
    }
}
