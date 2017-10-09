declare namespace SparkRequests {
    /**
     * Allows a new team to be created.
     */
    class CreateTeamRequest extends _Request<_CreateTeamResponse> {
        /**
         * An optional teamId to use
         * @Required No
         */
        teamId: string;
        /**
         * A display name to use
         * @Required Yes
         */
        teamName: string;
        /**
         * The type of team to be created
         * @Required Yes
         */
        teamType: string;
    }
    class _CreateTeamResponse extends _Response {
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
