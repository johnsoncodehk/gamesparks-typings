/**
 * Provides the details of the realtime server on which a match will be played out
 * @example
 * var server = Spark.getMultiplayer().loadMatch(matchId).getServer();
 */
interface SparkRealtimeServer {
    /**
     * @validity All Scripts
     * @returns The hostname of the server
     * @example
     * var host = server.getHost()
     */
    getHost(): string
    /**
     * @validity All Scripts
     * @returns The port to connect to on the server
     * @example
     * var port = server.getPort()
     */
    getPort(): number
}
