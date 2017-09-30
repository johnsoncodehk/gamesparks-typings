declare namespace SparkRequests {
    /**
     * Find the details of an existing match this player belongs to, using the matchId
     */
    class MatchDetailsRequest extends _Request<_MatchDetailsResponse> {
        /**
         * The matchId to find the details of
         */
        matchId: string;
        /**
         * Adds realtime server details if the match has been created using Cloud Code and it has not been realtime enabled
         */
        realtimeEnabled: boolean;
    }
    class _MatchDetailsResponse extends _Response {
        /**
         * The matchId to find the details of
         */
        matchId: string;
        /**
         * Adds realtime server details if the match has been created using Cloud Code and it has not been realtime enabled
         */
        realtimeEnabled: boolean;
    }
}
