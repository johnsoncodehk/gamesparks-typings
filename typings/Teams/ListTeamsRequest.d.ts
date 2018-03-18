declare namespace SparkRequests {
    /**
     * Returns a list of teams. Can be filtered on team name or team type.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ListTeamsRequest();
     * request.entryCount = ...;
     * request.offset = ...;
     * request.teamNameFilter = ...;
     * request.teamTypeFilter = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * var teams = response.teams; 
     * ```
     */
    class ListTeamsRequest extends _Request<_ListTeamsResponse> {
        /**
         * The number of teams to return in a page (default=50)
         * @Required No
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         * @Required No
         */
        offset: number;
        /**
         * An optional filter to return teams with a matching name
         * @Required No
         */
        teamNameFilter: string;
        /**
         * An optional filter to return teams of a particular type
         * @Required No
         */
        teamTypeFilter: string;
    }
    /**
     * A response containing the list of teams for a game.
     */
    class _ListTeamsResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A list of JSON objects containing team information
         */
        teams: Team[];
    }
}
