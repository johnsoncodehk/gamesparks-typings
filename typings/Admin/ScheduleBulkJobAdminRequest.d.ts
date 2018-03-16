declare namespace SparkRequests {
    /**
     * Schedules a bulk job to be run against multiple players.
     */
    class ScheduleBulkJobAdminRequest extends _Request<_ScheduleBulkJobAdminResponse> {
        /**
         * Optional data to be passed into the script
         * @Required No
         */
        data: DBObject;
        /**
         * The short code of the cloud code module to be executed against each player
         * @Required No
         */
        moduleShortCode: string;
        /**
         * The query to be run against the player collection to identify which players to execute the cloud code for
         * @Required Yes
         */
        playerQuery: DBObject;
        /**
         * An optional date and time for this job to be run
         * @Required No
         */
        scheduledTime: date;
        /**
         * The script to be executed against each player
         * @Required No
         */
        script: string;
    }
    /**
     * A response acknowledging the scheduling of a bulk job
     */
    class _ScheduleBulkJobAdminResponse extends _Response {
        /**
         * The count of players who would be affected by this job if it ran at the time it was submitted
         */
        estimatedCount: number;
        /**
         * The unique job ID, used to identify this job in future requests
         */
        jobId: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
