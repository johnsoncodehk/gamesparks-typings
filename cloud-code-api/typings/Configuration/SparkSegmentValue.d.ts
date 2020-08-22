/**
 * Contains configuration information for the segment value
 */
interface SparkSegmentValue {
    /**
     * Returns the name of the segment value
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the description of the segment value
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the shortCode of the segment value
     * @validity All Scripts
     */
    getShortCode(): string
}
