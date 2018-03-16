declare namespace SparkRequests {
    /**
     * Provides authentication using a username/password combination.
     * The username will have been previously created using a RegistrationRequest.
     */
    class AuthenticationRequest extends _Request<_AuthenticationResponse> {
        /**
         * The previously registered password
         * @Required Yes
         */
        password: string;
        /**
         * The previously registered player name
         * @Required Yes
         */
        userName: string;
    }
    /**
     * A response containing the auth token
     */
    class _AuthenticationResponse extends _Response {
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
