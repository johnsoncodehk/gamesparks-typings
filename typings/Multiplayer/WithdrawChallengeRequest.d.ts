declare namespace SparkRequests {
    /**
     * Withdraws a challenge previously issued by the current player.
     * This can only be done while the challenge is in the ISSUED state. Once it’s been accepted the challenge can not be withdrawn.
     */
    class WithdrawChallengeRequest extends _Request<_WithdrawChallengeResponse> {
        /**
         * The ID of the challenge
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         */
        message: string;
    }
    class _WithdrawChallengeResponse extends _Response {
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
