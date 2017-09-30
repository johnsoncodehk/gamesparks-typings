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
         * The accessToken used to authenticate this player for this match
         */
        accessToken: string;
        /**
         * The host to connect to for this match
         */
        host: string;
        /**
         * MatchData is arbitrary data that can be stored in a Match instance by a Cloud Code script.
         */
        matchData: JSON;
        /**
         * The id for this match instance
         */
        matchId: string;
        /**
         * The opponents this player has been matched against
         */
        opponents: Player[];
        /**
         * The peerId of this player within the match
         */
        peerId: number;
        /**
         * The id of the current player
         */
        playerId: string;
        /**
         * The port to connect to for this match
         */
        port: number;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
