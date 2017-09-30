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
         * A list of the messageId values that were not dismissed
         */
        failedDismissals: string[];
        /**
         * An integer describing how many messages were dismissed
         */
        messagesDismissed: number;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
