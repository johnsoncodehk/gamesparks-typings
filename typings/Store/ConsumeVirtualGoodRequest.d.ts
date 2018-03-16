declare namespace SparkRequests {
    /**
     * Consumes a given amount of the specified virtual good.
     */
    class ConsumeVirtualGoodRequest extends _Request<_ConsumeVirtualGoodResponse> {
        /**
         * The amount of virtual goods to be consumed
         * @Required Yes
         */
        quantity: number;
        /**
         * The short code of the virtual good to be consumed
         * @Required Yes
         */
        shortCode: string;
    }
    /**
     * A response to a consume virtual goods response
     */
    class _ConsumeVirtualGoodResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
