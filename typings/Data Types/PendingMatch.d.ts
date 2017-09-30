declare namespace SparkRequests {
    /**
     * An object that represents a pending match.
     */
    class PendingMatch {
        /**
         * The ID for the pending match
         */
        id: string;
        /**
         * A JSON Map of the matchData associated to this pending match
         */
        matchData: JSON;
        /**
         * The match group for the pending match
         */
        matchGroup: string;
        /**
         * The match shortCode for the pending match
         */
        matchShortCode: string;
        /**
         * The players already part of this pending match
         */
        matchedPlayers: MatchedPlayer[];
        /**
         * The average skill of players in this pending match
         */
        skill: number;
    }
}
