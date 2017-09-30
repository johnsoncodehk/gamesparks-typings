declare namespace SparkRequests {
    /**
     * @Deprecated. Use MatchmakingRequest instead.
     * Find a match for this player, using the given skill and matchShortCode.
     * Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.
     * Each player must match the other for the match to be found.
     */
    class FindMatchRequest extends _Request<_FindMatchResponse> {
        /**
         * The action to take on the already in-flight request for this match. Currently supported actions are: 'cancel’
         */
        action: string;
        /**
         * Optional. Players will be grouped based on the distinct value passed in here, only players in the same group can be matched together
         */
        matchGroup: string;
        /**
         * The shortCode of the match type this player is registering for
         */
        matchShortCode: string;
        /**
         * The skill of the player looking for a match
         */
        skill: number;
    }
    class _FindMatchResponse extends _Response {
        /**
         * The action to take on the already in-flight request for this match. Currently supported actions are: 'cancel’
         */
        action: string;
        /**
         * Optional. Players will be grouped based on the distinct value passed in here, only players in the same group can be matched together
         */
        matchGroup: string;
        /**
         * The shortCode of the match type this player is registering for
         */
        matchShortCode: string;
        /**
         * The skill of the player looking for a match
         */
        skill: number;
    }
}
