declare namespace SparkRequests {
    /**
     * Allows a message to be dismissed. Once dismissed the message will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.
     */
    class DismissMessageRequest extends _Request<_DismissMessageResponse> {
        /**
         * The messageId of the message to dismiss
         */
        messageId: string;
    }
    class _DismissMessageResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
