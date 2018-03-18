declare namespace SparkRequests {
    /**
     * Records the end of the current player’s active session.
     * The SDK will automatically create a new session ID when the application is started, this method can be useful to call when the app goes into the background to allow reporting on player session length.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.EndSessionRequest();
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * var sessionDuration = response.sessionDuration; 
     * ```
     */
    class EndSessionRequest extends _Request<_EndSessionResponse> {
    }
    /**
     * A response to an end session request
     */
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
