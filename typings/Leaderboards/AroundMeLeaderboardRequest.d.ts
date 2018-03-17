declare namespace SparkRequests {
    /**
     * Returns leaderboard data that is adjacent to the currently signed in player’s position within the given leaderboard.
     * 
     * Error Codes
     * ---
     * Key | Value | Description
     * --- | --- | ---
     * leaderboardShortCode|challengeInstanceId | ONLY_ONE | Both shortCode and challengeInstanceId were supplied, only one should be supplied
     * leaderboardShortCode|challengeInstanceId | REQUIRED | Both shortCode and challengeInstanceId were missing
     * leaderboardShortCode | INVALID | The shortCode does not match a configured leaderboard
     * challengeInstanceId | NO_LEADERBOARD | The challengeInstanceId maps to a challenge without a leaderboard configured
     * challengeInstanceId | INVALID | The challengeInstanceId supplied did not match a challenge related to the current play
     * challengeInstanceVersion | INVALID | The challengeInstance predates support for this request type
     */
    class AroundMeLeaderboardRequest extends _Request<_AroundMeLeaderboardResponse> {
        /**
         * The challenge instance to get the leaderboard data for
         * @Required No
         */
        challengeInstanceId: string;
        /**
         * An optional filter on the customIds.
         * @Required No
         */
        customIdFilter: JSON;
        /**
         * The default behaviour on a social request is to error if the player has no friends (NOTSOCIAL).  Set this flag to suppress that error and return the player’s leaderboard entry instead.
         * @Required No
         */
        dontErrorOnNotSocial: boolean;
        /**
         * The number of items to return in a page (default=50)
         * @Required Yes
         */
        entryCount: number;
        /**
         * A friend id or an array of friend ids to use instead of the player’s social friends
         * @Required No
         */
        friendIds: string[];
        /**
         * Number of entries to include from head of the list
         * @Required No
         */
        includeFirst: number;
        /**
         * Number of entries to include from tail of the list
         * @Required No
         */
        includeLast: number;
        /**
         * Returns the leaderboard excluding the player’s social friends
         * @Required No
         */
        inverseSocial: boolean;
        /**
         * The short code of the leaderboard
         * @Required No
         */
        leaderboardShortCode: string;
        /**
         * If True returns a leaderboard of the player’s social friends
         * @Required No
         */
        social: boolean;
        /**
         * The IDs of the teams you are interested in
         * @Required No
         */
        teamIds: string[];
        /**
         * The type of team you are interested in
         * @Required No
         */
        teamTypes: string[];
    }
    /**
     * A response containing leaderboard data around the current player
     */
    class _AroundMeLeaderboardResponse extends _Response {
        /**
         * The leaderboard’s challenge id
         */
        challengeInstanceId: string;
        /**
         * The leaderboard data
         */
        data: LeaderboardData[];
        /**
         * The first item in the leaderboard data
         */
        first: LeaderboardData[];
        /**
         * The last item in the leaderboard data
         */
        last: LeaderboardData[];
        /**
         * The leaderboard short code
         */
        leaderboardShortCode: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * True if the response contains a social leaderboard’s data
         */
        social: boolean;
    }
}
