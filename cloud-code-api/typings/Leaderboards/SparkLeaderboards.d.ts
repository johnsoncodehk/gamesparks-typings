/**
 * Provides access to the leaderboards for the current game.
 * var leaderboards = Spark.getLeaderboards();
 */
interface SparkLeaderboards {
    /**
     * Allows a script to load a SparkLeaderboard object by its shortCode.
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getLeaderboard(shortCode);
     */
    getLeaderboard(shortCode: string): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the current player and the players with the given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param friendsIds the ids of the other players to be included in this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getSocialLeaderboard(shortCode, myplayerids);
     */
    getSocialLeaderboard(shortCode: string, friendIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode for the current player, where the social group excludes the players with the given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param friendsIds the ids of the other players to be excluded from this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseSocialLeaderboard(shortCode, myplayerids);
     */
    getInverseSocialLeaderboard(shortCode: string, friendIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the player with the given playerId and the players with given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param playerId the playerId to load the social leaderboard for.
     * @param friendsIds the ids of the other players to be included in this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getSocialLeaderboardAs(shortCode, myplayerid, myplayerids);
     */
    getSocialLeaderboardAs(shortCode: string, playerId: string, friendIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode for the given player, where the social group excludes the players with the given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param playerId the playerId to load the social leaderboard for.
     * @param friendsIds the ids of the other players to be excluded from this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseSocialLeaderboardAs(shortCode, myplayerid, myplayerids);
     */
    getInverseSocialLeaderboardAs(shortCode: string, playerId: string, friendIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the current player and the players belonging to the teams with the given teamIds
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param teamids the ids of the teams to be included in this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getTeamLeaderboard(shortCode, myteamids);
     */
    getTeamLeaderboard(shortCode: string, teamIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode for the current player, where the social group excludes the players belonging to the teams with the given teamIds
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param teamids the ids of the teams to be excluded from this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseTeamLeaderboard(shortCode, myteamids);
     */
    getInverseTeamLeaderboard(shortCode: string, teamIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the player for the given playerId and the players belonging to the teams with the given teamIds
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param playerId the playerId to load the social leaderboard for.
     * @param teamids the ids of the teams to be included in this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getTeamLeaderboard(shortCode, myplayerid, myteamids);
     */
    getTeamLeaderboardAs(shortCode: string, playerId: string, teamIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard object by its shortCode for the given player, where the social group excludes the players belonging to the teams with the given teamIds
     * @validity All Scripts
     * @param shortCode the shortCode of the leaderboard.
     * @param playerId the playerId to load the social leaderboard for.
     * @param teamids the ids of the teams to be excluded from this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseTeamLeaderboard(shortCode, myplayerid, myteamids);
     */
    getInverseTeamLeaderboardAs(shortCode: string, playerId: string, teamIds: string[]): SparkLeaderboard
    /**
     * Gives access to all leaderboards configured for the game
     * @validity All Scripts
     * @example
     * var leaderboards = Spark.getLeaderboards().listLeaderboards();
     */
    listLeaderboards(): SparkLeaderboard[]
    /**
     * Allows a script to load a SparkLeaderboard object for a specific challenge by the challengeInstanceId.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @example
     * var leaderboard = Spark.getLeaderboards().getChallengeLeaderboard(challengeInstanceId);
     */
    getChallengeLeaderboard(challengeInstanceId: string): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the current player and the given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param friendsIds the ids of the other players to be included in this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getSocialChallengeLeaderboard(challengeInstanceId, myplayerids);
     */
    getSocialChallengeLeaderboard(challengeInstanceId: string, friendsIds: string[]): SparkLeaderboard
    /**
     * Performs a union on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inAny = Spark.getLeaderboards().union(lhs, rhs).evaluate();
     */
    union(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs a union on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inAny = Spark.getLeaderboards().union(lhs, rhs).evaluate();
     */
    union(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Performs a union on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inAny = Spark.getLeaderboards().union(lhs, rhs).evaluate();
     */
    union(lhs: SparkLeaderboard, rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs a union on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inAny = Spark.getLeaderboards().union(lhs, rhs).evaluate();
     */
    union(lhs: SparkLeaderboard, rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players with the given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param friendsIds the ids of the other players to be excluded from this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseSocialChallengeLeaderboard(challengeInstanceId, myplayerids);
     */
    getInverseSocialChallengeLeaderboard(challengeInstanceId: string, friendsIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the player with the given playerId and the players with given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param playerId the playerId to load the social leaderboard for.
     * @param friendsIds the ids of the other players to be included in this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getSocialChallengeLeaderboardAs(challengeInstanceId, myplayerid, myplayerids);
     */
    getSocialChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, friendIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players with given playerIds.
     * If no playerIds are provided the player's game friends are used.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param playerId the playerId to load the social leaderboard for.
     * @param friendsIds the ids of the players to be excluded from this social leaderboard.
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseSocialChallengeLeaderboardAs(challengeInstanceId, myplayerid, myplayerids);
     */
    getInverseSocialChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, friendIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the current player and the players belonging to the teams with the given teamIds.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param teamids the ids of the teams to be included in this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getTeamChallengeLeaderboard(challengeInstanceId, myteamids);
     */
    getTeamChallengeLeaderboard(challengeInstanceId: string, teamIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players belonging to the teams with the given teamIds.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param teamids the ids of the teams to be excluded from this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseTeamChallengeLeaderboard(challengeInstanceId, myteamids);
     */
    getInverseTeamChallengeLeaderboard(challengeInstanceId: string, teamIds: string[]): SparkLeaderboard
    /**
     * Performs an intersection on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inBoth = Spark.getLeaderboards().intersection(lhs, rhs).evaluate();
     */
    intersection(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Performs an intersection on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inBoth = Spark.getLeaderboards().intersection(lhs, rhs).evaluate();
     */
    intersection(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs an intersection on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inBoth = Spark.getLeaderboards().intersection(lhs, rhs).evaluate();
     */
    intersection(lhs: SparkLeaderboard, rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs an intersection on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var inBoth = Spark.getLeaderboards().intersection(lhs, rhs).evaluate();
     */
    intersection(lhs: SparkLeaderboard, rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge where the social group contains the player for the given playerId and the players belonging to the teams with the given teamIds.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param playerId the playerId to load the social leaderboard for.
     * @param teamids the ids of the teams to be included in this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getTeamChallengeLeaderboard(challengeInstanceId, myplayerid, myteamids);
     */
    getTeamChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, teamIds: string[]): SparkLeaderboard
    /**
     * Allows a script to load a social SparkLeaderboard for a specific challenge for the given player, where the social group  excludes the players belonging to the teams with the given teamIds.
     * @validity All Scripts
     * @param challengeInstanceId the id of the challenge instance to load the leaderboard for.
     * @param playerId the playerId to load the social leaderboard for.
     * @param teamids the ids of the teams to be excluded from this social leaderboard
     * @example
     * var leaderboard = Spark.getLeaderboards().getInverseTeamChallengeLeaderboard(challengeInstanceId, myplayerid, myteamids);
     */
    getInverseTeamChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, teamIds: string[]): SparkLeaderboard
    /**
     * Performs a difference on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var onlyInFirst = Spark.getLeaderboards().difference(lhs, rhs).evaluate();
     */
    difference(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboard): SparkLeaderboardOperations
    /**
     * Performs a difference on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var onlyInFirst = Spark.getLeaderboards().difference(lhs, rhs).evaluate();
     */
    difference(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs a difference on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var onlyInFirst = Spark.getLeaderboards().difference(lhs, rhs).evaluate();
     */
    difference(lhs: SparkLeaderboard, rhs: SparkLeaderboardOperations): SparkLeaderboardOperations
    /**
     * Performs a difference on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.
     * Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.
     * To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.
     * @validity All Scripts
     * @param lhs the left-hand side of the operation.
     * @param rhs the the right-hand side of the operation.
     * @example
     * var onlyInFirst = Spark.getLeaderboards().difference(lhs, rhs).evaluate();
     */
    difference(lhs: SparkLeaderboard, rhs: SparkLeaderboard): SparkLeaderboardOperations
}
