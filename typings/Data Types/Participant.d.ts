declare namespace SparkRequests {
    /**
     * A nested object that represents a participant in a match.
     */
    class Participant {
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
         * A JSON Map of any data that was associated to this user
         */
        participantData: JSON;
        /**
         * The peerId of this participant within the match
         */
        peerId: number;
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
