/**
 * An object that represents a player in a pending match.
 */
interface SparkMatchedPlayer {
    /**
     * The Location of the player
     */
    getLocation(): any
    /**
     * A JSON Map of any data that was associated to this user
     */
    getParticipantData(): any
    /**
     * The ID for player
     */
    getPlayerId(): string
    /**
     * The skill of the player in this match
     */
    getSkill(): number
}
