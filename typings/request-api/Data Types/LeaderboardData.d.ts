declare namespace SparkRequests {
    /**
     * Leaderboard entry data
     * As well as the parameters below there may be others depending on your game’s configuration.
     */
    class LeaderboardData {
        /**
         * The city where the player was located when they logged this leaderboard entry.
         */
        city: string;
        /**
         * The country code where the player was located when they logged this leaderboard entry.
         */
        country: string;
        /**
         * The players rank.
         */
        externalIds: JSON;
        /**
         * The players rank.
         */
        rank: number;
        /**
         * The unique player id for this leaderboard entry.
         */
        userId: string;
        /**
         * The players display name.
         */
        userName: string;
        /**
         * The date when this leaderboard entry was created.
         */
        when: string;
    }
}
