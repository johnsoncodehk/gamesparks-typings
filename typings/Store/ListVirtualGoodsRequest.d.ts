declare namespace SparkRequests {
    /**
     * Returns the list of configured virtual goods.
     */
    class ListVirtualGoodsRequest extends _Request<_ListVirtualGoodsResponse> {
        /**
         * If true, the returned list will include disabled VirtualVoods
         * @Required No
         */
        includeDisabled: boolean;
        /**
         * A filter to only include goods with the given tags. Each good must have all the provided tags.
         * @Required No
         */
        tags: string[];
    }
    class _ListVirtualGoodsResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A list of JSON objects containing virtual goods data
         */
        virtualGoods: VirtualGood[];
    }
}
