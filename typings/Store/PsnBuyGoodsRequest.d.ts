declare namespace SparkRequests {
    /**
     * Processes an update of entitlement in PlayStation network.
     * The GameSparks platform will update the 'use_count’ for an entitlement (by default 'use_count’ is 1).
     * The request will be rejected if entitlement 'use_limit’ is 0
     * GampSparks platform by default will use internally saved PSN user access token
     */
    class PsnBuyGoodsRequest extends _Request<_PsnBuyGoodsResponse> {
        /**
         * The authorization code obtained from PSN, as described here https://ps4.scedev.net/resources/documents/SDK/latest/NpAuth-Reference/0008.html
         * @Required No
         */
        authorizationCode: string;
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         * @Required No
         */
        currencyCode: string;
        /**
         * Specify the entitlement label of the entitlement to update. (Not an entitlement ID).
         * @Required Yes
         */
        entitlementLabel: string;
        /**
         * When using the authorization code obtained from PlayStation®4/PlayStation®Vita/PlayStation®3, this is not required.
         * @Required No
         */
        redirectUri: string;
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
        /**
         * Optional - specify the quantity of the entitlement to use. Default = 1
         * @Required No
         */
        useCount: number;
    }
    /**
     * A response containing details of the bought items
     */
    class _PsnBuyGoodsResponse extends _Response {
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
