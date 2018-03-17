declare namespace SparkRequests {
    /**
     * Allows a player to find challenges that they are eligible to join.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * eligibility | { “XXX” : “UNRECOGNISED”} | XXX is not a valid field of eligibility
     * eligibility | { “segments” : {“XXX” : “MALFORMED”}} | The value provied for XXX is not in the correct format
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.FindMatchRequest();
     * request.action = ...;
     * request.matchGroup = ...;
     * request.matchShortCode = ...;
     * request.skill = ...;
     * var response = request.Send();
     * 
     * var accessToken = response.accessToken; 
     * var host = response.host; 
     * var matchData = response.matchData; 
     * var matchId = response.matchId; 
     * var opponents = response.opponents; 
     * var peerId = response.peerId; 
     * var playerId = response.playerId; 
     * var port = response.port; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class FindChallengeRequest extends _Request<_FindChallengeResponse> {
        /**
         * The type of challenge to find, either PUBLIC or FRIENDS.  Defaults to FRIENDS
         * @Required Yes
         */
        accessType: string;
        /**
         * The number of challenges to return (MAX=50)
         * @Required No
         */
        count: number;
        /**
         * Optional.  Allows the current player’s eligibility to be overridden by what is provided here.
         * @Required Yes
         */
        eligibility: JSON;
        /**
         * The offset to start from when returning challenges (used for paging)
         * @Required No
         */
        offset: number;
        /**
         * Optional shortCodes to filter the results by challenge type
         * @Required No
         */
        shortCode: string[];
    }
    /**
     * A response to a find challenge request
     */
    class _FindChallengeResponse extends _Response {
        /**
         * A list of JSON objects representing the challenges.
         */
        challengeInstances: Challenge[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
