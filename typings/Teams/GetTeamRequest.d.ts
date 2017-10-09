declare namespace SparkRequests {
    /**
     * Allows the details of a team to be retrieved.
     */
    class GetTeamRequest extends _Request<_GetTeamResponse> {
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
    class _GetTeamResponse extends _Response {
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
        /**
         * A JSON array of teams.
         */
        teams: Team[];
    }
}
