declare namespace SparkRequests {
    /**
     * A nested object that represents a player transaction.
     */
    class PlayerTransaction {
        /**
         * The items (currency or virtual goods) involved in this transaction
         */
        items: PlayerTransactionItem[];
        /**
         * The original request ID for this transaction
         */
        originalRequestId: string;
        /**
         * The player ID
         */
        playerId: string;
        /**
         * The reason for the transaction
         */
        reason: string;
        /**
         * Gets the date when this transaction was revoked, if applicable
         */
        revokeDate: date;
        /**
         * Is true if the transaction was revoked
         */
        revoked: boolean;
        /**
         * The specific script in which this transaction occurred
         */
        script: string;
        /**
         * The script type in which this transaction occurred (e.g. event)
         */
        scriptType: string;
        /**
         * The transaction ID of this purchase, if applicable
         */
        transactionId: string;
        /**
         * The date of the transaction
         */
        when: date;
    }
}
