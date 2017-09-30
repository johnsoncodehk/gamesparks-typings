declare namespace SparkRequests {
    /**
     * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.
     */
    class BuyVirtualGoodsRequest extends _Request<_BuyVirtualGoodsResponse> {
        /**
         * The short code of the currency to use
         */
        currencyShortCode: string;
        /**
         * Which virtual currency to use. (1 to 6)
         */
        currencyType: number;
        /**
         * The number of items to purchase
         */
        quantity: number;
        /**
         * The short code of the virtual good to be purchased
         */
        shortCode: string;
    }
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
