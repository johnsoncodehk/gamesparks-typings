declare namespace SparkRequests {
    /**
     * Processes the receipt from an Amazon in app purchase.
     * The GameSparks platform will validate the amazonUserId and receiptId with Amazon using the Amazon Purchase Secret configured against the game.
     * The receiptId in the data will be recorded and the request will be rejected if the receiptId has previously been processed, this prevents replay attacks.
     * Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the receipt with the 'Amazon Product Id’ configured against the virtual good.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * receiptId | REQUIRED | The receiptId is missing
     * amazonUserId | REQUIRED | The amazonUserId is missing
     * verificationError | 1 | No matching virtual good can be found
     * verificationError | 2 | The receiptId is not valid for the given userId and secret
     * verificationError | 3 | There was an error connecting to the Amazon service
     * verificationError | 4 | The Amazon purchase secret is not configured against the game
     * verificationError | 5 | The receiptId has previously been processed
     * 
     * @example
     * var request = new SparkRequests.AmazonBuyGoodsRequest();
     * request.amazonUserId = ...;
     * request.currencyCode = ...;
     * request.receiptId = ...;
     * request.subUnitPrice = ...;
     * request.uniqueTransactionByPlayer = ...;
     * var response = request.Send();
     * 
     * var boughtItems = response.boughtItems; 
     * var currenciesAdded = response.currenciesAdded; 
     * var currency1Added = response.currency1Added; 
     * var currency2Added = response.currency2Added; 
     * var currency3Added = response.currency3Added; 
     * var currency4Added = response.currency4Added; 
     * var currency5Added = response.currency5Added; 
     * var currency6Added = response.currency6Added; 
     * var currencyConsumed = response.currencyConsumed; 
     * var currencyShortCode = response.currencyShortCode; 
     * var currencyType = response.currencyType; 
     * var invalidItems = response.invalidItems; 
     * var scriptData = response.scriptData; 
     * var transactionIds = response.transactionIds; 
     */
    class AmazonBuyGoodsRequest extends _Request<_AmazonBuyGoodsResponse> {
        /**
         * The userId obtained from the UserData within a PurchaseResponse
         * @Required Yes
         */
        amazonUserId: string;
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         * @Required No
         */
        currencyCode: string;
        /**
         * The receiptId obtained from the Receipt within a PurchaseResponse
         * @Required Yes
         */
        receiptId: string;
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
    class _AmazonBuyGoodsResponse extends _Response {
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
