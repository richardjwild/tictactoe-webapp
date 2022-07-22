package tictactoe.engine;

public class GameState {
    private final Status status;
    private final Player nextUp;
    private final Board board;

    public GameState(Status status, Player nextUp, Board board) {
        this.status = status;
        this.nextUp = nextUp;
        this.board = board;
    }

    public Status getStatus() {
        return status;
    }

    public Player getNextUp() {
        return nextUp;
    }

    public Board getBoard() {
        return board;
    }

    @Override
    public String toString() {
        return "Status: " + status + ", next up: " + nextUp;
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof GameState
                && ((GameState) o).status == this.status
                && ((GameState) o).nextUp == this.nextUp;
    }
}
