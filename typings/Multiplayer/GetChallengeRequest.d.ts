declare namespace SparkRequests {
    /**
     * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.
     */
    class GetChallengeRequest extends _Request<_GetChallengeResponse> {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
    class _GetChallengeResponse extends _Response {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
}
