package tictactoe.engine;

import java.util.Arrays;

public enum Square {
    TOP_MIDDLE, TOP_RIGHT, CENTRE_LEFT, CENTRE_MIDDLE, BOTTOM_LEFT, CENTRE_RIGHT, BOTTOM_MIDDLE, BOTTOM_RIGHT, TOP_LEFT;

    public static Square fromString(String string) {
        return Arrays.stream(Square.values())
                .filter(square -> square.name().equals(string))
                .findAny()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value for square"));
    }

}
