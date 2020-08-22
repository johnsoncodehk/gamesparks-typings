declare namespace SparkRequests {
    /**
     * Returns the list of the current players game friends.
     * A Game friend is someone in their social network who also plays the game.
     * Against each friend, an indicator is supplied to show whether the friend is currently connected to the GameSparks service
     * 
     * @example
     * var request = new SparkRequests.ListGameFriendsRequest();
     * var response = request.Send();
     * 
     * var friends = response.friends; 
     * var scriptData = response.scriptData; 
     */
    class ListGameFriendsRequest extends _Request<_ListGameFriendsResponse> {
    }
    /**
     * A response containing the list of the current players game friends.
     */
    class _ListGameFriendsResponse extends _Response {
        /**
         * A list of JSON objects containing game friend data
         */
        friends: Player[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
