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
         */
        authorizationCode: string;
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * Specify the entitlement label of the entitlement to update. (Not an entitlement ID).
         */
        entitlementLabel: string;
        /**
         * When using the authorization code obtained from PlayStation®4/PlayStation®Vita/PlayStation®3, this is not required.
         */
        redirectUri: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
        /**
         * Optional - specify the quantity of the entitlement to use. Default = 1
         */
        useCount: number;
    }
    class _PsnBuyGoodsResponse extends _Response {
        /**
         * The authorization code obtained from PSN, as described here https://ps4.scedev.net/resources/documents/SDK/latest/NpAuth-Reference/0008.html
         */
        authorizationCode: string;
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * Specify the entitlement label of the entitlement to update. (Not an entitlement ID).
         */
        entitlementLabel: string;
        /**
         * When using the authorization code obtained from PlayStation®4/PlayStation®Vita/PlayStation®3, this is not required.
         */
        redirectUri: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
        /**
         * Optional - specify the quantity of the entitlement to use. Default = 1
         */
        useCount: number;
    }
}
