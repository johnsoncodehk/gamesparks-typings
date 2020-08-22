/**
 * Contains configuration information for cloud code scripts
 */
interface SparkScriptOptions {
    /**
     * Returns whether dates retrieved from the database will be converted into JS Dates or longs
     * @validity All Scripts
     */
    getMaintainDbDates(): boolean
    /**
     * Sets whether dates retrieved from the database will be converted into JS Dates or longs
     * @validity All Scripts
     */
    setMaintainDbDates(maintainDbDates: boolean): void
}
