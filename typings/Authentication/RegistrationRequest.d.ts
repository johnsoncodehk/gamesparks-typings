declare namespace SparkRequests {
    /**
     * Allows a new player to be created using a username, password display name.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * USERNAME | TAKEN | The userName supplied is already in use.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.RegistrationRequest();
     * request.displayName = ...;
     * request.password = ...;
     * request.segments = ...;
     * request.userName = ...;
     * var response = request.Send();
     * 
     * var authToken = response.authToken; 
     * var displayName = response.displayName; 
     * var newPlayer = response.newPlayer; 
     * var scriptData = response.scriptData; 
     * var switchSummary = response.switchSummary; 
     * var userId = response.userId; 
     * ```
     */
    class RegistrationRequest extends _Request<_RegistrationResponse> {
        /**
         * A display name to use
         * @Required Yes
         */
        displayName: string;
        /**
         * The previously registered password
         * @Required Yes
         */
        password: string;
        /**
         * An optional segment configuration for this request.
         * @Required No
         */
        segments: JSON;
        /**
         * The previously registered player name
         * @Required Yes
         */
        userName: string;
    }
    /**
     * A response to a registration request 
     */
    class _RegistrationResponse extends _Response {
        /**
         * 44b297a8-162a-4220-8c14-dad9a1946ad2
         */
        authToken: string;
        /**
         * The player’s display name
         */
        displayName: string;
        /**
         * Indicates whether the player was created as part of this request
         */
        newPlayer: boolean;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A summary of the player that would be switched to.  Only returned as part of an error response for a request where automatic switching is disabled.
         */
        switchSummary: Player;
        /**
         * The player’s id
         */
        userId: string;
    }
}
