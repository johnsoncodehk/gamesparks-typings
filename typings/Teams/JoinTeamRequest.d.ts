declare namespace SparkRequests {
    /**
     * Allows a player to join a team or a team to be retrieved.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * teamId&#124;teamType | REQUIRED | Both teamId and teamType have not been provided
     * team | INVALID | The teamId or the teamType do not match an existing team
     * members | ALREADY_JOINED | The current player is already a mamber of the specified team
     * members | MAX_MEMBERS_REACHED | The team already has the maximum number of members in it
     * teamType | MAX_MEMBERSHIP_REACHED | The current player has already reached the membership limit of this team type
     * teamType | NOT_SINGULAR_USE_TEAMID | A player can own more than one of the specified teamType, therefore joining by ownerId and teamType is not sufficient to uniquely identify the team to join. Specify the team by teamId instead.
     * teamType | INVALID | The specified team type is invalid.
     * teamType&&ownerId | NOT_UNIQUE | The ownerId / teamType combination has multiple teams related to it
     */
    class JoinTeamRequest extends _Request<_JoinTeamResponse> {
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
     * A response to a player joining a team or a request for team data
     */
    class _JoinTeamResponse extends _Response {
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
