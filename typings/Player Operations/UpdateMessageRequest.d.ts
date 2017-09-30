declare namespace SparkRequests {
    /**
     * Allows a message status to be updated.
     */
    class UpdateMessageRequest extends _Request<_UpdateMessageResponse> {
        /**
         * The messageId of the message to update
         */
        messageId: string;
        /**
         * The status to set on the message
         */
        status: string;
    }
    class _UpdateMessageResponse extends _Response {
        /**
         * The messageId of the message to update
         */
        messageId: string;
        /**
         * The status to set on the message
         */
        status: string;
    }
}
