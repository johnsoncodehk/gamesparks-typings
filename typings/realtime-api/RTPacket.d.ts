/**
 * An object representing a packet sent by a client
 */
interface RTPacket {
    /**
     * Gets the RTData sent with the packet (if available)
     */
    getData(): RTData
    /**
     * Gets the player who sent the packet
     */
    getSender(): RTPlayer
    /**
     * Gets the list of peerIds that this packet is being sent to. If this is empty the packet is targetting everyone except the sender 
     */
    getTargetPlayers(): number[]
}
