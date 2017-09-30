declare namespace SparkRequests {
    /**
     * Requests to join a pending match (found via FindPendingMatchesRequest).
     */
    class JoinPendingMatchRequest extends _Request<_JoinPendingMatchResponse> {
        /**
         * Optional. The matchGroup of the match this player previously registeredfor
         */
        matchGroup: string;
        /**
         * The shortCode of the match this player previously registered for
         */
        matchShortCode: string;
        /**
         * The pending match ID to join
         */
        pendingMatchId: string;
    }
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
