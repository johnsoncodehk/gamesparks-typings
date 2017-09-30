declare namespace SparkRequests {
    /**
     * Allows multiple messages to be dismissed. Once dismissed the messages will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.
     */
    class DismissMultipleMessagesRequest extends _Request<_DismissMultipleMessagesResponse> {
        /**
         * The list of the messageIds to dismiss
         */
        messageIds: string[];
    }
    class _DismissMultipleMessagesResponse extends _Response {
        /**
         * The list of the messageIds to dismiss
         */
        messageIds: string[];
    }
}
