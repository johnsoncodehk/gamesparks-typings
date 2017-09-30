declare namespace SparkRequests {
    /**
     * Cancel one or more bulk jobs.
     */
    class CancelBulkJobAdminRequest extends _Request<_CancelBulkJobAdminResponse> {
        /**
         * The IDs of existing bulk jobs to cancel
         */
        bulkJobIds: string[];
    }
    class _CancelBulkJobAdminResponse extends _Response {
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
