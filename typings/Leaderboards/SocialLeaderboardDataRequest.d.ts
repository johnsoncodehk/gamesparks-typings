declare namespace SparkRequests {
    /**
     * Returns leaderboard data that only contains entries of players that are game friends with the current player.
     * The GameSparks platform will attempt to return players both ahead and behind the current player, where data is available.
     * The entry count defines how many player should be returned both ahead and behind. The numer of results may vary if there are not enough friends either ahead or behind.
     * 
     * Error Codes
     * ---
     * Key | Value | Description
     * --- | --- | ---
     * leaderboardShortCode|challengeInstanceId | ONLY_ONE | Both shortCode and challengeInstanceId were supplied, only one should be supplied
     * leaderboardShortCode|challengeInstanceId | REQUIRED | Both shortCode and challengeInstanceId were missing
     * leaderboardShortCode | INVALID | The shortCode does not match a configured leaderboard
     * currentUser | NOTSOCIAL | The current player does not have any game friends
     * challengeInstanceId | NO_LEADERBOARD | The challengeInstanceId maps to a challenge without a leaderboard configured
     * challengeInstanceId | INVALID | The challengeInstanceId supplied did not match a challenge related to the current play
     */
    class SocialLeaderboardDataRequest extends _Request<_SocialLeaderboardDataResponse> {
        /**
         * The challenge instance to get the leaderboard data for
         * @Required No
         */
        challengeInstanceId: string;
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
         * The offset into the set of leaderboards returned
         * @Required No
         */
        offset: number;
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
     * A response containing leaderboard data
     */
    class _SocialLeaderboardDataResponse extends _Response {
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
    }
}
