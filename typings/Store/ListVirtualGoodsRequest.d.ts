declare namespace SparkRequests {
    /**
     * Returns the list of configured virtual goods.
     */
    class ListVirtualGoodsRequest extends _Request<_ListVirtualGoodsResponse> {
        /**
         * If true, the returned list will include disabled VirtualVoods
         */
        includeDisabled: boolean;
        /**
         * A filter to only include goods with the given tags. Each good must have all the provided tags.
         */
        tags: string[];
    }
    class _ListVirtualGoodsResponse extends _Response {
        /**
         * If true, the returned list will include disabled VirtualVoods
         */
        includeDisabled: boolean;
        /**
         * A filter to only include goods with the given tags. Each good must have all the provided tags.
         */
        tags: string[];
    }
}
