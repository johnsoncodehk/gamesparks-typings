declare namespace SparkRequests {
    /**
     * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * currencyType | UNRECOGNISED | Not a valid currency, valid values are 1 to 6
     * virtualGood | CANNOT_BE_CURRENCY | The player cannot buy a currency pack with virtual currency
     * currency1 | INSUFFICIENT_FUNDS | The player does not have enough currency 1 funds to complete the purchase
     * currency2 | INSUFFICIENT_FUNDS | The player does not have enough currency 2 funds to complete the purchase
     * currency3 | INSUFFICIENT_FUNDS | The player does not have enough currency 3 funds to complete the purchase
     * currency4 | INSUFFICIENT_FUNDS | The player does not have enough currency 4 funds to complete the purchase
     * currency5 | INSUFFICIENT_FUNDS | The player does not have enough currency 5 funds to complete the purchase
     * currency6 | INSUFFICIENT_FUNDS | The player does not have enough currency 6 funds to complete the purchase
     * shortCode | UNKNOWN | The shortCode supplied does not match a VirtualGood
     * shortCode | DISABLED | The VirtualGood requested is marked as disabled
     * quantity | EXCEEDS_MAX_QUANTITY | The requst would cause the player to exceed to maxQty of this VirtualGood
     * currencyShortCode | UNRECOGNISED | Not a valid currency
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ConsumeVirtualGoodRequest();
     * request.quantity = ...;
     * request.shortCode = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * ```
     */
    class BuyVirtualGoodsRequest extends _Request<_BuyVirtualGoodsResponse> {
        /**
         * The short code of the currency to use
         * @Required No
         */
        currencyShortCode: string;
        /**
         * Which virtual currency to use. (1 to 6)
         * @Required No
         */
        currencyType: number;
        /**
         * The number of items to purchase
         * @Required Yes
         */
        quantity: number;
        /**
         * The short code of the virtual good to be purchased
         * @Required Yes
         */
        shortCode: string;
    }
    /**
     * A response containing details of the bought items
     */
    class _BuyVirtualGoodsResponse extends _Response {
        /**
         * A JSON object containing details of the bought items
         */
        boughtItems: Boughtitem[];
        /**
         * An object containing the short code and amount added for each currency
         */
        currenciesAdded: JSON;
        /**
         * How much currency type 1 was added
         */
        currency1Added: number;
        /**
         * How much currency type 2 was added
         */
        currency2Added: number;
        /**
         * How much currency type 3 was added
         */
        currency3Added: number;
        /**
         * How much currency type 4 was added
         */
        currency4Added: number;
        /**
         * How much currency type 5 was added
         */
        currency5Added: number;
        /**
         * How much currency type 6 was added
         */
        currency6Added: number;
        /**
         * For a buy with currency request, how much currency was used
         */
        currencyConsumed: number;
        /**
         * For a buy with currency request, the short code of the currency used
         */
        currencyShortCode: string;
        /**
         * For a buy with currency request, which currency type was used
         */
        currencyType: number;
        /**
         * A list of invalid items for this purchase (if any). This field is populated only for store buys
         */
        invalidItems: string[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The list of transactionIds, for this purchase, if they exist. This field is populated only for store buys
         */
        transactionIds: string[];
    }
}
