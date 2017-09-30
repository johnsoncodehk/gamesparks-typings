declare namespace SparkRequests {
    /**
     * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.
     */
    class BuyVirtualGoodsRequest extends _Request<_BuyVirtualGoodsResponse> {
        /**
         * The short code of the currency to use
         */
        currencyShortCode: string;
        /**
         * Which virtual currency to use. (1 to 6)
         */
        currencyType: number;
        /**
         * The number of items to purchase
         */
        quantity: number;
        /**
         * The short code of the virtual good to be purchased
         */
        shortCode: string;
    }
    class _BuyVirtualGoodsResponse extends _Response {
        /**
         * The short code of the currency to use
         */
        currencyShortCode: string;
        /**
         * Which virtual currency to use. (1 to 6)
         */
        currencyType: number;
        /**
         * The number of items to purchase
         */
        quantity: number;
        /**
         * The short code of the virtual good to be purchased
         */
        shortCode: string;
    }
}
