declare namespace SparkRequests {
    /**
     * Declines a challenge that has been issued to the current player.
     */
    class DeclineChallengeRequest extends _Request<_DeclineChallengeResponse> {
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
    class _DeclineChallengeResponse extends _Response {
        /**
         * The challenge instance id
         */
        challengeInstanceId: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
