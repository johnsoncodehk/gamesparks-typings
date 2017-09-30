declare namespace SparkRequests {
    /**
     * Processes a 'orderid’ from a Steam.
     * The GameSparks platform will validate the 'orderid’ with Steam and process the response. The 'orderid’ from the response will be recorded and the request will be rejected, if the 'orderid’ has previously been processed, this prevents replay attacks.
     * Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the 'itemid’ in the response with the 'Steam Product ID’ configured against the virtual good.
     */
    class SteamBuyGoodsRequest extends _Request<_SteamBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * Unique 64-bit ID for order
         */
        orderId: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
    }
    class _SteamBuyGoodsResponse extends _Response {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * Unique 64-bit ID for order
         */
        orderId: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
    }
}
