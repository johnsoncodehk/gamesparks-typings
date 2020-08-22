/**
 * Contains configuration information for the match
 */
interface SparkMatchConfig {
    /**
     * Returns the shortCode of the match
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the name of the match
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the description of the match
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the minimum number of players in the match
     * @validity All Scripts
     */
    getMinPlayers(): number
    /**
     * Returns the minimum number of players in the match
     * @validity All Scripts
     */
    getMaxPlayers(): number
    /**
     * Returns the minimum number of players in the match
     * @validity All Scripts
     */
    getRealtime(): boolean
    /**
     * Returns the Realtime script
     * @validity All Scripts
     */
    getRealtimeScript(): string
    /**
     * Returns true if the match is Drop In/Drop Out
     * @validity All Scripts
     */
    getDropInDropOut(): boolean
    /**
     * Returns the number of seconds before Drop In/Drop Out expires
     * @validity All Scripts
     */
    getDropInDropOutExpire(): number
    /**
     * Returns true if the match is a manual match
     * @validity All Scripts
     */
    getManuallyMatch(): boolean
    /**
     * Returns the number of seconds before players are disconnected for Drop In/Drop Out matches
     * @validity All Scripts
     */
    getPlayerDisconnectThreshold(): number
    /**
     * Returns a list of thresholds in the match
     * @validity All Scripts
     */
    getThresholds(): List
    /**
     * Creates a new pending match containing the given players.
     * Any existing pending matches for these players with the same matchGroup will be canceled.
     * @validity All Scripts
     */
    createPendingMatch(matchGroup: string, skill: number, players: SparkPlayer[]): PendingMatch
    /**
     * Creates a new pending match containing the given players.
     * Any existing pending matches for these players with the same matchGroup will be canceled.
     * @validity All Scripts
     */
    createPendingMatchWithCustomQuery(matchGroup: string, skill: number, customQuery: any, matchData: any, players: SparkPlayer[]): PendingMatch
}
