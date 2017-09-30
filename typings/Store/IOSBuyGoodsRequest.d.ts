declare namespace SparkRequests {
    /**
     * Processes a transaction receipt from an App Store in app purchase.
     * The GameSparks platform will validate the receipt with Apple and process the response. The transaction_id in the response will be recorded and the request will be rejected if the transaction_id has previously been processed, this prevents replay attacks.
     * Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the product_id in the response with the 'IOS Product ID’ configured against the virtual good.
     */
    class IOSBuyGoodsRequest extends _Request<_IOSBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * The receipt obtained from SKPaymentTransaction. transactionReceipt
         */
        receipt: string;
        /**
         * Should the sandbox account be used
         */
        sandbox: boolean;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
    }
    class _IOSBuyGoodsResponse extends _Response {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * The receipt obtained from SKPaymentTransaction. transactionReceipt
         */
        receipt: string;
        /**
         * Should the sandbox account be used
         */
        sandbox: boolean;
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
