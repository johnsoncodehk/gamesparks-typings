declare namespace SparkRequests {
    /**
     * Ranking information.
     */
    class LeaderboardRankDetails {
        /**
         * The leaderboard entries of the players friends that were beaten as part of this score submission.
         */
        friendsPassed: LeaderboardData[];
        /**
         * The number of entries in this leaderboard.
         */
        globalCount: number;
        /**
         * The Global Rank of the player in this leaderboard before the score was submitted.
         */
        globalFrom: number;
        /**
         * The old global rank of the player as a percentage of the total number of scores in this leaderboard .
         */
        globalFromPercent: number;
        /**
         * The Global Rank of the player in this leaderboard after the score was submitted.
         */
        globalTo: number;
        /**
         * The new global rank of the player as a percentage of the total number of scores in this leaderboard .
         */
        globalToPercent: number;
        /**
         * The number of friend entries the player has in this leaderboard.
         */
        socialCount: number;
        /**
         * The Social Rank of the player in this leaderboard before the score was submitted.
         */
        socialFrom: number;
        /**
         * The old social rank of the player as a percentage of the total number of friend scores in this leaderboard.
         */
        socialFromPercent: number;
        /**
         * The Social Rank of the player in this leaderboard after the score was submitted.
         */
        socialTo: number;
        /**
         * The old global rank of the player as a percentage of the total number of friend scores in this leaderboard.
         */
        socialToPercent: number;
        /**
         * The leaderboard entries of the global players that were beaten as part of this score submission. Requires Top N to be configured on the leaderboard
         */
        topNPassed: LeaderboardData[];
    }
}
