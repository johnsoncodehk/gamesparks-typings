declare namespace SparkRequests {
    /**
     * Returns the list of the current player’s messages / notifications.
     * The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.
     */
    class ListMessageRequest extends _Request<_ListMessageResponse> {
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * An optional filter that limits the message types returned
         */
        include: string;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
    }
    class _ListMessageResponse extends _Response {
        /**
         * A list of JSON objects containing player messages
         */
        messageList: JSON[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
