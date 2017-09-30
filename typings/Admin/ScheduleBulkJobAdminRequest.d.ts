declare namespace SparkRequests {
    /**
     * Schedules a bulk job to be run against multiple players.
     */
    class ScheduleBulkJobAdminRequest extends _Request<_ScheduleBulkJobAdminResponse> {
        /**
         * Optional data to be passed into the script
         */
        data: DBObject;
        /**
         * The short code of the cloud code module to be executed against each player
         */
        moduleShortCode: string;
        /**
         * The query to be run against the player collection to identify which players to execute the cloud code for
         */
        playerQuery: DBObject;
        /**
         * An optional date and time for this job to be run
         */
        scheduledTime: date;
        /**
         * The script to be executed against each player
         */
        script: string;
    }
    class _ScheduleBulkJobAdminResponse extends _Response {
        /**
         * Optional data to be passed into the script
         */
        data: DBObject;
        /**
         * The short code of the cloud code module to be executed against each player
         */
        moduleShortCode: string;
        /**
         * The query to be run against the player collection to identify which players to execute the cloud code for
         */
        playerQuery: DBObject;
        /**
         * An optional date and time for this job to be run
         */
        scheduledTime: date;
        /**
         * The script to be executed against each player
         */
        script: string;
    }
}
