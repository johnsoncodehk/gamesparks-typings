/**
 * Represents an item from the database
 */
interface SparkDataItem {
    /**
     * The TTL (in milliseconds since the Epoch time) for this item
     */
    getTTL(): number
    /**
     * The JSON data of the item
     */
    getData(): any
    /**
     * Deletes the item from the DB
     */
    delete(): SparkDataResult
    /**
     * The ID of the item
     */
    getId(): string
    /**
     * Gets a persistor object allowing you to control how the data is written to the database
     */
    persistor(): SparkDataItemPersistor
    /**
     * The JSON data of the item
     */
    setData(data: any): SparkDataItem
    /**
     * The TTL (in milliseconds since the Epoch time) for this item
     */
    setTTL(ttl: number): void
    /**
     * The type of the item
     */
    getType(): string
    /**
     * Returns a set of paths that contain data that is invalid for storage
     * if set to false, the invalid items will be silently removed from the saved data
     */
    getValidationErrors(): string[]
}
