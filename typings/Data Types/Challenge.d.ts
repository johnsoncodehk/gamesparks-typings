declare namespace SparkRequests {
    /**
     * A nested object that represents the challenge data.
     */
    class Challenge {
        /**
         * A list of PlayerDetail objects that represents the players that have accepted this challenge.
         */
        accepted: PlayerDetail[];
        /**
         * A unique identifier for this challenge.
         */
        challengeId: string;
        /**
         * The message included in the challenge by the challenging player who created the challenge.
         */
        challengeMessage: string;
        /**
         * The name of the challenge that this message relates to.
         */
        challengeName: string;
        /**
         * A list of PlayerDetail objects that represents the players that were challenged in this challenge.
         */
        challenged: PlayerDetail[];
        /**
         * Details of the player who issued this challenge.
         */
        challenger: PlayerDetail;
        /**
         * The amount of type 1 currency that has been wagered on this challenge.
         */
        currency1Wager: number;
        /**
         * The amount of type 2 currency that has been wagered on this challenge.
         */
        currency2Wager: number;
        /**
         * The amount of type 3 currency that has been wagered on this challenge.
         */
        currency3Wager: number;
        /**
         * The amount of type 4 currency that has been wagered on this challenge.
         */
        currency4Wager: number;
        /**
         * The amount of type 5 currency that has been wagered on this challenge.
         */
        currency5Wager: number;
        /**
         * The amount of type 6 currency that has been wagered on this challenge.
         */
        currency6Wager: number;
        /**
         * An object representing the currencies that have been wagered on this challenge.
         */
        currencyWagers: JSON;
        /**
         * A list of PlayerDetail objects that represents the players that have declined this challenge.
         */
        declined: PlayerDetail[];
        /**
         * The date when the challenge ends.
         */
        endDate: date;
        /**
         * The latest date that a player can accept the challenge.
         */
        expiryDate: date;
        /**
         * The maximum number of turns that this challenge is configured for.
         */
        maxTurns: number;
        /**
         * In a turn based challenge this fields contains the player’s id whose turn it is next.
         */
        nextPlayer: string;
        /**
         * ScriptData is arbitrary data that can be stored in a challenge instance by a Cloud Code script.
         */
        scriptData: ScriptData[];
        /**
         * The challenge’s short code.
         */
        shortCode: string;
        /**
         * The date when the challenge starts.
         */
        startDate: date;
        /**
         * One of these possible state values: ISSUED, EXPIRED, ACCEPTED, DECLINED, COMPLETE, WITHDRAWN, RUNNING, WAITING, RECEIVED
         */
        state: string;
        /**
         * A collection containing the number of turns taken by each player that has accepted the challenge.
         */
        turnCount: PlayerTurnCount[];
    }
}
