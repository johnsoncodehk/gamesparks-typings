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
         * The date when the downloadable item was last modified
         */
        lastModified: date;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The short code of the item
         */
        shortCode: string;
        /**
         * The size of the item in bytes
         */
        size: number;
        /**
         * The download URL
         */
        url: string;
    }
}
