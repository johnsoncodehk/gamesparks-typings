declare namespace SparkRequests {
    /**
     * Lists existing bulk jobs.
     */
    class ListBulkJobsAdminRequest extends _Request<_ListBulkJobsAdminResponse> {
        /**
         * The IDs of existing bulk jobs to get details for
         */
        bulkJobIds: string[];
    }
    class _ListBulkJobsAdminResponse extends _Response {
        /**
         * The IDs of existing bulk jobs to get details for
         */
        bulkJobIds: string[];
    }
}
