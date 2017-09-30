declare namespace SparkRequests {
    /**
     * Records some custom analytical data.
     * Simple analytics, where you just need to track the number of times something happened, just take a key parameter. We’ll record the players id against the data to allow you to report on averages per user
     * Timed analytics allow you to send start and end timer requests, and with this data GameSparks can track the length of time something takes.
     * If an end request is sent without a matching start timer the request will fail silently and your analytics data might not contain what you expect.
     * If both start and end are supplied, the request will be treated as a start timer.
     * An additional data payload can be attached to the event for advanced reporting. This data can be a string, number or JSON object.
     * If a second start timer is created using a key that has already had a start timer created without an end, the previous one will be marked as abandoned.
     */
    class AnalyticsRequest extends _Request<_AnalyticsResponse> {
        /**
         * Custom data payload
         */
        data: JSON;
        /**
         * Use the value true to indicate it’s an end timer
         */
        end: boolean;
        /**
         * The key you want to track this analysis with.
         */
        key: string;
        /**
         * Use the value true to indicate it’s a start timer
         */
        start: boolean;
    }
    class _AnalyticsResponse extends _Response {
        /**
         * Custom data payload
         */
        data: JSON;
        /**
         * Use the value true to indicate it’s an end timer
         */
        end: boolean;
        /**
         * The key you want to track this analysis with.
         */
        key: string;
        /**
         * Use the value true to indicate it’s a start timer
         */
        start: boolean;
    }
}
