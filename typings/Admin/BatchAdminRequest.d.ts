declare namespace SparkRequests {
    /**
     * Performs a request for multiple players.
     */
    class BatchAdminRequest extends _Request<_BatchAdminResponse> {
        /**
         * The players to run the request for.
         */
        playerIds: string[];
        /**
         * The request to be run for each player.
         */
        request: DBObject;
    }
    class _BatchAdminResponse extends _Response {
        /**
         * The players to run the request for.
         */
        playerIds: string[];
        /**
         * The request to be run for each player.
         */
        request: DBObject;
    }
}
