declare namespace SparkRequests {
    /**
     * Allows a Viber account to be used as an authentication mechanism.
     * Once authenticated the platform can determine the current players details from the Viber platform and store them within GameSparks.
     * A successful authentication will also register the player to receive Viber push notifications.
     * GameSparks will determine the player’s friends and whether any of them are currently registered with the game.
     * If the Viber user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Viber user is not already registered with the game, the Viber user will be linked to the current player.
     * If the current player has not authenticated and the Viber user is not known, a new player will be created using the Viber details and the session will be authenticated against the new player.
     * If the Viber user is already known, the session will switch to being the previously created user.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * viber | NOT_ENABLED | Viber integration is available by request only, this game does not have viber integration enabled
     * accessToken | NOTAUTHENTICATED | The system was unable to authenticate the token
     * accessToken | ACCOUNT_ALREADY_LINKED | The current user has a Viber profile and it’s not the profile they have just tried to log in with
     * accessToken | REQUIRED | Parameter accessToken is required but was not provided
     * authentication | COPPA restricted | Social authentications are not allowed on COPPA compliant credentials due to social accounts containing personally identifiable information
     * 
     * @example
     * var request = new SparkRequests.ViberConnectRequest();
     * request.accessToken = ...;
     * request.doNotCreateNewPlayer = ...;
     * request.doNotLinkToCurrentPlayer = ...;
     * request.doNotRegisterForPush = ...;
     * request.errorOnSwitch = ...;
     * request.segments = ...;
     * request.switchIfPossible = ...;
     * request.syncDisplayName = ...;
     * var response = request.Send();
     * 
     * var authToken = response.authToken; 
     * var displayName = response.displayName; 
     * var newPlayer = response.newPlayer; 
     * var scriptData = response.scriptData; 
     * var switchSummary = response.switchSummary; 
     * var userId = response.userId; 
     */
    class ViberConnectRequest extends _Request<_ViberConnectResponse> {
        /**
         * The accessToken represents a player’s permission to share access to their account with your application.
         * @Required Yes
         */
        accessToken: string;
        /**
         * Indicates whether the server should return an error if a new player would have been registered, rather than creating the player.  Defaults to false.
         * @Required No
         */
        doNotCreateNewPlayer: boolean;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         * @Required No
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Does not automatocally register this user for push notifications. Defaults to false.
         * @Required No
         */
        doNotRegisterForPush: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         * @Required No
         */
        errorOnSwitch: boolean;
        /**
         * An optional segment configuration for this request.
         * @Required No
         */
        segments: JSON;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         * @Required No
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         * @Required No
         */
        syncDisplayName: boolean;
    }
    /**
     * A response containing the auth token
     */
    class _ViberConnectResponse extends _Response {
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
