declare namespace SparkRequests {
    /**
     * Accepts a challenge that has been issued to the current player.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * challengeInstanceId | INVALID | The ID does not match a challenge the user is involved with
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.AcceptChallengeRequest();
     * request.challengeInstanceId = ...;
     * request.message = ...;
     * var response = request.Send();
     * 
     * var challengeInstanceId = response.challengeInstanceId; 
     * var scriptData = response.scriptData; 
     * ```
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
    /**
     * A response containing the challenge instance id that was accepted.
     */
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
