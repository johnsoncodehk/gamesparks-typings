declare namespace SparkRequests {
    /**
     * Consumes a given amount of the specified virtual good.
     */
    class ConsumeVirtualGoodRequest extends _Request<_ConsumeVirtualGoodResponse> {
        /**
         * The amount of virtual goods to be consumed
         */
        quantity: number;
        /**
         * The short code of the virtual good to be consumed
         */
        shortCode: string;
    }
    class _ConsumeVirtualGoodResponse extends _Response {
        /**
         * The amount of virtual goods to be consumed
         */
        quantity: number;
        /**
         * The short code of the virtual good to be consumed
         */
        shortCode: string;
    }
}
