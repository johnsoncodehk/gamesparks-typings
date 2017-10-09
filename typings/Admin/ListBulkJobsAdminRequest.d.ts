declare namespace SparkRequests {
    /**
     * Lists existing bulk jobs.
     */
    class ListBulkJobsAdminRequest extends _Request<_ListBulkJobsAdminResponse> {
        /**
         * The IDs of existing bulk jobs to get details for
         * @Required No
         */
        bulkJobIds: string[];
    }
    class _ListBulkJobsAdminResponse extends _Response {
        /**
         * A list of JSON objects containing bulk jobs
         */
        bulkJobs: BulkJob[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
