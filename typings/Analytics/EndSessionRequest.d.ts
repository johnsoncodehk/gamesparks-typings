declare namespace SparkRequests {
    /**
     * Records the end of the current player’s active session.
     * The SDK will automatically create a new session ID when the application is started, this method can be useful to call when the app goes into the background to allow reporting on player session length.
     */
    class EndSessionRequest extends _Request<_EndSessionResponse> {
    }
    class _EndSessionResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The length of this session
         */
        sessionDuration: number;
    }
}
