declare namespace SparkRequests {
    /**
     * Get the leaderboard entry data for the current player or a given player.
     * For each leaderboard it returns the array of leaderboard entries that the player has.
     */
    class LeaderboardsEntriesRequest extends _Request<_LeaderboardsEntriesResponse> {
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
    class _LeaderboardsEntriesResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
