/**
 * Provides access to a match's details.
 * @example
 * var match = Spark.getMultiplayer().loadMatch(matchId);
 */
interface SparkMatch {
    /**
     * @validity All Scripts
     * @returns The id of this match
     * @example
     * var matchId = match.getId()
     */
    getId(): string
    /**
     * @validity All Scripts
     * @returns An array containing all of the participants of this match
     * @example
     * var participant = match.getParticipants()
     */
    getParticipants(): SparkParticipant[]
    /**
     * @validity All Scripts
     * @returns The details of the realtime server on which this match will take place.
     * @example
     * var server = match.getServer()
     */
    getServer(): SparkRealtimeServer
    /**
     * Add the given players to this match.
     * @validity All Scripts
     * @example
     * match.addPlayers(playersToAdd)
     */
    addPlayers(players: SparkPlayer[]): void
    /**
     * Add the players with the given playerIds to this match.
     * @validity All Scripts
     * @example
     * match.addPlayersById(playerIdsToAdd)
     */
    addPlayersById(playerIds: string[]): void
    /**
     * Remove the given players from this match.
     * @validity All Scripts
     * @example
     * match.removePlayers(playersToRemove)
     */
    removePlayers(players: SparkPlayer[]): void
    /**
     * Remove the players with the given playerIds from this match.
     * @validity All Scripts
     * @example
     * match.removePlayersById(playerIdsToRemove)
     */
    removePlayersById(playerIds: string[]): void
    /**
     * If this match is not already realtime enabled, this method will enabled realtime.
     * @validity All Scripts
     * @example
     * match.enableRealtime();
     */
    enableRealtime(): void
    /**
     * If this match is not already realtime enabled, this method will enabled realtime.
     * The realtime servers for this match will be configured to use the realtime script provided
     * @validity All Scripts
     * @example
     * match.enableRealtime('MY_RT_SCRIPT');
     */
    enableRealtime(script: string): void
    /**
     * Returns the matchData for the match instance.
     * @validity All Scripts
     * @example
     * match.getMatchData();
     */
    getMatchData(): any
    /**
     * Whether this match has realtime servers enabled.
     * @validity All Scripts
     * @example
     * var isEnabledForRealtime = match.isRealtimeEnabled();
     */
    isRealtimeEnabled(): boolean
    /**
     * Sets the matchData for the match instance.
     * @validity All Scripts
     * @example
     * match.setMatchData(matchData);
     */
    setMatchData(matchData: any): void
}
