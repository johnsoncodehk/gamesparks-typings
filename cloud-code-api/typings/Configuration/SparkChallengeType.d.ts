/**
 * Contains configuration information for the challenges
 * The methods in this class respect the segments of the current player when being executed
 */
interface SparkChallengeType {
    /**
     * Returns the Short Code of the challenge
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the Name of the challenge
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns the Description of the challenge
     * @validity All Scripts
     */
    getDescription(): string
    /**
     * Returns the true if the challenge is turn based, false otherwise
     * @validity All Scripts
     */
    isTurnBased(): boolean
    /**
     * Returns the Attempt Consumers of the challenge
     * @validity All Scripts
     */
    getAttemptConsumers(): string
    /**
     * Returns the true if the challenge is global, false otherwise
     * @validity All Scripts
     */
    isGlobal(): boolean
}
