declare namespace SparkRequests {
    /**
     * Returns a list of all leaderboards configured in the game.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.SocialLeaderboardDataRequest();
     * request.challengeInstanceId = ...;
     * request.dontErrorOnNotSocial = ...;
     * request.entryCount = ...;
     * request.friendIds = ...;
     * request.includeFirst = ...;
     * request.includeLast = ...;
     * request.inverseSocial = ...;
     * request.leaderboardShortCode = ...;
     * request.offset = ...;
     * request.social = ...;
     * request.teamIds = ...;
     * request.teamTypes = ...;
     * var response = request.Send();
     * 
     * var challengeInstanceId = response.challengeInstanceId; 
     * var data = response.data; 
     * var first = response.first; 
     * var last = response.last; 
     * var leaderboardShortCode = response.leaderboardShortCode; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ListLeaderboardsRequest extends _Request<_ListLeaderboardsResponse> {
    }
    /**
     * A response containing a list of all leaderboards configured in the game.
     */
    class _ListLeaderboardsResponse extends _Response {
        /**
         * A list of JSON object containing leaderboard meta data
         */
        leaderboards: Leaderboard[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
