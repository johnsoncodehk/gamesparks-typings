/**
 * A builder object to construct RTPacket objects
 */
interface RTPacketBuilder {
    /**
     * Sends this packet to the current session with the given parameters
     */
    send(): void
    /**
     * Sets the RTData of the packet
     */
    setData(rtData: RTDataBuilder): RTPacketBuilder
    /**
     * Sets the opCode of the sent packet. Server sent packets will be send with opCode 0 if this is not set
     */
    setOpCode(opCode: number): RTPacketBuilder
    /**
     * Sets the packet to be sent as reliable. By default, server sent packets are sent as unreliable
     */
    setReliable(reliable: boolean): RTPacketBuilder
    /**
     * Sets the peerId of the sent packet. Server sent packets will be send with peerId 0 if this is not set
     */
    setSender(peerId: number): RTPacketBuilder
    /**
     * Sets the peer id's to send the packet to
     */
    setTargetPeers(peerIds: Integer[]): RTPacketBuilder
}
