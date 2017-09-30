declare namespace SparkRequests {
    /**
     * Get the leaderboard entry data for the current player or a given player.
     * For each leaderboard it returns the array of leaderboard entries that the player has.
     */
    class LeaderboardsEntriesRequest extends _Request<_LeaderboardsEntriesResponse> {
        /**
         * The challenge leaderboards to return entries for
         */
        challenges: string[];
        /**
         * Returns the leaderboard excluding the player’s social friends
         */
        inverseSocial: boolean;
        /**
         * The list of leaderboards shortcodes
         */
        leaderboards: string[];
        /**
         * The player id. Leave out to use the current player id
         */
        player: string;
        /**
         * Set to true to include the player’s game friends
         */
        social: boolean;
        /**
         * The types of team to apply this request to
         */
        teamTypes: string[];
    }
    class _LeaderboardsEntriesResponse extends _Response {
        /**
         * The challenge leaderboards to return entries for
         */
        challenges: string[];
        /**
         * Returns the leaderboard excluding the player’s social friends
         */
        inverseSocial: boolean;
        /**
         * The list of leaderboards shortcodes
         */
        leaderboards: string[];
        /**
         * The player id. Leave out to use the current player id
         */
        player: string;
        /**
         * Set to true to include the player’s game friends
         */
        social: boolean;
        /**
         * The types of team to apply this request to
         */
        teamTypes: string[];
    }
}
