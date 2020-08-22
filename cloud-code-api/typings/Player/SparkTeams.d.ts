/**
 * Provides access to teams for the current game.
 * @example
 * var team = Spark.getTeams().getTeam(myTeamId);
 */
interface SparkTeams {
    /**
     * Returns a SparkTeam object that represents the team with the given teamId.
     * @example
     * var team = Spark.getTeams().getTeam(myTeamId);
     */
    getTeam(teamId: string): SparkTeam
    /**
     * Returns an array of SparkTeam objects for the given ownerId and teamType.
     * @example
     * var teams = Spark.getTeams().getTeamByOwnerIdAndTeamType(myOwnerId, myTeamType);
     */
    getTeamByOwnerIdAndTeamType(ownerId: string, teamType: string): SparkTeam[]
}
