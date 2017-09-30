declare namespace SparkRequests {
    /**
     * Processes the response from a Google Play in app purchase flow.
     * The GameSparks platform will validate the signature and signed data with the Google Play Public Key configured against the game.
     * The orderId in the data will be recorded and the request will be rejected if the orderId has previously been processed, this prevents replay attacks.
     * Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the signed data with the 'Google Product ID’ configured against the virtual good.
     * It is critical that the signedData is sent exactly as it is returned form google, including any whitespace. Any modification of the signedData will cause the verification process to fail.
     */
    class GooglePlayBuyGoodsRequest extends _Request<_GooglePlayBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * The value obtained from data.getStringExtra(“INAPP_DATA_SIGNATURE”);
         */
        signature: string;
        /**
         * The value obtained from data.getStringExtra(“INAPP_PURCHASE_DATA”)
         */
        signedData: string;
        /**
         * The price of this purchase
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         */
        uniqueTransactionByPlayer: boolean;
    }
    class _GooglePlayBuyGoodsResponse extends _Response {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         */
        currencyCode: string;
        /**
         * The value obtained from data.getStringExtra(“INAPP_DATA_SIGNATURE”);
         */
        signature: string;
        /**
         * The value obtained from data.getStringExtra(“INAPP_PURCHASE_DATA”)
         */
        signedData: string;
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
