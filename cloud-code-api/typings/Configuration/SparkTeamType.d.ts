/**
 * Contains configuration information for the teams
 * The methods in this class respect the segments of the current player when being executed
 */
interface SparkTeamType {
    /**
     * Returns the shortCode of the team
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the name of the team
     * @validity All Scripts
     */
    getName(): string
    /**
     * Returns true if team is social
     * @validity All Scripts
     */
    getSocial(): boolean
    /**
     * Returns true if team is extended social
     * @validity All Scripts
     */
    getExtendedSocial(): boolean
    /**
     * Returns the Max Members of the team
     * @validity All Scripts
     */
    getMaxMembers(): number
    /**
     * Returns the Max Membership of the team
     * @validity All Scripts
     */
    getMaxMembershipPerUser(): number
    /**
     * Returns the Max Ownership of the team
     * @validity All Scripts
     */
    getMaxOwnershipPerUser(): number
}
