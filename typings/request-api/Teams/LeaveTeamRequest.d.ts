declare namespace SparkRequests {
    /**
     * Allows a player to leave a team.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * teamId&#124;teamType | REQUIRED | Both teamId and teamType have not been provided
     * team | INVALID | The teamId or the teamType do not match an existing team
     * team | CANNOT_LEAVE_OR_JOIN_OWNED_MANDATORY_TEAM | The current player is trying to leave a mandatory team they own.
     * team | NOT_MEMBER | The current player is not a mamber of the team they are requesting to leave
     * teamType&&ownerId | NOT_UNIQUE | The ownerId / teamType combination has multiple teams related to it
     * 
     * @example
     * var request = new SparkRequests.LeaveTeamRequest();
     * request.ownerId = ...;
     * request.teamId = ...;
     * request.teamType = ...;
     * var response = request.Send();
     * 
     * var members = response.members; 
     * var owner = response.owner; 
     * var scriptData = response.scriptData; 
     * var teamId = response.teamId; 
     * var teamName = response.teamName; 
     * var teamType = response.teamType; 
     */
    class LeaveTeamRequest extends _Request<_LeaveTeamResponse> {
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
     * A response to a player leaving a team
     */
    class _LeaveTeamResponse extends _Response {
        /**
         * The team members
         */
        members: Player[];
        /**
         * A summary of the owner
         */
        owner: Player;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The Id of the team
         */
        teamId: string;
        /**
         * The team name
         */
        teamName: string;
        /**
         * The team type
         */
        teamType: string;
    }
}
