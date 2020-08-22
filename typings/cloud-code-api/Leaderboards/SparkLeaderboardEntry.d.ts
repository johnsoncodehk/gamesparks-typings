/**
 * An entry within a leaderboard.
 * @example
 * var entry = leaderboard.getEntries().next();
 */
interface SparkLeaderboardEntry {
    /**
     * Returns the playerId of the player whose entry in the leaderboard this is.
     * @example
     * var playerId = entry.getUserId();
     */
    getUserId(): string
    /**
     * Returns the displayName of the player whose entry in the leaderboard this is.
     * @example
     * var displayName = entry.getUserName();
     */
    getUserName(): string
    /**
     * Returns the position of this entry within the leaderboard.
     * @example
     * var rank = entry.getRank();
     */
    getRank(): number
    /**
     * Returns the rank of the player as a percentage of total entries.
     * @example
     * var rankPercentage = entry.getRankPercentage();
     */
    getRankPercentage(): number
    /**
     * Returns a String representing the time this entry was recorded, in the format yyyy-MM-dd'T'HH:mm'Z'.
     * @example
     * var when = entry.getWhen();
     */
    getWhen(): string
    /**
     * Returns the attribute name from this leaderboard entry.  Use this to get custom attributes from this entry.
     * @param name the name of the attribute to be returned
     * @example
     * var score = entry.getAttribute("SCORE");
     */
    getAttribute(name: string): any
}
