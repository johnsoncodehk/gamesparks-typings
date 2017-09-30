declare namespace SparkRequests {
    /**
     * A nested object that represents a single item in a transaction.
     */
    class PlayerTransactionItem {
        /**
         * The amount of this item given to the player in the transaction
         */
        amount: number;
        /**
         * The quantity the player possesses after the transaction completed
         */
        newValue: number;
        /**
         * The type of item
         */
        type: string;
    }
}
