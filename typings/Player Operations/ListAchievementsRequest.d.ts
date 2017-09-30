declare namespace SparkRequests {
    /**
     * Retrieves a list of the configured achievements in the game, along with whether the current player has earned the achievement.
     */
    class ListAchievementsRequest extends _Request<_ListAchievementsResponse> {
    }
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
