declare namespace SparkRequests {
    /**
     * Returns a list of challenges in the state defined in the 'state’ field.
     * The response can be further filtered by passing a shortCode field which will limit the returned lists to challenges of that short code.
     * Valid states are:
     * WAITING : The challenge has been issued and accepted and is waiting for the start date.
     * RUNNING : The challenge is active.
     * ISSUED : The challenge has been issued by the current player and is waiting to be accepted.
     * RECEIVED : The challenge has been issued to the current player and is waiting to be accepted.
     * COMPLETE : The challenge has completed.
     * DECLINED : The challenge has been issued by the current player and has been declined.
     * 
     * @example
     * var request = new SparkRequests.ListChallengeRequest();
     * request.entryCount = ...;
     * request.offset = ...;
     * request.shortCode = ...;
     * request.state = ...;
     * request.states = ...;
     * var response = request.Send();
     * 
     * var challengeInstances = response.challengeInstances; 
     * var scriptData = response.scriptData; 
     */
    class ListChallengeRequest extends _Request<_ListChallengeResponse> {
        /**
         * The number of items to return in a page (default=50)
         * @Required No
         */
        entryCount: number;
        /**
         * The offset (page number) to start from (default=0)
         * @Required No
         */
        offset: number;
        /**
         * The type of challenge to return
         * @Required No
         */
        shortCode: string;
        /**
         * The state of the challenged to be returned
         * @Required No
         */
        state: string;
        /**
         * The states of the challenges to be returned
         * @Required No
         */
        states: string[];
    }
    /**
     * A response containing challenges that are in the state that was specified in the request
     */
    class _ListChallengeResponse extends _Response {
        /**
         * A list of JSON objects representing the challenges.
         */
        challengeInstances: Challenge[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
