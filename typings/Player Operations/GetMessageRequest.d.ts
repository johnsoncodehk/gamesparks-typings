declare namespace SparkRequests {
    /**
     * Returns the full details of a message.
     */
    class GetMessageRequest extends _Request<_GetMessageResponse> {
        /**
         * The messageId of the message retreive
         */
        messageId: string;
    }
    class _GetMessageResponse extends _Response {
        /**
         * The messageId of the message retreive
         */
        messageId: string;
    }
}
