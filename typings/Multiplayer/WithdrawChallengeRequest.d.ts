declare namespace SparkRequests {
    /**
     * Withdraws a challenge previously issued by the current player.
     * This can only be done while the challenge is in the ISSUED state. Once it’s been accepted the challenge can not be withdrawn.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * challengeInstanceId | INVALID | The ID does not match a challenge in the ISSUED state that was issued by the current player
     */
    class WithdrawChallengeRequest extends _Request<_WithdrawChallengeResponse> {
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
    /**
     * A response containing the challenge instance id that was withdrawn by a player
     */
    class _WithdrawChallengeResponse extends _Response {
        /**
         * A challenge instance id
         */
        challengeInstanceId: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
