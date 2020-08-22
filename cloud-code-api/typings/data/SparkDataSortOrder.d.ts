/**
 * A sort order
 */
interface SparkDataSortOrder {
    /**
     * Adds a sort to the sort order
     */
    add(shortCode: string, ascending: boolean): SparkDataSortOrder
}
