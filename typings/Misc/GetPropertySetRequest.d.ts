declare namespace SparkRequests {
    /**
     * Get the property set for the given short Code.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * propertySet | NOT_FOUND | No propertySet with given shortCode could be found.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.GetUploadUrlRequest();
     * request.uploadData = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * var url = response.url; 
     * ```
     */
    class GetPropertySetRequest extends _Request<_GetPropertySetResponse> {
        /**
         * The shortCode of the property set to return.
         * @Required Yes
         */
        propertySetShortCode: string;
    }
    /**
     * A response containing the requested property set
     */
    class _GetPropertySetResponse extends _Response {
        /**
         * The property set
         */
        propertySet: JSON;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
