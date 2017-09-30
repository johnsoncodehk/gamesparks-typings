declare namespace SparkRequests {
    /**
     * Get the property set for the given short Code.
     */
    class GetPropertySetRequest extends _Request<_GetPropertySetResponse> {
        /**
         * The shortCode of the property set to return.
         */
        propertySetShortCode: string;
    }
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
