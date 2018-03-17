declare namespace SparkRequests {
    /**
     * Consumes a given amount of the specified virtual good.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * qty | INSUFFICIENT | The player does not have sufficient virtual goods for shortcode specified
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.GooglePlayBuyGoodsRequest();
     * request.currencyCode = ...;
     * request.signature = ...;
     * request.signedData = ...;
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
    class ConsumeVirtualGoodRequest extends _Request<_ConsumeVirtualGoodResponse> {
        /**
         * The amount of virtual goods to be consumed
         * @Required Yes
         */
        quantity: number;
        /**
         * The short code of the virtual good to be consumed
         * @Required Yes
         */
        shortCode: string;
    }
    /**
     * A response to a consume virtual goods response
     */
    class _ConsumeVirtualGoodResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
