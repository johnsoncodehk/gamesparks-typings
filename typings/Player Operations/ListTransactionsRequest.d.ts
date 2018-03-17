declare namespace SparkRequests {
    /**
     * Returns a list of the current player’s transaction history.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.LogEventRequest();
     * request.eventKey = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ListTransactionsRequest extends _Request<_ListTransactionsResponse> {
        /**
         * Optional date constraint to list transactions from
         * @Required No
         */
        dateFrom: date;
        /**
         * Optional date constraint to list transactions to
         * @Required No
         */
        dateTo: date;
        /**
         * The number of items to return in a page (default=50)
         * @Required No
         */
        entryCount: number;
        /**
         * An optional filter that limits the transaction types returned
         * @Required No
         */
        include: string;
        /**
         * The offset (page number) to start from (default=0)
         * @Required No
         */
        offset: number;
    }
    /**
     * A response listing transactions for the player
     */
    class _ListTransactionsResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A list of JSON objects containing player transactions
         */
        transactionList: PlayerTransaction[];
    }
}
