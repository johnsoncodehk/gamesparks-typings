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
         * The shortCode of the property to return.
         */
        propertyShortCode: string;
    }
}
