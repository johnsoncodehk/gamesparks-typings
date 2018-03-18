declare namespace SparkRequests {
    /**
     * Returns a secure, time sensitive url to allow the game to download a piece of downloadable content stored in the GameSparks platform.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * shortCode | INVALID | The short code does not match any Downloadable shortCode
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.GetDownloadableRequest();
     * request.shortCode = ...;
     * var response = request.Send();
     * 
     * var lastModified = response.lastModified; 
     * var scriptData = response.scriptData; 
     * var shortCode = response.shortCode; 
     * var size = response.size; 
     * var url = response.url; 
     * ```
     */
    class GetDownloadableRequest extends _Request<_GetDownloadableResponse> {
        /**
         * The short code of the Downloadable item
         * @Required Yes
         */
        shortCode: string;
    }
    /**
     * A response containing the download URL for a downloadable item
     */
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
