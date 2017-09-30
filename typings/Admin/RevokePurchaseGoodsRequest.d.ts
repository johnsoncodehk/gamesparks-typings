declare namespace SparkRequests {
    /**
     * Revokes the purchase of a good. The items aquired will be removed from remaining items of the player.
     */
    class RevokePurchaseGoodsRequest extends _Request<_RevokePurchaseGoodsResponse> {
        /**
         * The playerId for which to revoke the transaction
         */
        playerId: string;
        /**
         * The store type for which to revoke these transactions
         */
        storeType: string;
        /**
         * The list of transactionIds to revoke
         */
        transactionIds: string[];
    }
    class _RevokePurchaseGoodsResponse extends _Response {
        /**
         * The playerId for which to revoke the transaction
         */
        playerId: string;
        /**
         * The store type for which to revoke these transactions
         */
        storeType: string;
        /**
         * The list of transactionIds to revoke
         */
        transactionIds: string[];
    }
}
