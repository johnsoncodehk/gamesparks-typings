/**
 * Provides access to a player details
 * @example
 * var player = Spark.getPlayer();
 * or
 * var player = Spark.loadPlayer(myplayerid);
 */
interface SparkPlayer {
    /**
     * Returns a map of the player's balance for each currency type.
     * @example
     * var allBalances = Spark.getPlayer().getAllCurrencies();
     */
    getAllBalances(): any
    /**
     * Gets the display name of the player.
     * This may be null for a player who has only used device authentication. Other authentication mechanisms will return a value.
     * @example
     * var displayName = Spark.getPlayer().getDisplayName();
     */
    getDisplayName(): string
    /**
     * Gets the username name of the player.
     * For a player who has only used device authentication this value will be generated from the device id.
     * @example
     * var userName = Spark.getPlayer().getUserName();
     */
    getUserName(): string
    /**
     * Gets the GameSparks ID of the player
     * @example
     * var playerId = Spark.getPlayer().getPlayerId();
     */
    getPlayerId(): string
    /**
     * Saves the players data to the DB. By default, changes are persisted after the script executes. This method ensures changes are saved immediately so other scripts running in parallel see the changes immediately.
     * @example
     * Spark.getPlayer().persist();
     */
    persist(): void
    /**
     * Credits the currency1 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit1(20);
     */
    credit1(quantity: number): void
    /**
     * Credits the currency1 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit1(20, "Loyalty Bonus");
     */
    credit1(quantity: number, reason: string): void
    /**
     * Debits the currency1 balance of the player with the amount specified.
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @returns  true if the debit was successful, false if the current balance was not sufficient
     * @example
     * Spark.getPlayer().debit1(5, "Loser Penalty");
     */
    debit1(quantity: number, reason: string): boolean
    /**
     * Debits the currency1 balance of the player with the amount specified.
     * @param quantity the amount to debit
     * @returns  true if the debit was successful, false if the current balance was not sufficient
     * @example
     * Spark.getPlayer().debit1(5);
     */
    debit1(quantity: number): boolean
    /**
     * Credits the currency2 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit2(20, "Loyalty Bonus");
     */
    credit2(quantity: number, reason: string): void
    /**
     * Credits the currency2 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit2(20);
     */
    credit2(quantity: number): void
    /**
     * Debits the currency2 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @example
     * Spark.getPlayer().debit2(5, "Loser Penalty");
     */
    debit2(quantity: number, reason: string): boolean
    /**
     * Debits the currency2 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @example
     * Spark.getPlayer().debit2(5);
     */
    debit2(quantity: number): boolean
    /**
     * Credits the currency3 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit3(20, "Loyalty Bonus");
     */
    credit3(quantity: number, reason: string): void
    /**
     * Credits the currency3 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit3(20);
     */
    credit3(quantity: number): void
    /**
     * Debits the currency3 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @example
     * Spark.getPlayer().debit3(5);
     */
    debit3(quantity: number): boolean
    /**
     * Debits the currency3 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @example
     * Spark.getPlayer().debit3(5, "Loser Penalty");
     */
    debit3(quantity: number, reason: string): boolean
    /**
     * Credits the currency4 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit4(20);
     */
    credit4(quantity: number): void
    /**
     * Credits the currency4 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit4(20, "Loyalty Bonus");
     */
    credit4(quantity: number, reason: string): void
    /**
     * Debits the currency4 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @example
     * Spark.getPlayer().debit4(5, "Loser Penalty");
     */
    debit4(quantity: number, reason: string): boolean
    /**
     * Debits the currency4 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @example
     * Spark.getPlayer().debit4(5);
     */
    debit4(quantity: number): boolean
    /**
     * Credits the currency5 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit5(20);
     */
    credit5(quantity: number): void
    /**
     * Credits the currency5 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit5(20, "Loyalty Bonus");
     */
    credit5(quantity: number, reason: string): void
    /**
     * Debits the currency5 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @example
     * Spark.getPlayer().debit5(5, "Loser Penalty");
     */
    debit5(quantity: number, reason: string): boolean
    /**
     * Debits the currency5 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @example
     * Spark.getPlayer().debit5(5);
     */
    debit5(quantity: number): boolean
    /**
     * Credits the currency6 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit6(20, "Loyalty Bonus");
     */
    credit6(quantity: number, reason: string): void
    /**
     * Credits the currency6 balance of the player with the amount specified.
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit6(20);
     */
    credit6(quantity: number): void
    /**
     * Debits the currency6 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @example
     * Spark.getPlayer().debit6(5, "Loser Penalty");
     */
    debit6(quantity: number, reason: string): boolean
    /**
     * Debits the currency6 balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param quantity the amount to debit
     * @example
     * Spark.getPlayer().debit6(5);
     */
    debit6(quantity: number): boolean
    /**
     * Gets the currency1 balance of the player.
     * @example
     * var bal = Spark.getPlayer().getBalance1();
     */
    getBalance1(): number
    /**
     * Debits the named currency balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param shortCode the shortCode of the named currency to debit
     * @param quantity the amount to debit
     * @param reason the reason for the debit
     * @example
     * Spark.getPlayer().debit("GOLD", 5, "Loser Penalty");
     */
    debit(shortCode: string, quantity: number, reason: string): boolean
    /**
     * Debits the named currency balance of the player with the amount specified.
     * Returns true if the debit was successful, false if the current balance was not sufficient.
     * @param shortCode the shortCode of the named currency to debit
     * @param quantity the amount to debit
     * @example
     * Spark.getPlayer().debit("GOLD", 5);
     */
    debit(shortCode: string, quantity: number): boolean
    /**
     * Gets the currency2 balance of the player.
     * @example
     * var bal = Spark.getPlayer().getBalance2();
     */
    getBalance2(): number
    /**
     * Credits the named currency balance of the player with the amount specified.
     * @param shortCode the short code of the named currency to credit
     * @param quantity the amount to credit
     * @example
     * Spark.getPlayer().credit("GOLD", 20);
     */
    credit(shortCode: string, quantity: number): void
    /**
     * Gets the currency3 balance of the player.
     * @example
     * var bal = Spark.getPlayer().getBalance3();
     */
    getBalance3(): number
    /**
     * Credits the named currency balance of the player with the amount specified.
     * @param shortCode the short code of the named currency to credit
     * @param quantity the amount to credit
     * @param reason the reason for the credit
     * @example
     * Spark.getPlayer().credit("GOLD", 20, "Loyalty Bonus");
     */
    credit(shortCode: string, quantity: number, reason: string): void
    /**
     * Gets the currency4 balance of the player.
     * @example
     * var bal = Spark.getPlayer().getBalance4();
     */
    getBalance4(): number
    /**
     * Gets the currency5 balance of the player.
     * @example
     * var bal = Spark.getPlayer().getBalance5();
     */
    getBalance5(): number
    /**
     * Gets the currency6 balance of the player.
     * @example
     * var bal = Spark.getPlayer().getBalance6();
     */
    getBalance6(): number
    /**
     * Gets the player's balance for the specified currency.
     * @param shortCode The short code of the named currency to get the player's balance for.
     * @example
     * var bal = Spark.getPlayer().getBalance("GOLD");
     */
    getBalance(shortCode: string): number
    /**
     * Finds a virtual good by short code and adds the quantity specified to the player this SparkPlayer object represents.
     * Returns true if the add was successful. false if the shortcode does not exist, or the user already has the maximum amount of the specified good.
     * @param shortCode the virtual good's short code
     * @param quantity the amount to add
     * @example
     * var goodsAdded = Spark.getPlayer().addVGood(vgShortCode, 42);
     */
    addVGood(shortCode: string, quantity: number): boolean
    /**
     * Finds a virtual good by short code and adds the quantity specified to the player this SparkPlayer object represents.
     * Returns true if the add was successful. false if the shortcode does not exist, or the user already has the maximum amount of the specified good.
     * @param shortCode the virtual good's short code
     * @param quantity the amount to add
     * @param reason the reason for adding the virtual good
     * @example
     * var goodsAdded = Spark.getPlayer().addVGood(vgShortCode, 42, "Loyalty bonus");
     */
    addVGood(shortCode: string, quantity: number, reason: string): boolean
    /**
     * Removes a quantity of virtual goods from the player.
     * Returns true if the player had enough of the virtual good specified by short code. If the method returns false, no modification is made.
     * @param shortCode the virtual good's short code
     * @param quantity the amount to consume
     * @param reason the reason for using the virtual good
     * @example
     * var goodsUsed = Spark.getPlayer().useVGood(vgShortCode, 34, "Loser penalty");
     */
    useVGood(shortCode: string, quantity: number, reason: string): boolean
    /**
     * Removes a quantity of virtual goods from the player.
     * Returns true if the player had enough of the virtual good specified by short code. If the method returns false, no modification is made.
     * @param shortCode the virtual good's short code
     * @param quantity the amount to consume
     * @example
     * var goodsUsed = Spark.getPlayer().useVGood(vgShortCode, 34);
     */
    useVGood(shortCode: string, quantity: number): boolean
    /**
     * Determines whether the player has a particular virtual good.
     * Returns the quantity of the virtual good the player has.
     * @param shortCode the virtual good's short code
     * @example
     * var hasGood = Spark.getPlayer().hasVGood(vgShortCode);
     */
    hasVGood(shortCode: string): number
    /**
     * Adds an achievement to the player this SparkPlayer object represents.
     * The player will be given any award that is configured against the award in the developer portal.
     * Returns true if the achievement was added. false if the player already had the achievement, or the shortCode does not exist
     * @param shortCode The shortCode of the achievement
     * @example
     * var achievementAdded = Spark.getPlayer().addAchievement(shortCode);
     */
    addAchievement(shortCode: string): boolean
    /**
     * Removes an achievement from the player.
     * Returns true if the achievement was removed. false if player did not have the achievement.
     * Returns false if the player did not have the achievement.
     * @example
     * var achievementRemoved = Spark.getPlayer().removeAchievement(shortCode);
     */
    removeAchievement(shortCode: string): boolean
    /**
     * Determines whether the player has a particular achievement.
     * Returns true if the player has the achievement
     * @param shortCode The shortCode of the achievement
     * @example
     * var hasAchievement = Spark.getPlayer().hasAchievement(shortCode);
     */
    hasAchievement(shortCode: string): boolean
    /**
     * Allows a script to dismiss a given message that belongs to a player.
     * Returns true if a message was dismissed.
     * @example
     * var messageDismissed = Spark.getPlayer().dismissMessage(messageId);
     */
    dismissMessage(messageId: string): boolean
    /**
     * Returns a map of external system ids to external ids.
     * This allows you to determine, for example, the player facebook id.
     * @param Map keys: 'FB' Indicates the ID is a facebook id
     * @example
     * var externalIds = Spark.getPlayer().getExternalIds();
     */
    getExternalIds(): any
    /**
     * Returns an array of the player's social friend ids.
     * @example
     * var friends = Spark.getPlayer().getFriendIds();
     */
    getFriendIds(): any
    /**
     * Returns true if this player is currently has an open WebSocket.
     * @example
     * var online = Spark.getPlayer().isOnline();
     */
    isOnline(): boolean
    /**
     * Validates the given password against the one stored for this player.
     * @param password the password to validate
     * @returns true if the given password matches the one stored for this player.
     * @example
     * var doesPasswordMatch = Spark.getPlayer().validatePassword(passwordEnteredByPlayer);
     */
    validatePassword(password: string): boolean
    /**
     * Sets a new password for this player.
     * @param password the password to set
     * @example
     * Spark.getPlayer().setPassword(password);
     */
    setPassword(password: string): void
    /**
     * Boolean value indicating if this player is currently being hidden from leaderboards.
     * @example
     * var hidden = Spark.getPlayer().isHidden();
     */
    isHiddenOnLeaderboards(): boolean
    /**
     * Hide the player from current leaderboards.  Prevents any new scores posted showing up as well.
     * @example
     * Spark.getPlayer().hideOnLeaderboards();
     */
    hideOnLeaderboards(): void
    /**
     * Show the player on current leaderboards, redisplaying any existing scores.  New scores will begin to show up on leaderboards again as they are recorded.
     * @example
     * Spark.getPlayer().showOnLeaderboards();
     */
    showOnLeaderboards(): void
    /**
     * Gets push registrations of the player
     * @example
     * var pushRegistrations = Spark.getPlayer().getPushRegistrations();
     */
    getPushRegistrations(): SparkPushRegistration[]
    /**
     * Removes the registration with the given id.  The device associated with this registration will no longer receive push notifications for this player.
     * @example
     * Spark.getPlayer().removePushRegistration(registrationId);
     */
    removePushRegistration(id: string): void
    /**
     * Sets a value for a single segment against the player.
     * @example
     * Spark.getPlayer().setSegmentValue("PROFILE", "P1");
     */
    setSegmentValue(segmentType: string, segmentValue: string): void
    /**
     * Gets a value for a single segment from the player.
     * @example
     * var profileSegmentValue = Spark.getPlayer().getSegmentValue("PROFILE");
     */
    getSegmentValue(segmentType: string): string
    /**
     * Gets all segment values from the player.
     * @example
     * var segments = Spark.getPlayer().getSegments();
     */
    getSegments(): any
    /**
     * Disconnects this player, a SessionTerminatedMessage will be sent to the socket, and the socket will be unauthenticated
     * @param excludeCurrent If the script is running in the context of the user being disconnected, the current socket will not be disconnected
     * @example
     * Spark.getPlayer().disconnect(true);
     */
    disconnect(excludeCurrent: boolean): void
    /**
     * Gets all achievements from this player
     * @example
     * Spark.getPlayer().getAchievements();
     */
    getAchievements(): string[]
    /**
     * Gets all virtual goods from the player.
     * @example
     * var goods = Spark.getPlayer().getVirtualGoods();
     */
    getVirtualGoods(): any
    /**
     * Removes all auth tokens for this user, this will force a re-authentication.
     * @example
     * Spark.getPlayer().resetAuthTokens();
     */
    resetAuthTokens(): void
    /**
     * Removes auth tokens for this user, this will force a re-authentication.
     * @param excludeCurrent If the script is running in the context of the user having tokens reset, the current token will not be reset
     * @example
     * Spark.getPlayer().resetAuthTokens(true);
     */
    resetAuthTokens(excludeCurrent: boolean): void
    /**
     * Gets the lastSeen value for the player.
     * @example
     * var lastSeen = Spark.getPlayer().getLastSeen();
     */
    getLastSeen(): date
    /**
     * Unlocks the account for this player if it has been locked by too many failed login attempts.
     * @example
     * Spark.getPlayer().unlock();
     */
    unlock(): void
    /**
     * Gets the creation date of the player.
     * @example
     * var creationDate = Spark.getPlayer().getCreationDate();
     */
    getCreationDate(): date
    /**
     * Checks if this player would be returned by the given mongo query.
     * @example
     * var isMatch = Spark.getPlayer().matchesMongoQuery({});
     */
    matchesMongoQuery(mongoQuery: ScriptableObject): boolean
    /**
     * Checks if this player would be returned by the given mongo query (as a string).
     * @example
     * var isMatch = Spark.getPlayer().matchesMongoQueryString("");
     */
    matchesMongoQueryString(mongoQueryString: string): boolean
    /**
     * Returns the current experiment segments of the player.
     * @example
     * var experiments = Spark.getPlayer().getExperimentSegments();
     */
    getExperimentSegments(): SparkPlayerExperimentSegment[]
    /**
     * Removes the player from the given experiment.
     * @returns  true if the player was part of the experiment, false if the player was not part of the experiment
     * @example
     * var removed = Spark.getPlayer().removeExperiment();
     */
    removeExperiment(experimentId: number): boolean
    /**
     * Sets the experiment segment for the player.
     * @returns  true if the experiment segment was added to the player, false if the player already had the experiment segment
     * @example
     * var added = Spark.getPlayer().setExperimentSegment(47, "FireSale");
     */
    setExperimentSegment(experimentId: number, experimentSegmentName: string): boolean
    /**
     * Deletes this player and associated data from system collections.
     * Note that any data linked to the player in runtime collections is not deleted, since the GameSparks platform has no way of identifying this data automatically.
     * This deletion is irreversible and should be used with extreme caution.
     * @example
     * var userName = Spark.loadPlayer("57f4af757d196627bc79abc9").deletePlayer();
     */
    deletePlayer(): void
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
