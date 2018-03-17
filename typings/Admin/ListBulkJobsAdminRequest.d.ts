declare namespace SparkRequests {
    /**
     * Lists existing bulk jobs.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.RevokePurchaseGoodsRequest();
     * request.playerId = ...;
     * request.storeType = ...;
     * request.transactionIds = ...;
     * var response = request.Send();
     * 
     * var revokedGoods = response.revokedGoods; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ListBulkJobsAdminRequest extends _Request<_ListBulkJobsAdminResponse> {
        /**
         * The IDs of existing bulk jobs to get details for
         * @Required No
         */
        bulkJobIds: string[];
    }
    /**
     * A response listing existing bulk jobs
     */
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
