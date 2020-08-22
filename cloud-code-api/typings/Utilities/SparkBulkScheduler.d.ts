/**
 * Provides access to the bulk scheduler.
 * var bulkScheduler = Spark.getBulkScheduler();
 */
interface SparkBulkScheduler {
    /**
     * Submit a job to be executed by running a Cloud Code module.
     * @validity All Scripts
     * @param playerQuery A query to be run against the player collection to identify the players to execute against
     * @param module A Cloud Code module short code, to be executed against each player
     * @param data Data to be passed in to the Cloud Code module
     * @param delaySeconds The number of seconds in the future to execute the job
     * @returns The jobId if the job was accepted, or null
     * @example
     * var jobId = Spark.getBulkScheduler().submitJobModule(query, module, data, delaySeconds);
     */
    submitJobModule(playerQuery: any, module: string, data: any, delaySeconds: number): string
    /**
     * Submit a job to be executed by running an ad-hoc script.
     * @validity All Scripts
     * @param playerQuery A query to be run against the player collection to identify the players to execute against
     * @param script A Cloud Code script to be executed against each player
     * @param data Data to be passed in to the script
     * @param delaySeconds The number of seconds in the future to execute the job
     * @returns The jobId if the job was accepted, or null
     * @example
     * var jobId = Spark.getBulkScheduler().submitJobScript(query, script, data, delaySeconds);
     */
    submitJobScript(playerQuery: any, script: string, data: any, delaySeconds: number): string
    /**
     * Cancel a previously scheduled bulk job.
     * @validity All Scripts
     * @param jobId The ID of the job to cancel
     * @returns true if the job was canceled, false otherwise
     * @example
     * var canceled = Spark.getBulkScheduler().cancelJob(jobIdToCancel);
     */
    cancelJob(jobId: string): boolean
    /**
     * List previously scheduled bulk jobs.
     * @validity All Scripts
     * @param jobIds The IDs of the jobs to list, or null to list all pending jobs
     * @returns An array of bulk jobs
     * @example
     * var canceled = Spark.getBulkScheduler().listBulkJobs(null);
     */
    listBulkJobs(jobIds: string[]): SparkBulkJob[]
}
