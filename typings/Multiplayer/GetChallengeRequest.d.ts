declare namespace SparkRequests {
    /**
     * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * challengeInstanceId | INVALID | The supplied challengeInstanceId does not match a challenge related to the current player
     * 
     * @example
     * var request = new SparkRequests.GetChallengeRequest();
     * request.challengeInstanceId = ...;
     * request.message = ...;
     * var response = request.Send();
     * 
     * var challenge = response.challenge; 
     * var scriptData = response.scriptData; 
     */
    class GetChallengeRequest extends _Request<_GetChallengeResponse> {
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
     * A response containing the details of a challenge
     */
    class _GetChallengeResponse extends _Response {
        /**
         * A JSON object representing the challenge.
         */
        challenge: Challenge;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
