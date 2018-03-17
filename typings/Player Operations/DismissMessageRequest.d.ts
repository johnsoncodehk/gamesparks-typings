declare namespace SparkRequests {
    /**
     * Allows a message to be dismissed. Once dismissed the message will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.DismissMultipleMessagesRequest();
     * request.messageIds = ...;
     * var response = request.Send();
     * 
     * var failedDismissals = response.failedDismissals; 
     * var messagesDismissed = response.messagesDismissed; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class DismissMessageRequest extends _Request<_DismissMessageResponse> {
        /**
         * The messageId of the message to dismiss
         * @Required Yes
         */
        messageId: string;
    }
    /**
     * A response to a dismiss message request
     */
    class _DismissMessageResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
