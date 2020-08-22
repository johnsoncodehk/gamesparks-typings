/**
 * An object that represents a pending match.
 */
interface PendingMatch {
    /**
     * The ID for the pending match.
     * @validity All Scripts
     * @example
     * pendingMatch.getId();
     */
    getId(): string
    /**
     * The match shortCode for the pending match.
     * @validity All Scripts
     * @example
     * pendingMatch.getMatchShortCode();
     */
    getMatchShortCode(): string
    /**
     * The match group for the pending match.
     * @validity All Scripts
     * @example
     * pendingMatch.getMatchGroup();
     */
    getMatchGroup(): string
    /**
     * The average skill of players in this pending match.
     * @validity All Scripts
     * @example
     * pendingMatch.getSkill();
     */
    getSkill(): number
    /**
     * The players already part of this pending match.
     * @validity All Scripts
     * @example
     * pendingMatch.getMatchedPlayers();
     */
    getMatchedPlayers(): SparkMatchedPlayer[]
    /**
     * Join this pending match to the given pending match.
     * @validity All Scripts
     * @returns The merged SparkPendingMatch if it was joined successfully,
     * @example
     * pendingMatch.joinPendingMatch(otherPendingMatch);
     */
    joinPendingMatch(pendingMatchToJoin: PendingMatch): PendingMatch
    /**
     * Find pending matches that are suitable for matchmaking with this one.
     * @validity All Scripts
     * @param maxMatchesToFind the maximum number of results to return
     * @returns An array of pending matches suitable for matching with this one.
     * @example
     * pendingMatch.findPendingMatches();
     */
    findPendingMatches(maxMatchesToFind: number): SparkPendingMatch[]
    /**
     * Returns the matchData for the pending match.
     * @validity All Scripts
     * @example
     * pendingMatch.getMatchData();
     */
    getMatchData(): any
}
