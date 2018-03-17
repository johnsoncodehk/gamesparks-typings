declare namespace SparkRequests {
    /**
     * Find the details of an existing match this player belongs to, using the matchId
     * 
     * Error Codes
     * ---
     * Key | Value | Description
     * --- | --- | ---
     * matchId | NOT_FOUND | No match found with given matchId for this player
     */
    class MatchDetailsRequest extends _Request<_MatchDetailsResponse> {
        /**
         * The matchId to find the details of
         * @Required Yes
         */
        matchId: string;
        /**
         * Adds realtime server details if the match has been created using Cloud Code and it has not been realtime enabled
         * @Required No
         */
        realtimeEnabled: boolean;
    }
    /**
     * A response to a match details request
     */
    class _MatchDetailsResponse extends _Response {
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
