declare namespace SparkRequests {
    /**
     * Returns a summary of the list of the current players messages / notifications.
     * The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest.
     * The full message can be retrieved using GetMessageRequest Read the section on Messages to see the complete list of messages and their meanings.
     */
    class ListMessageSummaryRequest extends _Request<_ListMessageSummaryResponse> {
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
    }
    class _ListMessageSummaryResponse extends _Response {
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
    }
}
