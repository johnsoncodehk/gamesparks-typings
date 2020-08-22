/**
 * Contains configuration information for the virtual good
 * The methods in this class respect the segments of the current player when being executed
 */
interface SparkVirtualGood {
    /**
     * Returns the name of the virtual good
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the description of the virtual good
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the currency1Cost of the virtual good
     * @validity All Scripts
     */
    getCurrency1Cost(): number
    /**
     * Returns the currency1Cost of the virtual good
     * @validity All Scripts
     */
    getCurrency2Cost(): number
    /**
     * Returns the currency3Cost of the virtual good
     * @validity All Scripts
     */
    getCurrency3Cost(): number
    /**
     * Returns the currency4Cost of the virtual good
     * @validity All Scripts
     */
    getCurrency4Cost(): number
    /**
     * Returns the currency5Cost of the virtual good
     * @validity All Scripts
     */
    getCurrency5Cost(): number
    /**
     * Returns the currency6Cost of the virtual good
     * @validity All Scripts
     */
    getCurrency6Cost(): number
    /**
     * Returns the short code of the virtual good
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the Google Play ProductId of the virtual good
     * @validity All Scripts
     */
    getGooglePlayProductId(): string
    /**
     * Returns the iOS ProductId of the virtual good
     * @validity All Scripts
     */
    getIosAppStoreProductId(): string
    /**
     * Returns the WP8 ProductId of the virtual good
     * @validity All Scripts
     */
    getWP8StoreProductId(): string
    /**
     * Returns the W8 ProductId of the virtual good
     * @validity All Scripts
     */
    getW8StoreProductId(): string
    /**
     * Returns the Amazon Product Id of the virtual good
     * @validity All Scripts
     */
    getAmazonStoreProductId(): string
    /**
     * Returns the Steam Product Id of the virtual good
     * @validity All Scripts
     */
    getSteamStoreProductId(): string
    /**
     * Returns the PSN Product Id of the virtual good
     * @validity All Scripts
     */
    getPsnStoreProductId(): string
    /**
     * Returns the type of the virtual good
     * @validity All Scripts
     */
    getType(): string
    /**
     * Returns the tags of the virtual good
     * @validity All Scripts
     */
    getTags(): string[]
    /**
     * Returns the max quantity of the virtual good
     * @validity All Scripts
     */
    getMaxQuantity(): number
    /**
     * Returns the bundled goods of the virtual good
     * @validity All Scripts
     */
    getBundledGoods(): any
    /**
     * Returns whether this VirtualGood is hidden
     * @validity All Scripts
     */
    isDisabled(): boolean
    /**
     * Returns the property set associated with this virtual good
     * @validity All Scripts
     */
    getPropertySet(): any
    /**
     * Returns the currency cost map associated with this virtual good
     * @validity All Scripts
     */
    getCurrencyCosts(): any
}
