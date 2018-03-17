declare namespace SparkRequests {
    /**
     * Returns a secure, time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * uploadId | INVALID | The upload id was invalid
     */
    class GetUploadedRequest extends _Request<_GetUploadedResponse> {
        /**
         * The system generated id of the uploaded item
         * @Required No
         */
        uploadId: string;
    }
    /**
     * A reponse containing a time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.
     */
    class _GetUploadedResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The size of the file in bytes
         */
        size: number;
        /**
         * A time sensitive URL to a piece of content
         */
        url: string;
    }
}
