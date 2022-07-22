package tictactoe.api;

import org.springframework.stereotype.Service;
import tictactoe.engine.Game;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class GameRepository {

    Map<UUID, Game> games = new HashMap<>();

    public void store(Game game, UUID gameId) {
        games.put(gameId, game);
    }
}
