/**
 * The result of a query method
 */
interface SparkDataQueryResult {
    /**
     * The cursor returned from the query method
     */
    cursor(): SparkDataCursor
    /**
     * The error message, if an error occurred
     */
    error(): string
}
