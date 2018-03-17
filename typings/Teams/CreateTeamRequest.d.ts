declare namespace SparkRequests {
    /**
     * Allows a new team to be created.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * teamType | INVALID | The team type short code supplied does not exist
     * teamType | MAX_OWNED_REACHED | The current player has reached the ownership limit of the supplied teamType
     * teamType | MAX_TEAMS_REACHED | The current player has reached the membership limit of the supplied teamType
     * teamId | NOT_UNIQUE | The teamId supplied already exists
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.DropTeamRequest();
     * request.ownerId = ...;
     * request.teamId = ...;
     * request.teamType = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * ```
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
    /**
     * A response containing the details of the team that was created
     */
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
