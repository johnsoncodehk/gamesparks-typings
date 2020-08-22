/**
 * A comparison operation on the owners (players in a player-based leaderboard, teams in a team-based leaderboard) of entries within leaderboards.
 * var operation = Spark.getLeaderboards().union(lb1, lb2);
 */
interface SparkLeaderboardOperations {
    /**
     * Performs a union on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.
     * Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inAny = operation.union(rhs).evaluate();
     */
    union(rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Performs a union on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.
     * Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inAny = operation.union(rhs).evaluate();
     */
    union(rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs an intersection on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.
     * Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inBoth = operation.intersection(rhs).evaluate();
     */
    intersection(rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Performs an intersection on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.
     * Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inBoth = operation.intersection(rhs).evaluate();
     */
    intersection(rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs a difference on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.
     * Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param rhs the the right-hand side of the operation.
     * @example
     * var onlyInFirst = operation.difference(rhs).evaluate();
     */
    difference(rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Performs a difference on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.
     * Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param rhs the the right-hand side of the operation.
     * @example
     * var onlyInFirst = operation.difference(rhs).evaluate();
     */
    difference(rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Returns an array of ids representing the result set of evaluating this operation.
     * @validity All Scripts
     * @example
     * var results = operation.evaluate();
     */
    evaluate(): string[]
}
