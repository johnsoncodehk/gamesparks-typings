declare namespace SparkRequests {
    /**
     * Allows a message status to be updated.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.AmazonBuyGoodsRequest();
     * request.amazonUserId = ...;
     * request.currencyCode = ...;
     * request.receiptId = ...;
     * request.subUnitPrice = ...;
     * request.uniqueTransactionByPlayer = ...;
     * var response = request.Send();
     * 
     * var boughtItems = response.boughtItems; 
     * var currenciesAdded = response.currenciesAdded; 
     * var currency1Added = response.currency1Added; 
     * var currency2Added = response.currency2Added; 
     * var currency3Added = response.currency3Added; 
     * var currency4Added = response.currency4Added; 
     * var currency5Added = response.currency5Added; 
     * var currency6Added = response.currency6Added; 
     * var currencyConsumed = response.currencyConsumed; 
     * var currencyShortCode = response.currencyShortCode; 
     * var currencyType = response.currencyType; 
     * var invalidItems = response.invalidItems; 
     * var scriptData = response.scriptData; 
     * var transactionIds = response.transactionIds; 
     * ```
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
