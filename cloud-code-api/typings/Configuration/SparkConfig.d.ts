/**
 * Contains configuration information for the game
 */
interface SparkConfig {
    /**
     * Returns the stage (preview or live) the game is running on
     * @validity All Scripts
     */
    getStage(): string
    /**
     * Returns the apiKey of the game
     * @validity All Scripts
     */
    getApiKey(): string
    /**
     * Returns a list of the Virtual Goods configured against the game
     * @validity All Scripts
     */
    getVirtualGoods(): any
    /**
     * Returns the virtual good with the supplied short code
     * @validity All Scripts
     */
    getVirtualGood(shortCode: string): SparkVirtualGood
    /**
     * Returns a list of the Achievements configured against the game
     * @validity All Scripts
     */
    getAchievements(): any
    /**
     * Returns the achievement with the supplied short code
     * @validity All Scripts
     */
    getAchievement(shortCode: string): SparkAchievement
    /**
     * Returns a list of the Segments configured against the game
     * @validity All Scripts
     */
    getSegments(): any
    /**
     * Returns the segment with the supplied short code
     * @validity All Scripts
     */
    getSegment(shortCode: string): SparkSegmentType
    /**
     * Returns a list of the Teams configured against the game
     * @validity All Scripts
     */
    getTeams(): any
    /**
     * Returns the team with the supplied short code
     * @validity All Scripts
     */
    getTeam(shortCode: string): SparkTeamType
    /**
     * Returns a list of the Challenges configured against the game
     * @validity All Scripts
     */
    getChallenges(): any
    /**
     * Returns the challenge with the supplied short code
     * @validity All Scripts
     */
    getChallenge(shortCode: string): SparkChallengeType
    /**
     * Returns the downloadable with the supplied short code
     * @validity All Scripts
     */
    getDownloadable(shortCode: string): SparkDownloadable
    /**
     * Returns a list of all the downloadables configured for this game
     * @validity All Scripts
     */
    getDownloadables(): SparkDownloadable[]
    /**
     * Returns a list of the match configurations for the game
     * @validity All Scripts
     */
    getMatchConfigs(): any
    /**
     * Returns the match configuration with the supplied short code
     * @validity All Scripts
     */
    getMatchConfig(shortCode: string): SparkMatchConfig
    /**
     * Returns a list of the custom currency configurations for the game
     * @validity All Scripts
     */
    getCurrencies(): any
    /**
     * Returns the custom currency configuration with the supplied short code
     * @validity All Scripts
     */
    getCurrency(shortCode: string): SparkCurrency
}
