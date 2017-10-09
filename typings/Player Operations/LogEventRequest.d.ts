declare namespace SparkRequests {
    /**
     * Allows a user defined event to be triggered.
     * This call differs from most as it does not have a fixed format. The @class and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.
     * The example below shows a request to an event with a short code of HS with 2 attributes, 'HS’ & 'GL’.
     */
    class LogEventRequest extends _Request<_LogEventResponse> {
        /**
         * The short code of the event to trigger
         * @Required Yes
         */
        eventKey: string;
    }
    class _LogEventResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
