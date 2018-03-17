declare namespace SparkRequests {
    /**
     * Get the teams that the player is in. Can be filtered on team type and also on those teams that the player owns.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.GetTeamRequest();
     * request.ownerId = ...;
     * request.teamId = ...;
     * request.teamType = ...;
     * var response = request.Send();
     * 
     * var members = response.members; 
     * var owner = response.owner; 
     * var scriptData = response.scriptData; 
     * var teamId = response.teamId; 
     * var teamName = response.teamName; 
     * var teamType = response.teamType; 
     * var teams = response.teams; 
     * ```
     */
    class GetMyTeamsRequest extends _Request<_GetMyTeamsResponse> {
        /**
         * Set to true to only get teams owned by the player
         * @Required No
         */
        ownedOnly: boolean;
        /**
         * The type of teams to get
         * @Required No
         */
        teamTypes: string[];
    }
    /**
     * A response containing team data for teams that a player belong to
     */
    class _GetMyTeamsResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The team data
         */
        teams: Team[];
    }
}
