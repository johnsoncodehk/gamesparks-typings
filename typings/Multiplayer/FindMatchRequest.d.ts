declare namespace SparkRequests {
    /**
     * @Deprecated. Use MatchmakingRequest instead.
     * Find a match for this player, using the given skill and matchShortCode.
     * Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.
     * Each player must match the other for the match to be found.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * skill | may not be null | skill must be provided
     * matchShortCode | may not be null | matchShortCode must be provided
     * matchShortCode | NOT_FOUND | No matchConfig was found with the given matchShortCode
     * match | NOT_FOUND | No match was found for the current player
     * match | HEAD_TO_HEAD_ONLY | To match multiple opponents please use MatchmakingRequest
     * match | NO_DROP_IN_DROP_OUT_AVAILABLE | To use the drop-in-drop-out functionality please use MatchmakingRequest
     * match | NO_MANUAL_MATCHMAKING | To use the manual matchmaking functionality please use MatchmakingRequest
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
    class FindMatchRequest extends _Request<_FindMatchResponse> {
        /**
         * The action to take on the already in-flight request for this match. Currently supported actions are: 'cancel’
         * @Required No
         */
        action: string;
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
         * The skill of the player looking for a match
         * @Required No
         */
        skill: number;
    }
    /**
     * A response to a find match request
     */
    class _FindMatchResponse extends _Response {
        /**
         * The accessToken used to authenticate this player for this match
         */
        accessToken: string;
        /**
         * The host to connect to for this match
         */
        host: string;
        /**
         * MatchData is arbitrary data that can be stored in a Match instance by a Cloud Code script.
         */
        matchData: JSON;
        /**
         * The id for this match instance
         */
        matchId: string;
        /**
         * The opponents this player has been matched against
         */
        opponents: Player[];
        /**
         * The peerId of this player within the match
         */
        peerId: number;
        /**
         * The id of the current player
         */
        playerId: string;
        /**
         * The port to connect to for this match
         */
        port: number;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
