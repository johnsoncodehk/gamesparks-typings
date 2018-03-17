declare namespace SparkRequests {
    /**
     * Sends a message to one or more game friend(s). A game friend is someone in the players social network who also plays the game.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * friendId | NOT_FRIEND | The friend ID passed is not linked to the current player as a game friend
     * friendId | INVALID | The value passed is not a valid ID
     */
    class SendFriendMessageRequest extends _Request<_SendFriendMessageResponse> {
        /**
         * One or more friend ID’s. This can be supplied as a single string, or a JSON array
         * @Required Yes
         */
        friendIds: string[];
        /**
         * The message to send
         * @Required Yes
         */
        message: string;
    }
    /**
     * A response to a send friend message request.
     */
    class _SendFriendMessageResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
