/**
 * Provides the details of a participant in a match
 * @example
 * var participant = Spark.getMultiplayer().loadMatch(matchId).getParticipants[0];
 */
interface SparkParticipant {
    /**
     * @validity All Scripts
     * @returns The SparkPlayer this participant represents
     * @example
     * var player = participant.getPlayer()
     */
    getPlayer(): SparkPlayer
    /**
     * @validity All Scripts
     * @returns The peerId of this participant
     * @example
     * var peerId = participant.getPeerId()
     */
    getPeerId(): number
    /**
     * @validity All Scripts
     * @returns An accessToken for this participant to connect to the realtime server
     * @example
     * var accessToken = participant.getAccessToken()
     */
    getAccessToken(): string
}
