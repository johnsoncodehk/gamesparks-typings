declare namespace SparkRequests {
    /**
     * A nested object that represents a player message.
     */
    class PlayerMessage {
        /**
         * The id of the message
         */
        id: string;
        /**
         * The message content
         */
        message: JSON;
        /**
         * Whether the message has been delivered to the client
         */
        seen: boolean;
        /**
         * The status of the message
         */
        status: string;
        /**
         * The date of the message
         */
        when: date;
    }
}
