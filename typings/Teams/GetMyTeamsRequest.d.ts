declare namespace SparkRequests {
    /**
     * Get the teams that the player is in. Can be filtered on team type and also on those teams that the player owns.
     */
    class GetMyTeamsRequest extends _Request<_GetMyTeamsResponse> {
        /**
         * Set to true to only get teams owned by the player
         */
        ownedOnly: boolean;
        /**
         * The type of teams to get
         */
        teamTypes: string[];
    }
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
