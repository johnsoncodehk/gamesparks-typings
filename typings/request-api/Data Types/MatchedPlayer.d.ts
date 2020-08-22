declare namespace SparkRequests {
    /**
     * An object that represents a player in a pending match.
     */
    class MatchedPlayer {
        /**
         * The Location of the player
         */
        location: DBObject;
        /**
         * A JSON Map of any data that was associated to this user
         */
        participantData: JSON;
        /**
         * The ID for player
         */
        playerId: string;
        /**
         * The skill of the player in this match
         */
        skill: number;
    }
}
