/**
 * A message from a group chat
 */
interface ChatMessage {
    /**
     * The id of the player who sent this message
     */
    getFromId(): string
    /**
     * The id of this chat message
     */
    getId(): string
    /**
     * The text sent in this message
     */
    getMessage(): string
    /**
     * A date representing the time this message was sent
     */
    getWhen(): date
    /**
     * The displayName of the player who sent this message
     */
    getWho(): string
}
