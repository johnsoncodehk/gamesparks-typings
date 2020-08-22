declare namespace SparkRequests {
    /**
     * Represents the number of turns a player has taken in a turn based challenge.
     */
    class PlayerTurnCount {
        /**
         * The number of turns that the player has taken so far during this challenge.
         */
        count: string;
        /**
         * The unique player id.
         */
        playerId: string;
    }
}
