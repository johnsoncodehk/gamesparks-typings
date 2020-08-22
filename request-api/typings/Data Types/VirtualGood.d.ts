declare namespace SparkRequests {
    /**
     * A nested object that represents the virtual good.
     */
    class VirtualGood {
        /**
         * The Windows Phone 8 productId of the item.
         */
        WP8StoreProductId: string;
        /**
         * The Amazon Store productId of the item.
         */
        amazonStoreProductId: string;
        /**
         * The Base Currency1 cost of the Virtual Good, before segmentation
         */
        baseCurrency1Cost: number;
        /**
         * The Base Currency2 cost of the Virtual Good, before segmentation
         */
        baseCurrency2Cost: number;
        /**
         * The Base Currency3 cost of the Virtual Good, before segmentation
         */
        baseCurrency3Cost: number;
        /**
         * The Base Currency4 cost of the Virtual Good, before segmentation
         */
        baseCurrency4Cost: number;
        /**
         * The Base Currency5 cost of the Virtual Good, before segmentation
         */
        baseCurrency5Cost: number;
        /**
         * The Base Currency6 cost of the Virtual Good, before segmentation
         */
        baseCurrency6Cost: number;
        /**
         * The Base currency costs of the Virtual Good, before experiments
         */
        baseCurrencyCosts: JSON;
        /**
         * Returns the bundle goods of the virtual good
         */
        bundledGoods: BundledGood[];
        /**
         * The Currency1 cost of the Virtual Good
         */
        currency1Cost: number;
        /**
         * The Currency2 cost of the Virtual Good
         */
        currency2Cost: number;
        /**
         * The Currency3 cost of the Virtual Good
         */
        currency3Cost: number;
        /**
         * The Currency4 cost of the Virtual Good
         */
        currency4Cost: number;
        /**
         * The Currency5 cost of the Virtual Good
         */
        currency5Cost: number;
        /**
         * The Currency6 cost of the Virtual Good
         */
        currency6Cost: number;
        /**
         * The currency costs of the Virtual Good
         */
        currencyCosts: JSON;
        /**
         * The description of the Virtual Good
         */
        description: string;
        /**
         * Whether the item is disabled.
         */
        disabled: boolean;
        /**
         * The google play productId of the item.
         */
        googlePlayProductId: string;
        /**
         * The iOS AppStore productId of the item.
         */
        iosAppStoreProductId: string;
        /**
         * The maximum number of the Virtual Good that can be owned at one time
         */
        maxQuantity: number;
        /**
         * The name of the Virtual Good
         */
        name: string;
        /**
         * The custom property set configured on the item.
         */
        propertySet: JSON;
        /**
         * The PSN Store productId of the item.
         */
        psnStoreProductId: string;
        /**
         * The Segmented Currency1 cost of the Virtual Good, before experiments
         */
        segmentedCurrency1Cost: number;
        /**
         * The Segmented Currency2 cost of the Virtual Good, before experiments
         */
        segmentedCurrency2Cost: number;
        /**
         * The Segmented Currency3 cost of the Virtual Good, before experiments
         */
        segmentedCurrency3Cost: number;
        /**
         * The Segmented Currency4 cost of the Virtual Good, before experiments
         */
        segmentedCurrency4Cost: number;
        /**
         * The Segmented Currency5 cost of the Virtual Good, before experiments
         */
        segmentedCurrency5Cost: number;
        /**
         * The Segmented Currency6 cost of the Virtual Good, before experiments
         */
        segmentedCurrency6Cost: number;
        /**
         * The segmented currency costs of the Virtual Good, before experiments
         */
        segmentedCurrencyCosts: JSON;
        /**
         * The short code of the Virtual Good
         */
        shortCode: string;
        /**
         * The Steam Store productId of the item.
         */
        steamStoreProductId: string;
        /**
         * The tags of the Virtual Good
         */
        tags: string;
        /**
         * The type of the virtual good, “VGOOD” or “CURRENCY”
         */
        type: string;
        /**
         * The Windows 8 productId of the item.
         */
        w8StoreProductId: string;
    }
}
