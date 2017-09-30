declare namespace SparkRequests {
    /**
     * Get the property for the given short Code.
     */
    class GetPropertyRequest extends _Request<_GetPropertyResponse> {
        /**
         * The shortCode of the property to return.
         */
        propertyShortCode: string;
    }
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
