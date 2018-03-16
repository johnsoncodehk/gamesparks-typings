declare namespace SparkRequests {
    /**
     * Performs a request for multiple players.
     */
    class BatchAdminRequest extends _Request<_BatchAdminResponse> {
        /**
         * The players to run the request for.
         * @Required Yes
         */
        playerIds: string[];
        /**
         * The request to be run for each player.
         * @Required Yes
         */
        request: DBObject;
    }
    /**
     * A response containing the individual responses for requests performed via a BatchAdminRequest
     */
    class _BatchAdminResponse extends _Response {
        /**
         * A map of responses by player ID
         */
        responses: JSON;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
