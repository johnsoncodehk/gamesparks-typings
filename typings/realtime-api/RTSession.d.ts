/**
 * The main entry point into the GameSparksRT API
 */
interface RTSession {
    /**
     * Clears an interval using the id returned from a previous setInterval call
     */
    clearInterval(intervalId: Number): void
    /**
     * Clears a timeout using the id returned from a previous setTimeout call
     */
    clearTimeout(timeoutId: Number): void
    /**
     * Gets the logger object. Log records are written to the GameSparks collection " realtime.log"
     */
    getLogger(): RTLogger
    /**
     * Creates a new builder object to construct RTData objects
     */
    newData(): RTDataBuilder
    /**
     * Creates a new builder object to construct RTPacket objects
     */
    newPacket(): RTPacketBuilder
    /**
     * A builder object for creating and sending requests to the GameSparks platform
     */
    newRequest(): RTRequestBuilder
    /**
     * Register a callback to be invoked when a packet with the given opCode is recieved. If this function does not return the supplied packet, the packet will not be sent to any players
     */
    onPacket(opCode: number, paramName: (packet: RTPacket) => void): void
    /**
     * Register a callback to be invoked when a player connects to the session
     */
    onPlayerConnect(paramName: (player: RTPlayer) => void): void
    /**
     * Register a callback to be invoked when a player disconnects from the session
     */
    onPlayerDisconnect(paramName: (player: RTPlayer) => void): void
    /**
     * Register a callback to be invoked when the session is shutdown.
     * This is 60 seconds after the last player disconnects.
     */
    onSessionShutdown(paramName: () => void): void
    /**
     * Gets a player by peerId
     */
    getPlayer(peerId: number): RTPlayer
    getPlayers(): RTPlayer[]
    /**
     * Gets the current sessionId
     */
    getSessionId(): string
    /**
     * The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
     * The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed
     * The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
     */
    setInterval(paramName: () => void, ms: number): Number
    /**
     * Calls a function or evaluates an expression after a specified number of milliseconds.
     */
    setTimeout(paramName: () => void, ms: number): Number
}
