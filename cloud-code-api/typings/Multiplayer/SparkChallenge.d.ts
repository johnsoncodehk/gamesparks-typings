/**
 * Provides access to a challenge's details.
 * @example
 * var challenge = Spark.getChallenge(mychallengeid);
 */
interface SparkChallenge {
    /**
     * The run state of the object. Valid states are:
     * @param ACCEPTED All players have accepted the challenge
     * @param WAITING The challenge is in it's waiting state, between expiryDate and startDate
     * @param RUNNING The challenge is running
     * @param COMPLETE The challenge is complete
     * @param DECLINED All players have declined the challenge
     * @param EXPIRED The expiry time for the challenge has passed before all players have accepted
     * @param ISSUED The challenge has been issued but is waiting for other to accept before play can begin
     * @param WITHDRAWN The challenger has withdrawn the challenge
     * @param LAPSED The end time of this challenge has passed before the challenge was started
     * @example
     * var runState = Spark.getChallenge(mychallengeid).getRunState();
     */
    getRunState(): string
    /**
     * Gets the ID of this challenge.
     * @example
     * var id = Spark.getChallenge(mychallengeid).getId();
     */
    getId(): string
    /**
     * Returns the shortCode of the challenge
     * Can be useful when block or code should only run for a particular challenge type.
     * @example
     * var shortCode = Spark.getChallenge(mychallengeid).getShortCode();
     */
    getShortCode(): string
    /**
     * Complete the challenge and uses the provided SparkPlayer as the winner.
     * If the supplied SparkPlayer is not part of the challenge this call will be ignored (silently)
     * @param winner the SparkPlayer to set as the winner
     * @example
     * Spark.getChallenge(mychallengeid).winChallenge(aPlayer);
     */
    winChallenge(winner: SparkPlayer): void
    /**
     * Complete the challenge with no winner.
     * @example
     * Spark.getChallenge(mychallengeid).drawChallenge();
     */
    drawChallenge(): void
    /**
     * Starts the challenge in the current state. This method only checks that the state is ISSUED or WAITING and that there is at least 2 players in the challenge 
     * @example
     * Spark.getChallenge(mychallengeid).startChallenge();
     */
    startChallenge(): void
    /**
     * Returns a list of Players ID's that can be used to load the player details using Spark.getPlayer(String player)
     * @returns The array of player Ids this challenge was issued to
     * @example
     * var players = Spark.getChallenge(mychallengeid).getChallengedPlayerIds();
     */
    getChallengedPlayerIds(): string[]
    /**
     * Returns a list of Players ID's that can be used to load the player details using Spark.getPlayer(String player)
     * @returns The array of player Ids who have accepted this challenge
     * @example
     * var players = Spark.getChallenge(mychallengeid).getAcceptedPlayerIds();
     */
    getAcceptedPlayerIds(): string[]
    /**
     * Returns a list of Players ID's that can be used to load the player details using Spark.getPlayer(String player)
     * @returns The array of player Ids who have declined this challenge
     * @example
     * var players = Spark.getChallenge(mychallengeid).getDeclinedPlayerIds()
     */
    getDeclinedPlayerIds(): string[]
    /**
     * Gets the player id of whoever issued the challenge.
     * @example
     * var challengerId = Spark.getChallenge(mychallengeid).getChallengerId();
     */
    getChallengerId(): string
    /**
     * Gets the end date of the challenge.
     * @example
     * var endDate = Spark.getChallenge(mychallengeid).getEndDate();
     */
    getEndDate(): date
    /**
     * Gets the expiry date of the challenge.
     * @example
     * var expiryDate = Spark.getChallenge(mychallengeid).getExpiryDate();
     */
    getExpiryDate(): date
    /**
     * Gets the start date of the challenge.
     * @example
     * var startDate = Spark.getChallenge(mychallengeid).getStartDate();
     */
    getStartDate(): date
    /**
     * Takes a turn for a player in a turn based challenge, without sending a ChallengeTurnTaken message.
     * @param playerId the id of the player who has taken their turn
     * @example
     * var challenge = Spark.getChallenge(mychallengeid).consumeTurn(playerId);
     */
    consumeTurn(playerId: string): boolean
    /**
     * Takes a turn for a player in a turn based challenge, and sends a ChallengeTurnTaken message.
     * @param playerId the id of the player who has taken their turn
     * @example
     * var challenge = Spark.getChallenge(mychallengeid).takeTurn(playerId);
     */
    takeTurn(playerId: string): boolean
    /**
     * Removes a player from this challenge.
     * @param playerId the id of the player to remove
     * @example
     * var challenge = Spark.getChallenge(mychallengeid).removePlayer(playerId);
     */
    removePlayer(playerId: string): boolean
    /**
     * Gets the challenge name
     */
    getChallengeName(): string
    /**
     * Gets the value from a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.
     * @param name The name in the name value pair
     * @returns a JSON object
     * @example
     * var privateData = Spark.getChallenge().getPrivateData("name");
     */
    getPrivateData(name: string): any
    /**
     * Allows arbitrary data to be added to the object being acted upon.
     * Sets a value into a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.
     * The data is not visible to the client
     * @param name The name in the name value pair
     * @param value The value to set in the name value pair
     * @example
     * Spark.getChallenge().setPrivateData("name", "value");
     */
    setPrivateData(name: string, value: any): void
    /**
     * Removes a value from a name value pair structure that allows custom data to be attached to this. This data can either be complex JSON or simple values.
     * @param name The name in the name value pair
     * @example
     * Spark.getChallenge().removePrivateData("name");
     */
    removePrivateData(name: string): void
    /**
     * Gets the value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.
     * @param name The name in the name value pair
     * @returns a JSON object
     * @example
     * var value = Spark.getPlayer().getScriptData("name");
     */
    getScriptData(name: string): any
    /**
     * Allows arbitrary data to be added to the object being acted upon.
     * Sets a value into a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.
     * The data is visible to the client
     * This data is sent to the player(s) in the 'scriptData' attribute of the Request, Response or Message object.
     * When scriptData is set to a request, it gets set against the response that will be returned to the player. This allows basic communication between request and response scripts.
     * @param name The name in the name value pair
     * @param value The value to set in the name value pair
     * @example
     * Spark.getPlayer().setScriptData("name", "value");
     */
    setScriptData(name: string, value: any): void
    /**
     * Removes a value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.
     * @param name The name in the name value pair
     * @example
     * Spark.getPlayer().removeScriptData("name");
     */
    removeScriptData(name: string): void
}
