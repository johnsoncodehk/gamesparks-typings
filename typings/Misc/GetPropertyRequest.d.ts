declare namespace SparkRequests {
    /**
     * Get the property for the given short Code.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * property | NOT_FOUND | No property with given shortCode could be found.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.GetPropertySetRequest();
     * request.propertySetShortCode = ...;
     * var response = request.Send();
     * 
     * var propertySet = response.propertySet; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class GetPropertyRequest extends _Request<_GetPropertyResponse> {
        /**
         * The shortCode of the property to return.
         * @Required Yes
         */
        propertyShortCode: string;
    }
    /**
     * A response containing the requested property
     */
    class _GetPropertyResponse extends _Response {
        /**
         * The property value
         */
        property: JSON;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
