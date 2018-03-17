declare namespace SparkRequests {
    /**
     * Processes a 'orderid’ from a Steam.
     * The GameSparks platform will validate the 'orderid’ with Steam and process the response. The 'orderid’ from the response will be recorded and the request will be rejected, if the 'orderid’ has previously been processed, this prevents replay attacks.
     * Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the 'itemid’ in the response with the 'Steam Product ID’ configured against the virtual good.
     * 
     * Error Codes
     * ---
     * Key | Value | Description
     * --- | --- | ---
     * verificationError | 1 | No matching virtual good can be found
     * verificationError | 2 | The Steam servers failed to verify the order_id
     * verificationError | 3 | There was an error connecting to the Steam server
     * verificationError | 4 | The order_id has been processed before
     */
    class SteamBuyGoodsRequest extends _Request<_SteamBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         * @Required No
         */
        currencyCode: string;
        /**
         * Unique 64-bit ID for order
         * @Required Yes
         */
        orderId: string;
        /**
         * The price of this purchase
         * @Required No
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         * @Required No
         */
        uniqueTransactionByPlayer: boolean;
    }
    /**
     * A response containing details of the bought items
     */
    class _SteamBuyGoodsResponse extends _Response {
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
