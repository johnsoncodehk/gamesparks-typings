declare namespace SparkRequests {
    /**
     * Allows a player to join an open challenge.
     */
    class JoinChallengeRequest extends _Request<_JoinChallengeResponse> {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * Optional.  Allows the current player’s eligibility to be overridden by what is provided here.
         */
        eligibility: JSON;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
    class _JoinChallengeResponse extends _Response {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * Optional.  Allows the current player’s eligibility to be overridden by what is provided here.
         */
        eligibility: JSON;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
}
