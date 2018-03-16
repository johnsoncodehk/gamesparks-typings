declare namespace SparkRequests {
    /**
     * Returns a summary of the list of the current players messages / notifications.
     * The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest.
     * The full message can be retrieved using GetMessageRequest Read the section on Messages to see the complete list of messages and their meanings.
     */
    class ListMessageSummaryRequest extends _Request<_ListMessageSummaryResponse> {
        /**
         * The number of items to return in a page (default=50)
         * @Required No
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         * @Required No
         */
        offset: number;
    }
    /**
     * A response containing  a summary of the list of the current players messages / notifications.
     */
    class _ListMessageSummaryResponse extends _Response {
        /**
         * A list of JSON objects containing player message summaries
         */
        messageList: JSON[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
