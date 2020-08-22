declare namespace SparkRequests {
    /**
     * A nested object that represents a player.
     */
    class Player {
        /**
         * The achievements of the Player
         */
        achievements: string[];
        /**
         * The display name of the Player
         */
        displayName: string;
        /**
         * The external Id’s of the Player
         */
        externalIds: JSON;
        /**
         * The Id of the Player
         */
        id: string;
        /**
         * The online status of the Player
         */
        online: boolean;
        /**
         * The script data of the Player
         */
        scriptData: JSON;
        /**
         * The virtual goods of the Player
         */
        virtualGoods: string[];
    }
}
