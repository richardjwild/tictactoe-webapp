package tictactoe.engine;

public enum Square {
    TOP_MIDDLE, TOP_RIGHT, CENTRE_LEFT, CENTRE_MIDDLE, BOTTOM_LEFT, CENTRE_RIGHT, BOTTOM_MIDDLE, BOTTOM_RIGHT, TOP_LEFT;

    public static Square fromString(String string) {
        for (Square value : Square.values()) {
            if (value.name().equals(string))
                return value;
        }
        throw new IllegalArgumentException("Unknown value for square");
    }
}
