declare namespace SparkRequests {
    /**
     * Sends a message to all players involved in the challenge. The current player must be involved in the challenge for the message to be sent.
     * As the message is sent to all players, the current player will also see details of the message in the response. Read the section on response message aggregation for a description of this.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * challengeInstanceId | INVALID | The ID does not match a challenge the current player is involved with
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.CreateChallengeRequest();
     * request.accessType = ...;
     * request.autoStartJoinedChallengeOnMaxPlayers = ...;
     * request.challengeMessage = ...;
     * request.challengeShortCode = ...;
     * request.currency1Wager = ...;
     * request.currency2Wager = ...;
     * request.currency3Wager = ...;
     * request.currency4Wager = ...;
     * request.currency5Wager = ...;
     * request.currency6Wager = ...;
     * request.currencyWagers = ...;
     * request.eligibilityCriteria = ...;
     * request.endTime = ...;
     * request.expiryTime = ...;
     * request.maxAttempts = ...;
     * request.maxPlayers = ...;
     * request.minPlayers = ...;
     * request.silent = ...;
     * request.startTime = ...;
     * request.usersToChallenge = ...;
     * var response = request.Send();
     * 
     * var challengeInstanceId = response.challengeInstanceId; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ChatOnChallengeRequest extends _Request<_ChatOnChallengeResponse> {
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
     * A response to a chat on challenge request
     */
    class _ChatOnChallengeResponse extends _Response {
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
