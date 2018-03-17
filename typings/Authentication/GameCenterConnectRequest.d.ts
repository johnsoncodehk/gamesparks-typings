declare namespace SparkRequests {
    /**
     * Allows an Apple account that has GameCenter to be used as an authentication mechanism.
     * The request must supply the GameCenter user details, such as the player id and username.
     * If the GameCenter user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the GameCenter user is not already registered with the game, the GameCenter user will be linked to the current player.
     * If the current player has not authenticated and the GameCenter user is not known, a new player will be created using the GameCenter details and the session will be authenticated against the new player.
     * If the GameCenter user is already known, the session will switch to being the previously created user.
     * This API call requires the output details from GKLocalPlayer.generateIdentityVerificationSignatureWithCompletionHandler on your iOS device
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * externalPlayerId | ACCOUNT_ALREADY_LINKED | The current user has a GameCenter profile and it’s not the profile they have just tried to log in with
     * signature | NOTAUTHENTICATED | The system was unable to validate the request
     * externalPlayerId | NOTAUTHENTICATED | The system was unable to validate the external player ID
     * publicKeyUrl | REQUIRED | The publicKeyUrl is required but not provided
     * timestamp | REQUIRED | The timestamp is required but not provided
     * timestamp | EXPIRED | The request expired
     * signature | REQUIRED | The signature is required but not provided
     * salt | REQUIRED | The salt is required but not provided
     * externalPlayerId | REQUIRED | The externalPlayerId is required but not provided
     * displayName | REQUIRED | The displayName is required but not provided
     * authentication | COPPA restricted | Social authentications are not allowed on COPPA compliant credentials due to social accounts containing personally identifiable information
     */
    class GameCenterConnectRequest extends _Request<_GameCenterConnectResponse> {
        /**
         * The display of the current player from GameCenter. This will be used as the displayName of the gamesparks player if created (or syncDisplayname is true)
         * @Required No
         */
        displayName: string;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         * @Required No
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         * @Required No
         */
        errorOnSwitch: boolean;
        /**
         * The game center id of the current player. This value obtained be obtained from GKLocalPlayer playerID
         * @Required No
         */
        externalPlayerId: string;
        /**
         * The url from where we will download the public key. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler.
         * @Required No
         */
        publicKeyUrl: string;
        /**
         * The salt is needed in order to prevent request forgery. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler and should be base64 encoded using [salt base64Encoding]
         * @Required No
         */
        salt: string;
        /**
         * An optional segment configuration for this request.
         * @Required No
         */
        segments: JSON;
        /**
         * The signature is needed to validate that the request is genuine and that we can save the player. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler and should be base64 encoded using [signature base64Encoding]
         * @Required No
         */
        signature: string;
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
        /**
         * The timestamp is needed to validate the request signature. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler
         * @Required No
         */
        timestamp: number;
    }
    /**
     * A response containing the auth token
     */
    class _GameCenterConnectResponse extends _Response {
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
