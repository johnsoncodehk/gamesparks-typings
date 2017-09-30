declare namespace SparkRequests {
    /**
     * Returns a secure, time sensitive url to allow the game to download a piece of downloadable content stored in the GameSparks platform.
     */
    class GetDownloadableRequest extends _Request<_GetDownloadableResponse> {
        /**
         * The short code of the Downloadable item
         */
        shortCode: string;
    }
    class _GetDownloadableResponse extends _Response {
        /**
         * The short code of the Downloadable item
         */
        shortCode: string;
    }
}
