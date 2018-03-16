declare namespace SparkRequests {
    /**
     * Returns detials of the current social connections of this player. Each connection .
     */
    class SocialStatusRequest extends _Request<_SocialStatusResponse> {
    }
    /**
     * A response containing the details of a the players social connections
     */
    class _SocialStatusResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A list of social statuses.
         */
        statuses: SocialStatus[];
    }
}
