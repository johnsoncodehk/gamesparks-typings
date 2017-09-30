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
         * The message data
         */
        message: JSON;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The message status
         */
        status: string;
    }
}
