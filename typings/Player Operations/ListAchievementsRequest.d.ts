declare namespace SparkRequests {
    /**
     * Retrieves a list of the configured achievements in the game, along with whether the current player has earned the achievement.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.ListGameFriendsRequest();
     * var response = request.Send();
     * 
     * var friends = response.friends; 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ListAchievementsRequest extends _Request<_ListAchievementsResponse> {
    }
    /**
     * A reponse containing the game’s achievments and an indication of whether the player has earned it
     */
    class _ListAchievementsResponse extends _Response {
        /**
         * A list of JSON achievment objects
         */
        achievements: Achievement[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
