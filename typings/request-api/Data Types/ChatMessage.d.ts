declare namespace SparkRequests {
    /**
     * A message from a group chat
     */
    class ChatMessage {
        /**
         * The id of the player who sent this message
         */
        fromId: string;
        /**
         * The id of this chat message
         */
        id: string;
        /**
         * The text sent in this message
         */
        message: string;
        /**
         * A date representing the time this message was sent
         */
        when: date;
        /**
         * The displayName of the player who sent this message
         */
        who: string;
    }
}
