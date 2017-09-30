declare namespace SparkRequests {
    /**
     * A nested object that represents the leaderboard configuration data.
     */
    class Leaderboard {
        /**
         * The leaderboard’s description.
         */
        description: string;
        /**
         * The leaderboard’s name.
         */
        name: string;
        /**
         * The custom property set configured on this Leaderboard
         */
        propertySet: JSON;
        /**
         * The leaderboard’s short code.
         */
        shortCode: string;
    }
}
