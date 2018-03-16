declare namespace SparkRequests {
    /**
     * Issues a challenge to a group of players from the currently signed in player.
     * The endTime field must be present unless the challenge template has an achievement set in the ‘First to Achievement’ field.
     * The usersToChallenge field must be present for this request if the acessType is PRIVATE (which is the default).
     */
    class CreateChallengeRequest extends _Request<_CreateChallengeResponse> {
        /**
         * Who can join this challenge. Either PUBLIC, PRIVATE or FRIENDS
         * @Required No
         */
        accessType: string;
        /**
         * Whether this challenge should automatically start when a new player joins and maxPlayers is reached
         * @Required No
         */
        autoStartJoinedChallengeOnMaxPlayers: boolean;
        /**
         * An optional message to include with the challenge
         * @Required No
         */
        challengeMessage: string;
        /**
         * The short code of the challenge
         * @Required Yes
         */
        challengeShortCode: string;
        /**
         * The ammount of currency type 1 that the player is wagering on this challenge
         * @Required No
         */
        currency1Wager: number;
        /**
         * The amount of currency type 2 that the player is wagering on this challenge
         * @Required No
         */
        currency2Wager: number;
        /**
         * The amount of currency type 3 that the player is wagering on this challenge
         * @Required No
         */
        currency3Wager: number;
        /**
         * The amount of currency type 4 that the player is wagering on this challenge
         * @Required No
         */
        currency4Wager: number;
        /**
         * The amount of currency type 5 that the player is wagering on this challenge
         * @Required No
         */
        currency5Wager: number;
        /**
         * The amount of currency type 6 that the player is wagering on this challenge
         * @Required No
         */
        currency6Wager: number;
        /**
         * A JSON object containing the amounts of named currencies that the player is wagering on this challenge
         * @Required No
         */
        currencyWagers: JSON;
        /**
         * Criteria for who can and cannot find and join this challenge (when the accessType is PUBLIC or FRIENDS).
         * @Required No
         */
        eligibilityCriteria: JSON;
        /**
         * The time at which this challenge will end. This is required when the challenge is not linked to an achievement
         * @Required No
         */
        endTime: date;
        /**
         * The latest time that players can join this challenge
         * @Required No
         */
        expiryTime: date;
        /**
         * The maximum number of attempts
         * @Required No
         */
        maxAttempts: number;
        /**
         * The maximum number of players that are allowed to join this challenge
         * @Required No
         */
        maxPlayers: number;
        /**
         * The minimum number of players that are allowed to join this challenge
         * @Required No
         */
        minPlayers: number;
        /**
         * If True  no messaging is triggered
         * @Required No
         */
        silent: boolean;
        /**
         * The time at which this challenge will begin
         * @Required No
         */
        startTime: date;
        /**
         * A player id or an array of player ids who will recieve this challenge
         * @Required No
         */
        usersToChallenge: string[];
    }
    /**
     * A response to a create challenge response
     */
    class _CreateChallengeResponse extends _Response {
        /**
         * The challenge instance id
         */
        challengeInstanceId: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
