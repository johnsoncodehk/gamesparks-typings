/**
 * Provides access to an instance of a team
 * @example
 * var team = Spark.getTeams().getTeam(myTeamId);
 */
interface SparkTeam {
    /**
     * Gets the playerId of the player who owns this team.
     * @example
     * var ownerId = Spark.getTeams().getTeam(myTeamId).getOwnerId();
     */
    getOwnerId(): string
    /**
     * Gets the teamId of this team.
     * @example
     * var teamId = Spark.getTeams().getTeam(myTeamId).getTeamId();
     */
    getTeamId(): string
    /**
     * Gets the name of this team.
     * @example
     * var teamName = Spark.getTeams().getTeam(myTeamId).getTeamName();
     */
    getTeamName(): string
    /**
     * Gets the teamType of this team.
     * @example
     * var teamType = Spark.getTeams().getTeam(myTeamId).getTeamType();
     */
    getTeamType(): string
    /**
     * Gets an array containing the playerIds of the members of this team.
     * @example
     * var memberIds = Spark.getTeams().getTeam(myTeamId).getMemberIds();
     */
    getMemberIds(): string[]
    /**
     * Updates the ownerId of this team.
     * Returns true if the ownerId was successfully updated, otherwise false.
     * @example
     * var success = Spark.getTeams().getTeam(myTeamId).setOwnerId(newOwnerId);
     */
    setOwnerId(playerId: string): boolean
    /**
     * Sets the name of this team.
     * @example
     * var success = Spark.getTeams().getTeam(myTeamId).setTeamName("TeamName");
     */
    setTeamName(teamName: string): boolean
    /**
     * Adds the given playerIds as members to this team.
     * @example
     * Spark.getTeams().getTeam(myTeamId).addMembers(myPlayerId1, myPlayerId2);
     */
    addMembers(playerIds: string[]): void
    /**
     * Removes the given playerIds from the list of members of this team.
     * @example
     * Spark.getTeams().getTeam(myTeamId).removeMembers(myPlayerId1, myPlayerId2);
     */
    removeMembers(playerIds: string[]): void
    /**
     * Drops this team instance, deleting the underlying team data.
     * Returns true if the team has been dropped.
     * @example
     * var success = Spark.getTeams().getTeam(myTeamId).drop();
     */
    drop(): boolean
    /**
     * Lists the last 
     * @example
     * var history = Spark.getTeams().getTeam(myTeamId).listChatMessages(50, 0);
     */
    listChatMessages(count: number, offset: number): ChatMessage[]
    /**
     * Get a message from the chat history by its id.
     * @example
     * var message = Spark.getTeams().getTeam(myTeamId).getChatMessage(chatMessageId);
     */
    getChatMessage(chatMessageId: string): any
    /**
     * Delete a message from the chat history by its id.
     * Returns true if the message has been removed from the chat history.
     * @example
     * var success = Spark.getTeams().getTeam(myTeamId).deleteChatMessage(chatMessageId);
     */
    deleteChatMessage(chatMessageId: string): boolean
    /**
     * Add an achievement to this team (and its players).
     * Returns true if the achievement was added to the team or any of its players.
     * @example
     * var success = Spark.getTeams().getTeam(myTeamId).addAchievement(achievementShortCode);
     */
    addAchievement(achievementShortCode: string): boolean
    /**
     * Remove an achievement from this team (and its players).
     * Returns true if the achievement was removed from the team or any of its players.
     * @example
     * var success = Spark.getTeams().getTeam(myTeamId).removeAchievement(achievementShortCode);
     */
    removeAchievement(achievementShortCode: string): boolean
}
