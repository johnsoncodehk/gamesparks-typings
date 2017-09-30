declare namespace SparkRequests {
    /**
     * Returns the list of configured challenge types.
     */
    class ListChallengeTypeRequest extends _Request<_ListChallengeTypeResponse> {
    }
    class _ListChallengeTypeResponse extends _Response {
        /**
         * A list of JSON objects containing the challenge templates for the game
         */
        challengeTemplates: ChallengeType[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
