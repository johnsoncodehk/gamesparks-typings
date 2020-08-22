/**
 * The Game Data Service.
 */
interface SparkGameDataService {
    /**
     * A condition builder for a numeric attribute
     */
    N(shortCode: string): SparkDataNumberOperand
    /**
     * A condition builder for a string attribute
     */
    S(shortCode: string): SparkDataStringOperand
    /**
     * Create a new item that can later be persisted. If you insert an item using the same ID as an existing item, then the create action overwrites the existing.
     */
    createItem(type: string, id: string): SparkDataItem
    /**
     * Loads an item from the database by type and id
     */
    getItem(type: string, id: string): SparkDataGetResult
    /**
     * Queries the indices for a number of items that match the supplied condition. Queries are eventually consistent. If you use queryItems immediately after you've inserted data, you might not get the expected results returned.
     */
    queryItems(type: string, condition: SparkDataCondition, sortOrder: SparkDataSortOrder): SparkDataQueryResult
    /**
     * A sort builder for ordering query results
     */
    sort(shortCode: string, ascending: boolean): SparkDataSortOrder
}
