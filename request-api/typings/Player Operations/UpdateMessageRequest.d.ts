declare namespace SparkRequests {
    /**
     * Allows a message status to be updated.
     * 
     * @example
     * var request = new SparkRequests.UpdateMessageRequest();
     * request.messageId = ...;
     * request.status = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     */
    class UpdateMessageRequest extends _Request<_UpdateMessageResponse> {
        /**
         * The messageId of the message to update
         * @Required Yes
         */
        messageId: string;
        /**
         * The status to set on the message
         * @Required Yes
         */
        status: string;
    }
    /**
     * A response to an update message request
     */
    class _UpdateMessageResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
