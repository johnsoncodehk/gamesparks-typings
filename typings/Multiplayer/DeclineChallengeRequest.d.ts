declare namespace SparkRequests {
    /**
     * Declines a challenge that has been issued to the current player.
     */
    class DeclineChallengeRequest extends _Request<_DeclineChallengeResponse> {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
    class _DeclineChallengeResponse extends _Response {
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
