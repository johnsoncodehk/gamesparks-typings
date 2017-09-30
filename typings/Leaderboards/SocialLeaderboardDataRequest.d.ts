declare namespace SparkRequests {
    /**
     * Returns leaderboard data that only contains entries of players that are game friends with the current player.
     * The GameSparks platform will attempt to return players both ahead and behind the current player, where data is available.
     * The entry count defines how many player should be returned both ahead and behind. The numer of results may vary if there are not enough friends either ahead or behind.
     */
    class SocialLeaderboardDataRequest extends _Request<_SocialLeaderboardDataResponse> {
        /**
         * The challenge instance to get the leaderboard data for
         */
        challengeInstanceId: string;
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
         * The offset into the set of leaderboards returned
         */
        offset: number;
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
    class _SocialLeaderboardDataResponse extends _Response {
        /**
         * The challenge instance to get the leaderboard data for
         */
        challengeInstanceId: string;
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
         * The offset into the set of leaderboards returned
         */
        offset: number;
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
}
