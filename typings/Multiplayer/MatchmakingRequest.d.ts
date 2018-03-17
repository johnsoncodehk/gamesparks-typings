declare namespace SparkRequests {
    /**
     * Register this player for matchmaking, using the given skill and matchShortCode.
     * Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.
     * Each player must match the other for the match to be found.
     * If the matchShortCode points to a match with realtime enabled, in order to minimise latency, the location of Players and their proximity to one another takes precedence over their reciprocal skill values.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * skill | may not be null | skill must be provided
     * action | UNKNOWN | action is not valid
     * matchShortCode | may not be null | matchShortCode must be provided
     * matchShortCode | NOT_FOUND | No matchConfig was found with the given matchShortCode
     * customQuery | INVALID_QUERY | No customQuery is not a valid mongo query
     * match | NOT_FOUND | No match was found for the current player
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.WithdrawChallengeRequest();
     * request.challengeInstanceId = ...;
     * request.message = ...;
     * var response = request.Send();
     * 
     * var challengeInstanceId = response.challengeInstanceId; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class MatchmakingRequest extends _Request<_MatchmakingResponse> {
        /**
         * The action to take on the already in-flight request for this match. Currently supported actions are: 'cancel’
         * @Required No
         */
        action: string;
        /**
         * The query that will be applied to the PendingMatch collection
         * @Required No
         */
        customQuery: JSON;
        /**
         * A JSON Map of any data that will be associated to the pending match
         * @Required No
         */
        matchData: JSON;
        /**
         * Optional. Players will be grouped based on the distinct value passed in here, only players in the same group can be matched together
         * @Required No
         */
        matchGroup: string;
        /**
         * The shortCode of the match type this player is registering for
         * @Required Yes
         */
        matchShortCode: string;
        /**
         * A JSON Map of any data that will be associated to this user in a pending match
         * @Required No
         */
        participantData: JSON;
        /**
         * The skill of the player looking for a match
         * @Required No
         */
        skill: number;
    }
    /**
     * A response to a matchmaking request
     */
    class _MatchmakingResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
