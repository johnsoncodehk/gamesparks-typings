/**
 * An object representing a player
 */
interface RTPlayer {
    /**
     * Gets the realtime peerId of this player
     */
    getPeerId(): number
    /**
     * Gets the GameSparks playerId of this player
     */
    getPlayerId(): string
}
