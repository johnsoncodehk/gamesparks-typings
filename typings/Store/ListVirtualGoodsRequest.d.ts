declare namespace SparkRequests {
    /**
     * Returns the list of configured virtual goods.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.PsnBuyGoodsRequest();
     * request.authorizationCode = ...;
     * request.currencyCode = ...;
     * request.entitlementLabel = ...;
     * request.redirectUri = ...;
     * request.subUnitPrice = ...;
     * request.uniqueTransactionByPlayer = ...;
     * request.useCount = ...;
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
    class ListVirtualGoodsRequest extends _Request<_ListVirtualGoodsResponse> {
        /**
         * If true, the returned list will include disabled VirtualVoods
         * @Required No
         */
        includeDisabled: boolean;
        /**
         * A filter to only include goods with the given tags. Each good must have all the provided tags.
         * @Required No
         */
        tags: string[];
    }
    /**
     * A response containing the list of configured virtual goods.
     */
    class _ListVirtualGoodsResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A list of JSON objects containing virtual goods data
         */
        virtualGoods: VirtualGood[];
    }
}
