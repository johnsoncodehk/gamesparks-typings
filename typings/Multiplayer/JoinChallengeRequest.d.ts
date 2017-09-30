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
         * Whether the player successfully joined the challenge
         */
        joined: boolean;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
