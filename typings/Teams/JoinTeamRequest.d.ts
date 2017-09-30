declare namespace SparkRequests {
    /**
     * Allows a player to join a team or a team to be retrieved.
     */
    class JoinTeamRequest extends _Request<_JoinTeamResponse> {
        /**
         * The team owner to find, used in combination with teamType. If not supplied the current players id will be used
         */
        ownerId: string;
        /**
         * The teamId to find (may be null if teamType supplied)
         */
        teamId: string;
        /**
         * The teamType to find, used in combination with the current player, or the player defined by ownerId
         */
        teamType: string;
    }
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
