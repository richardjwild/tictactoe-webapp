package tictactoe.backend.repository;

import org.springframework.stereotype.Service;
import tictactoe.engine.Game;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public class GameRepository {

    Map<UUID, Game> games = new HashMap<>();

    public void store(Game game, UUID gameId) {
        games.put(gameId, game);
    }

    public Optional<Game> retrieve(UUID gameId) {
        if (games.containsKey(gameId))
            return Optional.of(games.get(gameId));
        else
            return Optional.empty();
    }
}
