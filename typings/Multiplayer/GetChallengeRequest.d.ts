declare namespace SparkRequests {
    /**
     * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.
     */
    class GetChallengeRequest extends _Request<_GetChallengeResponse> {
        /**
         * The ID of the challenge
         * @Required Yes
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         * @Required No
         */
        message: string;
    }
    class _GetChallengeResponse extends _Response {
        /**
         * A JSON object representing the challenge.
         */
        challenge: Challenge;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
