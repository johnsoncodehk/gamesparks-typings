/**
 * Contains configuration information for the custom currency.
 * The methods in this class respect the segments of the current player when being executed
 */
interface SparkCurrency {
    /**
     * Returns the shortCode of the currency
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the name of the currency
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the description of the currency
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the signup bonus for the currency
     * @validity All Scripts
     */
    getSignupBonus(): number
}
