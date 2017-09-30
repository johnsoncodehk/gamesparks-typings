declare namespace SparkRequests {
    /**
     * Get the leaderboard entry data for the current player or a given player. 
     * For each leaderboard it returns the hichest score the player has
     */
    class GetLeaderboardEntriesRequest extends _Request<_GetLeaderboardEntriesResponse> {
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
    class _GetLeaderboardEntriesResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
