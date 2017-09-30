declare namespace SparkRequests {
    /**
     * Returns a list of the current player’s transaction history.
     */
    class ListTransactionsRequest extends _Request<_ListTransactionsResponse> {
        /**
         * Optional date constraint to list transactions from
         */
        dateFrom: date;
        /**
         * Optional date constraint to list transactions to
         */
        dateTo: date;
        /**
         * The number of items to return in a page (default=50)
         */
        entryCount: number;
        /**
         * An optional filter that limits the transaction types returned
         */
        include: string;
        /**
         * The offset (page number) to start from (default=0)
         */
        offset: number;
    }
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
