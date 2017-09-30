declare namespace SparkRequests {
    /**
     * Returns leaderboard data that is adjacent to the currently signed in player’s position within the given leaderboard.
     */
    class AroundMeLeaderboardRequest extends _Request<_AroundMeLeaderboardResponse> {
        /**
         * The challenge instance to get the leaderboard data for
         */
        challengeInstanceId: string;
        /**
         * An optional filter on the customIds.
         */
        customIdFilter: JSON;
        /**
         * The default behaviour on a social request is to error if the player has no friends (NOTSOCIAL).  Set this flag to suppress that error and return the player’s leaderboard entry instead.
         */
        dontErrorOnNotSocial: boolean;
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * A friend id or an array of friend ids to use instead of the player’s social friends
         */
        friendIds: string[];
        /**
         * Number of entries to include from head of the list
         */
        includeFirst: number;
        /**
         * Number of entries to include from tail of the list
         */
        includeLast: number;
        /**
         * Returns the leaderboard excluding the player’s social friends
         */
        inverseSocial: boolean;
        /**
         * The short code of the leaderboard
         */
        leaderboardShortCode: string;
        /**
         * If True returns a leaderboard of the player’s social friends
         */
        social: boolean;
        /**
         * The IDs of the teams you are interested in
         */
        teamIds: string[];
        /**
         * The type of team you are interested in
         */
        teamTypes: string[];
    }
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
