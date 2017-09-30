declare namespace SparkRequests {
    /**
     * Allows a new team to be created.
     */
    class CreateTeamRequest extends _Request<_CreateTeamResponse> {
        /**
         * An optional teamId to use
         */
        teamId: string;
        /**
         * A display name to use
         */
        teamName: string;
        /**
         * The type of team to be created
         */
        teamType: string;
    }
    class _CreateTeamResponse extends _Response {
        /**
         * An optional teamId to use
         */
        teamId: string;
        /**
         * A display name to use
         */
        teamName: string;
        /**
         * The type of team to be created
         */
        teamType: string;
    }
}
