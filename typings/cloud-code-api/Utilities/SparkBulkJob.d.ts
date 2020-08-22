/**
 * An object that represents a bulk job.
 * @example
 * var bulkJob = Spark.getBulkJobScheduler().listBulkJobs(null)[0];
 */
interface SparkBulkJob {
    /**
     * Returns the ID of this bulk job.
     * @example
     * Spark.getBulkJobScheduler().listBulkJobs(null)[0].getId();
     */
    getId(): string
    /**
     * The actual count of players affected by the bulk job
     */
    getActualCount(): number
    /**
     * The time at which the bulk job completed execution
     */
    getCompleted(): date
    /**
     * The time at which the bulk job was created
     */
    getCreated(): date
    /**
     * Data to be passed into the Module or Script
     */
    getData(): any
    /**
     * The number of players processed by the bulk job
     */
    getDoneCount(): number
    /**
     * The number of errors encountered whilst running the Module or Script for players
     */
    getErrorCount(): number
    /**
     * The estimated count of players affected by the bulk job
     */
    getEstimatedCount(): number
    /**
     * The Cloud Code Module to run for each player
     */
    getModuleShortCode(): string
    /**
     * The query to identify players to perform the bulk job on
     */
    getPlayerQuery(): any
    /**
     * The time at which the job was scheduled to run
     */
    getScheduledTime(): date
    /**
     * The Cloud Code script to run for each player
     */
    getScript(): string
    /**
     * The time at which the bulk job started to execute
     */
    getStarted(): date
}
