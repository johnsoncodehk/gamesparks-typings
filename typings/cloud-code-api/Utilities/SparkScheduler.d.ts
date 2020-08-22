/**
 * Utility to schedule execution of a module in the future
 * validity All Scripts
 * example
 * var theScheduler = Spark.getScheduler();
 */
interface SparkScheduler {
    /**
     * Schedules the execution of the supplied module. The scheduled script will run in the context of the current player
     * @param shortCode The shortCode of the module to execute
     * @param delaySeconds How long to wait until executing the module
     * @param data The data to pass to the module. This will be available as Spark.getData() when the module is running
     * @example
     * theScheduler.inSeconds("SHORT_CODE", 15, {"myData" : myData});
     */
    inSeconds(shortCode: string, delaySeconds: number, data: any): boolean
    /**
     * Schedules the execution of the supplied module
     * @param shortCode The shortCode of the module to execute
     * @param delaySeconds How long to wait until executing the module
     * @param data The data to pass to the module. This will be available as Spark.getData() when the module is running
     * @param key The id of the scheduled item. If schedule already exists for the given key it's details will be updated
     * @example
     * theScheduler.inSeconds("SHORT_CODE", 15, {"myData" : myData}, "logTimeout-" + Spark.getPlayer().getPlayerId());
     */
    inSeconds(shortCode: string, delaySeconds: number, data: any, key: string): boolean
    /**
     * Cancels the execution of a previously scheduled module.
     * @param key The id of the scheduled item to cancel.
     */
    cancel(key: string): void
}
