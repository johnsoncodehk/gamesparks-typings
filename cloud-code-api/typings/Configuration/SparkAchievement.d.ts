/**
 * Contains configuration information for the achievement
 * The methods in this class respect the segments of the current player when being executed
 */
interface SparkAchievement {
    /**
     * Returns the name of the achievement
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the description of the achievement
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the shortCode of the achievement
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the currency1Award of the achievement
     * @validity All Scripts
     */
    getCurrency1Award(): number
    /**
     * Returns the currency2Award of the achievement
     * @validity All Scripts
     */
    getCurrency2Award(): number
    /**
     * Returns the currency3Award of the achievement
     * @validity All Scripts
     */
    getCurrency3Award(): number
    /**
     * Returns the currency4Award of the achievement
     * @validity All Scripts
     */
    getCurrency4Award(): number
    /**
     * Returns the currency5Award of the achievement
     * @validity All Scripts
     */
    getCurrency5Award(): number
    /**
     * Returns the currency5Award of the achievement
     * @validity All Scripts
     */
    getCurrency6Award(): number
    /**
     * Returns the property set associated with the achievement
     * @validity All Scripts
     */
    getPropertySet(): any
    /**
     * Returns the virtual good award of the achievement
     * @validity All Scripts
     */
    getVirtualGoodAward(): SparkVirtualGood
    /**
     * Returns the currency awards map associated with this achievement
     * @validity All Scripts
     */
    getCurrencyAwards(): any
}
