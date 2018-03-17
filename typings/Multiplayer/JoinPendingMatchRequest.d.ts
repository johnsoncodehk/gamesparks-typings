declare namespace SparkRequests {
    /**
     * Requests to join a pending match (found via FindPendingMatchesRequest).
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * matchShortCode | may not be null | matchShortCode must be provided
     * matchShortCode | NOT_FOUND | No matchConfig was found with the given matchShortCode
     * match | NOT_IN_PROGRESS | There is no pending match for this player / shortCode / matchGroup currently in progress
     * pendingMatchId | NOT_AVAILABLE | The requested pending match ID is not available to be joined
     */
    class JoinPendingMatchRequest extends _Request<_JoinPendingMatchResponse> {
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
         * The pending match ID to join
         * @Required Yes
         */
        pendingMatchId: string;
    }
    /**
     * A response to a JoinPendingMatchRequest
     */
    class _JoinPendingMatchResponse extends _Response {
        /**
         * A JSON object containing the new pending match
         */
        pendingMatch: PendingMatch;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
