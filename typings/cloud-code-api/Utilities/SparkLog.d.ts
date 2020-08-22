/**
 * A Logging interface that can be called from scripts.
 * This interface writes to the script.log table that is accessible in the developer portal using the NoSQL explorer tool.
 * The object passed can either be complex JSON or simple javascript values.
 * @example
 * var logger = Spark.getLog();
 */
interface SparkLog {
    /**
     * Records value into the spark.log table with the level set to debug.
     * @param msg the message to log
     * @example
     * Spark.getLog().debug("Simple string logging");
     */
    debug(msg: any): void
    /**
     * Records value into the spark.log table with the level set to info.
     * @param msg the message to log
     * @example
     * Spark.getLog().info({type:"JSON logging"});
     */
    info(msg: any): void
    /**
     * Records value into the spark.log table with the level set to warn.
     * @param msg the message to log
     * @example
     * Spark.getLog().warn({type:"JSON logging"})
     */
    warn(msg: any): void
    /**
     * Records value into the spark.log table with the level set to error.
     * @param msg the message to log
     * @example
     * Spark.getLog().error({type:"JSON logging"})
     */
    error(msg: any): void
    /**
     * Returns the currently configured log level.
     * @example
     * Spark.getLog().getLevel()
     */
    getLevel(): string
    /**
     * Updates the current level that logs will be written at.
     * Entries will only be written if the level is greater than the current level set.
     * Available levels are: "DEBUG", "INFO", "WARN", "ERROR".
     * Note: this change takes time to propagate throughout the system, it may be minutes before all servers are using the new level.
     * @param level the new level at which to log
     * @example
     * Spark.getLog().setLevel("DEBUG")
     */
    setLevel(level: string): void
}
