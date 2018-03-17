declare namespace SparkRequests {
    /**
     * Get the leaderboard entry data for the current player or a given player. 
     * For each leaderboard it returns the hichest score the player has
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.LeaderboardDataRequest();
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
    class GetLeaderboardEntriesRequest extends _Request<_GetLeaderboardEntriesResponse> {
        /**
         * The challenge leaderboards to return entries for
         * @Required No
         */
        challenges: string[];
        /**
         * Returns the leaderboard excluding the player’s social friends
         * @Required No
         */
        inverseSocial: boolean;
        /**
         * The list of leaderboards shortcodes
         * @Required No
         */
        leaderboards: string[];
        /**
         * The player id. Leave out to use the current player id
         * @Required No
         */
        player: string;
        /**
         * Set to true to include the player’s game friends
         * @Required No
         */
        social: boolean;
        /**
         * The types of team to apply this request to
         * @Required No
         */
        teamTypes: string[];
    }
    /**
     * A response containing leaderboard entry data for a given player. Example response: 
     */
    class _GetLeaderboardEntriesResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
