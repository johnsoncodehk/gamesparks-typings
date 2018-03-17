declare namespace SparkRequests {
    /**
     * Processes the response from a Google Play in app purchase flow.
     * The GameSparks platform will validate the signature and signed data with the Google Play Public Key configured against the game.
     * The orderId in the data will be recorded and the request will be rejected if the orderId has previously been processed, this prevents replay attacks.
     * Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the signed data with the 'Google Product ID’ configured against the virtual good.
     * It is critical that the signedData is sent exactly as it is returned form google, including any whitespace. Any modification of the signedData will cause the verification process to fail.
     * 
     * Error Codes
     * ---
     * Key | Value | Description
     * --- | --- | ---
     * verificationError | 5 | The orderId in the signedData has previously been processed
     * verificationError | 4 | The google play public key is not configured against the game
     * verificationError | 3 | There was an error connecting to the google play service
     * verificationError | 2 | The signature does not match the signed data
     * verificationError | 1 | No matching virtual good can be found
     */
    class GooglePlayBuyGoodsRequest extends _Request<_GooglePlayBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         * @Required No
         */
        currencyCode: string;
        /**
         * The value obtained from data.getStringExtra(“INAPP_DATA_SIGNATURE”);
         * @Required Yes
         */
        signature: string;
        /**
         * The value obtained from data.getStringExtra(“INAPP_PURCHASE_DATA”)
         * @Required Yes
         */
        signedData: string;
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
    class _GooglePlayBuyGoodsResponse extends _Response {
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
