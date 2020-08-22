/**
 * Provides access to the platform's multiplayer capabilities.
 * @example
 * var multiplayer = Spark.getMultiplayer();
 */
interface SparkMultiplayer {
    /**
     * Create a match between the given players.
     * @validity All Scripts
     * @param players An array of players to include in the match
     * @returns The matchId if a match was successfully created, or null
     * @example
     * var matchId = Spark.getMultiplayer().createMatch(player1, player2);
     */
    createMatch(players: SparkPlayer[]): string
    /**
     * Create a match between the players for the given playerIds.
     * @validity All Scripts
     * @param playerIds An array of playerIds to include in the match
     * @returns The matchId if a match was successfully created, or null
     * @example
     * var matchId = Spark.getMultiplayer().createMatchById(playerId1, playerId2);
     */
    createMatchById(playerIds: string[]): string
    /**
     * Create a match between the given players, using the given matchId.
     * @validity All Scripts
     * @param matchId The matchId to use when creating this match
     * @param players An array of players to include in the match
     * @returns The matchId if a match was successfully created, or null
     * @example
     * var matchId = Spark.getMultiplayer().createMatchWithMatchId("myId", player1, player2);
     */
    createMatchWithMatchId(matchId: string, players: SparkPlayer[]): string
    /**
     * Create a match between the players for the given playerIds, using the given matchId.
     * @validity All Scripts
     * @param matchId The matchId to use when creating this match
     * @param playerIds An array of playerIds to include in the match
     * @returns The matchId if a match was successfully created, or null
     * @example
     * var matchId = Spark.getMultiplayer().createMatchById("myId", playerId1, playerId2);
     */
    createMatchByIdWithMatchId(matchId: string, playerIds: string[]): string
    /**
     * Load the match with the given matchId
     * @validity All Scripts
     * @param matchId The id of the match to load
     * @returns The match if a match was found with the given id
     * @example
     * var matchId = Spark.getMultiplayer().loadMatch(matchId);
     */
    loadMatch(matchId: string): SparkMatch
    /**
     * Load the match configuration for the given shortCode
     * @validity All Scripts
     * @param shortCode The shortCode of the match configuration to load
     * @returns The match configuration if a one was found with the given shortCode
     * @example
     * var matchConfig = Spark.getMultiplayer().getMatchConfig(shortCode);
     */
    getMatchConfig(shortCode: string): SparkMatchConfig
    /**
     * Load the pending match with the given pendingMatchId
     * @validity All Scripts
     * @param pendingMatchId The id of the pending match to load
     * @returns The pending match if one was found with the given id
     * @example
     * var pendingMatch = Spark.getMultiplayer().loadPendingMatchById(pendingMatchId);
     */
    loadPendingMatchById(pendingMatchId: string): PendingMatch
    /**
     * Load the pending match containing the given player for the match shortCode and match group.
     * @validity All Scripts
     * @param player A player within the pending match
     * @param shortCode The shortCode of the match configuration for the pending match
     * @param matchGroup The matchGroup for the pending match
     * @returns The pending match if one was found with the given id
     * @example
     * var pendingMatch = Spark.getMultiplayer().loadPendingMatchByPlayer(player, matchShortCode, matchGroup);
     */
    loadPendingMatchByPlayer(player: SparkPlayer, shortCode: string, matchGroup: string): PendingMatch
    /**
     * Cancel matchmaking for the given player, match shortCode and match group.
     * @validity All Scripts
     * @param player A player within a pending match
     * @param shortCode The shortCode of the match configuration for the pending match
     * @param matchGroup The matchGroup for the pending match
     * @example
     * Spark.getMultiplayer().cancelMatchmaking(player, matchShortCode, matchGroup);
     */
    cancelMatchmaking(player: SparkPlayer, shortCode: string, matchGroup: string): void
}
