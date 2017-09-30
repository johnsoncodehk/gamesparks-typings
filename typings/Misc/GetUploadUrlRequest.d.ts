declare namespace SparkRequests {
    /**
     * Returns a secure, time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform.
     */
    class GetUploadUrlRequest extends _Request<_GetUploadUrlResponse> {
        /**
         * Optional meta data which is stored against the player’s uploaded content
         */
        uploadData: JSON[];
    }
    class _GetUploadUrlResponse extends _Response {
        /**
         * Optional meta data which is stored against the player’s uploaded content
         */
        uploadData: JSON[];
    }
}
