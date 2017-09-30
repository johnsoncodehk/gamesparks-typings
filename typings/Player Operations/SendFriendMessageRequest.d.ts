declare namespace SparkRequests {
    /**
     * Sends a message to one or more game friend(s). A game friend is someone in the players social network who also plays the game.
     */
    class SendFriendMessageRequest extends _Request<_SendFriendMessageResponse> {
        /**
         * One or more friend ID’s. This can be supplied as a single string, or a JSON array
         */
        friendIds: string[];
        /**
         * The message to send
         */
        message: string;
    }
    class _SendFriendMessageResponse extends _Response {
        /**
         * One or more friend ID’s. This can be supplied as a single string, or a JSON array
         */
        friendIds: string[];
        /**
         * The message to send
         */
        message: string;
    }
}
