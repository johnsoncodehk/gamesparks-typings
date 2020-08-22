/**
 * A cursor over entries within a leaderboard.
 * @example
 * var leaderboard = Spark.getLeaderboards().getLeaderboard(shortCode).getEntries();
 */
interface SparkLeaderboardCursor {
    /**
     * Returns true if there are more entries available.
     * @example
     * var hasNext = cursor.hasNext();
     */
    hasNext(): boolean
    /**
     * Returns the entry the cursor is at and moves the cursor ahead by one.
     * @example
     * var entry = cursor.next();
     */
    next(): SparkLeaderboardEntry
}
