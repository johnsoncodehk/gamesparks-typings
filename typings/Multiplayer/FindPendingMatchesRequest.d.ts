declare namespace SparkRequests {
    /**
     * Find other pending matches that will match this player’s previously submitted MatchmakingRequest.
     * Used for manual matching of players, where you want control over which pending match should be chosen.
     * Each player must match the other for the pending match to be found.
     */
    class FindPendingMatchesRequest extends _Request<_FindPendingMatchesResponse> {
        /**
         * Optional. The matchGroup of the match this player previously registeredfor
         * @Required No
         */
        matchGroup: string;
        /**
         * The shortCode of the match this player previously registered for
         * @Required Yes
         */
        matchShortCode: string;
        /**
         * Optional. The maximum number of pending matches to return (default=10)
         * @Required No
         */
        maxMatchesToFind: number;
    }
    /**
     * A response to a FindPendingMatchesRequest
     */
    class _FindPendingMatchesResponse extends _Response {
        /**
         * A list of JSON objects containing pending matches
         */
        pendingMatches: PendingMatch[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
