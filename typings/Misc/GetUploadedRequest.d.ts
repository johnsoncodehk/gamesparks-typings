declare namespace SparkRequests {
    /**
     * Returns a secure, time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.
     */
    class GetUploadedRequest extends _Request<_GetUploadedResponse> {
        /**
         * The system generated id of the uploaded item
         */
        uploadId: string;
    }
    class _GetUploadedResponse extends _Response {
        /**
         * The system generated id of the uploaded item
         */
        uploadId: string;
    }
}
