declare namespace SparkRequests {
    /**
     * Returns the list of the current player’s messages / notifications.
     * The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ListMessageRequest();
     * request.entryCount = ...;
     * request.include = ...;
     * request.offset = ...;
     * var response = request.Send();
     * 
     * var messageList = response.messageList; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ListMessageRequest extends _Request<_ListMessageResponse> {
        /**
         * The number of items to return in a page (default=50)
         * @Required No
         */
        entryCount: number;
        /**
         * An optional filter that limits the message types returned
         * @Required No
         */
        include: string;
        /**
         * The offset (page number) to start from (default=0)
         * @Required No
         */
        offset: number;
    }
    /**
     * A response containing the list of the current players messages / notifications.
     */
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
