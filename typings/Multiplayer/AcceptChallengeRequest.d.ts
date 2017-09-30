declare namespace SparkRequests {
    /**
     * Accepts a challenge that has been issued to the current player.
     */
    class AcceptChallengeRequest extends _Request<_AcceptChallengeResponse> {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
    class _AcceptChallengeResponse extends _Response {
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
