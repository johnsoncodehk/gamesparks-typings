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
         * The IDs of existing bulk jobs to cancel
         */
        bulkJobIds: string[];
    }
}
