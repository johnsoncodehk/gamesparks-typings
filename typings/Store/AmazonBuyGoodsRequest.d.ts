declare namespace SparkRequests {
    /**
     * Processes the receipt from an Amazon in app purchase.
     * The GameSparks platform will validate the amazonUserId and receiptId with Amazon using the Amazon Purchase Secret configured against the game.
     * The receiptId in the data will be recorded and the request will be rejected if the receiptId has previously been processed, this prevents replay attacks.
     * Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the receipt with the 'Amazon Product Id’ configured against the virtual good.
     */
    class AmazonBuyGoodsRequest extends _Request<_AmazonBuyGoodsResponse> {
        /**
         * The userId obtained from the UserData within a PurchaseResponse
         */
        amazonUserId: string;
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * The receiptId obtained from the Receipt within a PurchaseResponse
         */
        receiptId: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
    }
    class _AmazonBuyGoodsResponse extends _Response {
        /**
         * The userId obtained from the UserData within a PurchaseResponse
         */
        amazonUserId: string;
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * The receiptId obtained from the Receipt within a PurchaseResponse
         */
        receiptId: string;
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
