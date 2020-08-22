/**
 * An object that can persist data to the database.
 * By default, the persistor will perform a selective update based on the changed data, without checking the version
 */
interface SparkDataItemPersistor {
    /**
     * Persists the state of the document to the database using the supplied strategies.
     * This method will return false if either the conditional check, or the version check fail
     */
    persist(): SparkDataResult
    /**
     * If set, only the changes that have been made to this document are persisted.
     * Additionally, any numeric changes will be atomically incremented or decremented based on the original value
     * This method will turn off 'withOverwrite' if it's been previously specified
     */
    withAtomicIncrements(): SparkDataItemPersistor
    /**
     * If supplied, the conditions will be used to do a conditional update
     */
    withConditionCheck(condition: SparkDataCondition): SparkDataItemPersistor
    /**
     * If set, when the document is serialized for persistance, if an unsupported data type is found, an exception will be thrown
     */
    withErrorOnTypeConversion(): SparkDataItemPersistor
    /**
     * If set, all fields in the document are persisted, even if they have not been changed, potentially overwriting changes made by other updates.
     * This method will turn off 'withAtomicIncrements' if it's been previously specified.
     */
    withOverwrite(): SparkDataItemPersistor
    /**
     * If set, the document's version number will be used to do a conditional update.
     * If the version number in the DB is different to the version number in this instance, the persist call will return false
     */
    withVersionCheck(): SparkDataItemPersistor
}
