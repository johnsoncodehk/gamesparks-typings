declare namespace SparkRequests {
    /**
     * Returns a secure, time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform.
     * 
     * @example
     * var request = new SparkRequests.GetUploadUrlRequest();
     * request.uploadData = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * var url = response.url; 
     */
    class GetUploadUrlRequest extends _Request<_GetUploadUrlResponse> {
        /**
         * Optional meta data which is stored against the player’s uploaded content
         * @Required No
         */
        uploadData: JSON[];
    }
    /**
     * A response containing a time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform
     */
    class _GetUploadUrlResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The time sensitive upload URL
         */
        url: string;
    }
}
