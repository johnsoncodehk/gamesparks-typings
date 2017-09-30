declare namespace SparkRequests {
    /**
     * Issues a challenge to a group of players from the currently signed in player.
     * The endTime field must be present unless the challenge template has an achievement set in the ‘First to Achievement’ field.
     * The usersToChallenge field must be present for this request if the acessType is PRIVATE (which is the default).
     */
    class CreateChallengeRequest extends _Request<_CreateChallengeResponse> {
        /**
         * Who can join this challenge. Either PUBLIC, PRIVATE or FRIENDS
         */
        accessType: string;
        /**
         * Whether this challenge should automatically start when a new player joins and maxPlayers is reached
         */
        autoStartJoinedChallengeOnMaxPlayers: boolean;
        /**
         * An optional message to include with the challenge
         */
        challengeMessage: string;
        /**
         * The short code of the challenge
         */
        challengeShortCode: string;
        /**
         * The ammount of currency type 1 that the player is wagering on this challenge
         */
        currency1Wager: number;
        /**
         * The amount of currency type 2 that the player is wagering on this challenge
         */
        currency2Wager: number;
        /**
         * The amount of currency type 3 that the player is wagering on this challenge
         */
        currency3Wager: number;
        /**
         * The amount of currency type 4 that the player is wagering on this challenge
         */
        currency4Wager: number;
        /**
         * The amount of currency type 5 that the player is wagering on this challenge
         */
        currency5Wager: number;
        /**
         * The amount of currency type 6 that the player is wagering on this challenge
         */
        currency6Wager: number;
        /**
         * A JSON object containing the amounts of named currencies that the player is wagering on this challenge
         */
        currencyWagers: JSON;
        /**
         * Criteria for who can and cannot find and join this challenge (when the accessType is PUBLIC or FRIENDS).
         */
        eligibilityCriteria: JSON;
        /**
         * The time at which this challenge will end. This is required when the challenge is not linked to an achievement
         */
        endTime: date;
        /**
         * The latest time that players can join this challenge
         */
        expiryTime: date;
        /**
         * The maximum number of attempts
         */
        maxAttempts: number;
        /**
         * The maximum number of players that are allowed to join this challenge
         */
        maxPlayers: number;
        /**
         * The minimum number of players that are allowed to join this challenge
         */
        minPlayers: number;
        /**
         * If True  no messaging is triggered
         */
        silent: boolean;
        /**
         * The time at which this challenge will begin
         */
        startTime: date;
        /**
         * A player id or an array of player ids who will recieve this challenge
         */
        usersToChallenge: string[];
    }
    class _CreateChallengeResponse extends _Response {
        /**
         * Who can join this challenge. Either PUBLIC, PRIVATE or FRIENDS
         */
        accessType: string;
        /**
         * Whether this challenge should automatically start when a new player joins and maxPlayers is reached
         */
        autoStartJoinedChallengeOnMaxPlayers: boolean;
        /**
         * An optional message to include with the challenge
         */
        challengeMessage: string;
        /**
         * The short code of the challenge
         */
        challengeShortCode: string;
        /**
         * The ammount of currency type 1 that the player is wagering on this challenge
         */
        currency1Wager: number;
        /**
         * The amount of currency type 2 that the player is wagering on this challenge
         */
        currency2Wager: number;
        /**
         * The amount of currency type 3 that the player is wagering on this challenge
         */
        currency3Wager: number;
        /**
         * The amount of currency type 4 that the player is wagering on this challenge
         */
        currency4Wager: number;
        /**
         * The amount of currency type 5 that the player is wagering on this challenge
         */
        currency5Wager: number;
        /**
         * The amount of currency type 6 that the player is wagering on this challenge
         */
        currency6Wager: number;
        /**
         * A JSON object containing the amounts of named currencies that the player is wagering on this challenge
         */
        currencyWagers: JSON;
        /**
         * Criteria for who can and cannot find and join this challenge (when the accessType is PUBLIC or FRIENDS).
         */
        eligibilityCriteria: JSON;
        /**
         * The time at which this challenge will end. This is required when the challenge is not linked to an achievement
         */
        endTime: date;
        /**
         * The latest time that players can join this challenge
         */
        expiryTime: date;
        /**
         * The maximum number of attempts
         */
        maxAttempts: number;
        /**
         * The maximum number of players that are allowed to join this challenge
         */
        maxPlayers: number;
        /**
         * The minimum number of players that are allowed to join this challenge
         */
        minPlayers: number;
        /**
         * If True  no messaging is triggered
         */
        silent: boolean;
        /**
         * The time at which this challenge will begin
         */
        startTime: date;
        /**
         * A player id or an array of player ids who will recieve this challenge
         */
        usersToChallenge: string[];
    }
}
