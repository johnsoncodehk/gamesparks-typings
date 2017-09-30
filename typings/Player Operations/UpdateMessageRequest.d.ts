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
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
