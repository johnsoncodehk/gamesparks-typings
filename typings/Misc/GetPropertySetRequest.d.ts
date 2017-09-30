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
         * The shortCode of the property set to return.
         */
        propertySetShortCode: string;
    }
}
