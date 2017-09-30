declare namespace SparkRequests {
    /**
     * Processes a transaction receipt from a windows store purchase.
     * The GameSparks platform will validate the receipt using the signature embedded in the xml. The Id in the xml will be recorded and the request will be rejected if the Id has previously been processed, this prevents replay attacks.
     * Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the xml with the 'WP8 Product ID’ configured against the virtual good.
     */
    class WindowsBuyGoodsRequest extends _Request<_WindowsBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * Allows you to specify the platform
         */
        platform: string;
        /**
         * The xml reciept returned from the windows phone 8 store
         */
        receipt: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
    }
    class _WindowsBuyGoodsResponse extends _Response {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * Allows you to specify the platform
         */
        platform: string;
        /**
         * The xml reciept returned from the windows phone 8 store
         */
        receipt: string;
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
