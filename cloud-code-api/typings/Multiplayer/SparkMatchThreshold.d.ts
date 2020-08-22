/**
 * Contains configuration information for a match threshold
 */
interface SparkMatchThreshold {
    /**
     * Returns the shortCode of the match
     * @validity All Scripts
     */
    getPeriod(): number
    /**
     * Returns the maximum skill of the threshold
     * @validity All Scripts
     */
    getAcceptMinPlayers(): boolean
    /**
     * Returns the maximum skill of the threshold
     * @validity All Scripts
     */
    getMax(): number
    /**
     * Returns the minimum skill of the threshold
     * @validity All Scripts
     */
    getMin(): number
    /**
     * Returns the type of the threshold
     * @validity All Scripts
     */
    getName(): string
}
