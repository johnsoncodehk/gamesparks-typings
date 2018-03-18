declare namespace SparkRequests {
    /**
     * Get a list of the messages sent to the team (by players using SendTeamChatMessageRequest).
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ListTeamChatRequest();
     * request.entryCount = ...;
     * request.offset = ...;
     * request.ownerId = ...;
     * request.teamId = ...;
     * request.teamType = ...;
     * var response = request.Send();
     * 
     * var messages = response.messages; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ListTeamChatRequest extends _Request<_ListTeamChatResponse> {
        /**
         * The number of messages to return (default=50)
         * @Required No
         */
        entryCount: number;
        /**
         * The offset (nth message) to start from (default=0)
         * @Required No
         */
        offset: number;
        /**
         * The team owner to find, used in combination with teamType. If not supplied the current players id will be used
         * @Required No
         */
        ownerId: string;
        /**
         * The teamId to find (may be null if teamType supplied)
         * @Required No
         */
        teamId: string;
        /**
         * The teamType to find, used in combination with the current player, or the player defined by ownerId
         * @Required No
         */
        teamType: string;
    }
    /**
     * A response to a list team messages request.
     */
    class _ListTeamChatResponse extends _Response {
        /**
         * The collection of team chat messages
         */
        messages: ChatMessage[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
