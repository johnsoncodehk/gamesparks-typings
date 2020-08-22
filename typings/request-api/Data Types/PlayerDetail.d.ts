declare namespace SparkRequests {
    /**
     * An object representing a player’s id and name
     */
    class PlayerDetail {
        /**
         * A player’s external identifiers
         */
        externalIds: JSON;
        /**
         * A player’s id
         */
        id: string;
        /**
         * A player’s name
         */
        name: string;
    }
}
