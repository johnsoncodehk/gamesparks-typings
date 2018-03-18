declare namespace SparkRequests {
    /**
     * Consumes a given amount of the specified virtual good.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * qty | INSUFFICIENT | The player does not have sufficient virtual goods for shortcode specified
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ConsumeVirtualGoodRequest();
     * request.quantity = ...;
     * request.shortCode = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ConsumeVirtualGoodRequest extends _Request<_ConsumeVirtualGoodResponse> {
        /**
         * The amount of virtual goods to be consumed
         * @Required Yes
         */
        quantity: number;
        /**
         * The short code of the virtual good to be consumed
         * @Required Yes
         */
        shortCode: string;
    }
    /**
     * A response to a consume virtual goods response
     */
    class _ConsumeVirtualGoodResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
