declare namespace SparkRequests {
    /**
     * A nested object that represents the bulk job.
     */
    class BulkJob {
        /**
         * The actual count of players affected by the bulk job (calculated when the job started to run)
         */
        actualCount: number;
        /**
         * The time at which the bulk job completed execution
         */
        completed: date;
        /**
         * The time at which the bulk job was created
         */
        created: date;
        /**
         * Data to be passed into the Module or Script
         */
        data: DBObject;
        /**
         * The number of players processed by the bulk job so far
         */
        doneCount: number;
        /**
         * The number of errors encountered whilst running the Module or Script for players
         */
        errorCount: number;
        /**
         * The estimated count of players affected by the bulk job (estimated when the job was submitted)
         */
        estimatedCount: number;
        /**
         * The ID for the bulk job
         */
        id: string;
        /**
         * The Cloud Code Module to run for each player
         */
        moduleShortCode: string;
        /**
         * The query to identify players to perform the bulk job on
         */
        playerQuery: DBObject;
        /**
         * The time at which the job was scheduled to run
         */
        scheduledTime: date;
        /**
         * The Cloud Code script to run for each player
         */
        script: string;
        /**
         * The time at which the bulk job started to execute
         */
        started: date;
        /**
         * The current state of the bulk job
         */
        state: string;
    }
}
