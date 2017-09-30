declare namespace SparkRequests {
    /**
     * Returns a list of teams. Can be filtered on team name or team type.
     */
    class ListTeamsRequest extends _Request<_ListTeamsResponse> {
        /**
         * The number of teams to return in a page (default=50)
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
        /**
         * An optional filter to return teams with a matching name
         */
        teamNameFilter: string;
        /**
         * An optional filter to return teams of a particular type
         */
        teamTypeFilter: string;
    }
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
