declare namespace SparkRequests {
    /**
     * Allows a player to drop a team.
     * 
     * Error Codes
     * ---
     * Key | Value | Description
     * --- | --- | ---
     * teamId|teamType | REQUIRED | Both teamId and teamType have not been provided
     * team | INVALID | The teamId or the teamType do not match an existing team
     * team | NOT_MEMBER | The current player is not a member of the team they are requesting to leave
     * team | NOT_ONWER | The user is not the owner of the team
     * teamType | CANNOT_DROP_MANDATORY_TEAM | The team has an ownership of 1 (Mandatory) so cannot be dropped
     * teamType&&ownerId | NOT_UNIQUE | The ownerId / teamType combination has multiple teams related to it
     */
    class DropTeamRequest extends _Request<_DropTeamResponse> {
        /**
         * The team owner to find, used in combination with teamType. If not supplied the current players id will be used
         * @Required No
         */
        ownerId: string;
        /**
         * The teamId to find (may be null if teamType supplied)
         * @Required No
         */
        teamId: string;
        /**
         * The teamType to find, used in combination with the current player, or the player defined by ownerId
         * @Required No
         */
        teamType: string;
    }
    /**
     * A response to a drop team request
     */
    class _DropTeamResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
