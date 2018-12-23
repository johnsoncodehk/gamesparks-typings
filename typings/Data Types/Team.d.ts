declare namespace SparkRequests {
    /**
     * A nested object that represents the team. This object does not contain a list of the members.
     */
    class Team {
        /**
         * A summary of the owner
         */
        owner: Player;
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
