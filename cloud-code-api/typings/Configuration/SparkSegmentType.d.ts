/**
 * Contains configuration information for the segment
 */
interface SparkSegmentType {
    /**
     * Returns the name of the segment
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the description of the segment
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the shortCode of the segment
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the values configured against the segment
     * @validity All Scripts
     */
    getValues(): SparkSegmentValue[]
}
