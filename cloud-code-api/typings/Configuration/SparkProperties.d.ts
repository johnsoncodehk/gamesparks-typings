/**
 * Provides access to the properties for the current game.
 * var properties = Spark.getProperties();
 */
interface SparkProperties {
    /**
     * Returns the property with the given shortCode, as JSON
     * @example
     * var property = Spark.getProperties().getProperty(propertyShortCode);
     */
    getProperty(propertyShortCode: string): any
    /**
     * Returns the property set with the given shortCode, as JSON
     * @example
     * var propertySet = Spark.getProperties().getPropertySet(propertySetShortCode);
     */
    getPropertySet(propertySetShortCode: string): any
}
