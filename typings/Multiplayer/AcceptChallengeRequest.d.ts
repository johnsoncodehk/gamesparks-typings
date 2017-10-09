declare namespace SparkRequests {
    /**
     * Accepts a challenge that has been issued to the current player.
     */
    class AcceptChallengeRequest extends _Request<_AcceptChallengeResponse> {
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
    class _AcceptChallengeResponse extends _Response {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
