/**
 * Represents a single partition of a leaderboard.  A partition is also a SparkLeaderboard and can be used wherever a SparkLeaderboard is used.
 * @example
 * var partition = Spark.getLeaderboards().getLeaderboard(shortCode).getPartitions()[0];
 */
interface SparkLeaderboardPartition {
    /**
     * Returns the description of this leaderboard.
     * @example
     * var desc = Spark.getLeaderboards().getLeaderboard(shortCode).getDescription();
     */
    getDescription(): string
    /**
     * Returns the name of this leaderboard.
     * @example
     * var shortCode = Spark.getLeaderboards().getLeaderboard(shortCode).getName();
     */
    getName(): string
    /**
     * Returns the shortCode of this leaderboard.
     * @example
     * var shortCode = Spark.getLeaderboards().getLeaderboard(shortCode).getShortCode();
     */
    getShortCode(): string
    /**
     * Returns the total number of entries in this leaderboard.
     * @example
     * var count = Spark.getLeaderboards().getLeaderboard(shortCode).getEntryCount();
     */
    getEntryCount(): number
    /**
     * Returns the total number of entries in this leaderboard for the specified identifier.
     * The later can be the userId of a player or the id of a team.
     * @example
     * var count = Spark.getLeaderboards().getLeaderboard(shortCode).getEntryCountForIdentifier("myPlayerId");
     */
    getEntryCountForIdentifier(identifier: string): number
    /**
     * Returns a cursor over all the entries in this leaderboard.
     * @example
     * var cursor = Spark.getLeaderboards().getLeaderboard(shortCode).getEntries();
     */
    getEntries(): SparkLeaderboardCursor
    /**
     * Returns a cursor over count entries in this leaderboard, starting at offset.
     * @param count the number of entries over which to obtain a cursor.
     * @param offset the number of entries to skip before the start of the cursor.
     * @example
     * var cursor = Spark.getLeaderboards().getLeaderboard(shortCode).getEntries(mycount, myoffset);
     */
    getEntries(count: number, offset: number): SparkLeaderboardCursor
    /**
     * Returns true if this leaderboard has or can have partitions.
     * @example
     * var isPartitioned = Spark.getLeaderboards().getLeaderboard(shortCode).isPartitioned();
     */
    isPartitioned(): boolean
    /**
     * Returns true if this leaderboard is a single partition of a parent leaderboard.
     * @example
     * var isPartitioned = Spark.getLeaderboards().getLeaderboard(shortCode).isPartition();
     */
    isPartition(): boolean
    /**
     * Returns an array containing the partitions of this leaderboard if it is partitioned, otherwise an empty array is returned.
     * @example
     * var partitions = Spark.getLeaderboards().getLeaderboard(shortCode).getPartitions();
     */
    getPartitions(): SparkLeaderboardPartition[]
    /**
     * Deletes this leaderboard partition, removing it from the parent leaderboard and deleting the underling leaderboard data for this partition.
     * @example
     * Spark.getLeaderboards().getLeaderboard(shortCode).getPartitions()[0].drop();
     */
    drop(): void
    /**
     * See #drop.  Additionally deletes the underlying running total data, resetting any record of players' scores.
     * @example
     * leaderboard.drop(true);
     */
    drop(deleteRunningTotalData: boolean): void
    /**
     * Archives this leaderboard partition.  Players will no longer be able to post new scores to this leaderboard, but the leaderboard is still available to view.
     * If the leaderboard partition has already been archived calling this has no effect.
     * @example
     * Spark.getLeaderboards().getLeaderboard(shortCode).getPartitions()[0].archive();
     */
    archive(): void
    /**
     * Returns true if this partition has been archived.
     * @example
     * Spark.getLeaderboards().getLeaderboard(shortCode).getPartitions()[0].isArchived();
     */
    isArchived(): boolean
    /**
     * Returns the array of leaderboard entries that correspond to the supplied identifier and customIdFilter
     * If the customIdFilter is null, the method returns all the entries in the leaderboard for the suplied identifier
     * @example
     * leaderboard.getEntriesForIdentifier(myPlayerId, {});
     */
    getEntriesForIdentifier(identifier: string, customIdFilter: any): SparkLeaderboardEntry[]
    /**
     * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId
     * @example
     * leaderboard.getEntriesFromPlayer(myPlayerId, 50);
     */
    getEntriesFromPlayer(playerId: string, count: number): SparkLeaderboardCursor
    /**
     * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId and customIdFilter
     * If the customId filter is not an object with valid ID fields, it will return an empty cursor
     * @example
     * leaderboard.getEntriesFromPlayerForCustomId(myPlayerId, 50, {carType:"raceCar"});
     */
    getEntriesFromPlayerForCustomId(playerId: string, count: number, customIdFilter: any): SparkLeaderboardCursor
    /**
     * Returns the list of custom ID fields that are defined on the leaderboard
     * @example
     * leaderboard.getIdFields();
     */
    getIdFields(): string[]
    /**
     * Returns the list of fields that are defined on the leaderboard
     * @example
     * leaderboard.getScoreFields();
     */
    getScoreFields(): string[]
    /**
     * Deletes all entries from the leaderboard that correspond to this identifier. If your leaderboard has custom IDs set up, 
     * it will delete the entries for all the custom IDs
     * This method only works for realtime leaderboards
     * If deleteRunningTotals is true, all running total data for these entries will also be deleted
     * deleting running totals may affect other leaderbaords using the same running totals
     * @example
     * leaderboard.deleteEntry(myPlayerId, true);
     */
    deleteAllEntries(identifier: string, deleteRunningTotals: boolean): boolean
    /**
     * Deletes the entries from the leaderboard that match the specified customIdFilter.
     * This method only works for realtime leaderboards
     * If deleteRunningTotals is true, all running total data for this leaderboard will also be deleted
     * deleting running totals may affect other leaderbaords using the same running totals
     * @example
     * leaderboard.deleteEntriesForCustomId(myPlayerId, true, {"carType":"raceCar"});
     */
    deleteEntriesForCustomId(identifier: string, deleteRunningTotals: boolean, customIdFilter: any): boolean
    /**
     *  or leaderboard.deleteEntriesForCustomId(identifier, deleteRunningTotals, customIdFilter).
     * Deletes the entry from the leaderboard that correspond to this identifier.
     * This method is not supported for leaderboards with custom IDs and will throw an java.lang.UnsupportedOperationException
     * This method only works for realtime leaderboards
     * If deleteRunningTotals is true, all running total data for these entries will also be deleted
     * deleting running totals may affect other leaderbaords using the same running totals
     * @deprecated use leaderboard.deleteAllEntries(identifier, deleteRunningTotals)
     * @example
     * leaderboard.deleteEntry(myPlayerId, true);
     */
    deleteEntry(identifier: string, deleteRunningTotals: boolean): boolean
    /**
     * Returns the property set associated with this leaderboard
     * @validity All Scripts
     */
    getPropertySet(): any
    /**
     * Returns the rank a given score would be at on this Global leaderboard, without it actually being entered into the leaderboard.
     * Calling this on a Team or Social leaderboard will return null.
     * @example
     * var rank = leaderboard.getRankForScore({"score" : 123});
     */
    getRankForScore(score: any): number
    /**
     * Drops the current leaderboard and it rebuilds it from the running totals.
     * The current leaderboard may not have valid ranks for the duration of this process.
     * You can only rebuild realtime leaderboards. You cannot rebuild partitioned leaderboards, you can only rebuild the individual partitions.
     * If the flag awardAchievements is set to true, at the end of the rebuild process the appropriate achievements will be awarded
     * Please use with care, because during the rebuild process any new data coming from the players might temporarily have incorrect ranks
     * @example
     * leaderboard.rebuildLeaderboard(true);
     */
    rebuildLeaderboard(awardAchievements: boolean): void
}
