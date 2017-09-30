declare namespace SparkRequests {
    /**
     * Allows an Apple account that has GameCenter to be used as an authentication mechanism.
     * The request must supply the GameCenter user details, such as the player id and username.
     * If the GameCenter user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the GameCenter user is not already registered with the game, the GameCenter user will be linked to the current player.
     * If the current player has not authenticated and the GameCenter user is not known, a new player will be created using the GameCenter details and the session will be authenticated against the new player.
     * If the GameCenter user is already known, the session will switch to being the previously created user.
     * This API call requires the output details from GKLocalPlayer.generateIdentityVerificationSignatureWithCompletionHandler on your iOS device
     */
    class GameCenterConnectRequest extends _Request<_GameCenterConnectResponse> {
        /**
         * The display of the current player from GameCenter. This will be used as the displayName of the gamesparks player if created (or syncDisplayname is true)
         */
        displayName: string;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         */
        errorOnSwitch: boolean;
        /**
         * The game center id of the current player. This value obtained be obtained from GKLocalPlayer playerID
         */
        externalPlayerId: string;
        /**
         * The url from where we will download the public key. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler.
         */
        publicKeyUrl: string;
        /**
         * The salt is needed in order to prevent request forgery. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler and should be base64 encoded using [salt base64Encoding]
         */
        salt: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * The signature is needed to validate that the request is genuine and that we can save the player. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler and should be base64 encoded using [signature base64Encoding]
         */
        signature: string;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         */
        syncDisplayName: boolean;
        /**
         * The timestamp is needed to validate the request signature. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler
         */
        timestamp: number;
    }
    class _GameCenterConnectResponse extends _Response {
        /**
         * The display of the current player from GameCenter. This will be used as the displayName of the gamesparks player if created (or syncDisplayname is true)
         */
        displayName: string;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         */
        errorOnSwitch: boolean;
        /**
         * The game center id of the current player. This value obtained be obtained from GKLocalPlayer playerID
         */
        externalPlayerId: string;
        /**
         * The url from where we will download the public key. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler.
         */
        publicKeyUrl: string;
        /**
         * The salt is needed in order to prevent request forgery. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler and should be base64 encoded using [salt base64Encoding]
         */
        salt: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * The signature is needed to validate that the request is genuine and that we can save the player. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler and should be base64 encoded using [signature base64Encoding]
         */
        signature: string;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         */
        syncDisplayName: boolean;
        /**
         * The timestamp is needed to validate the request signature. This value should be obtained from generateIdentityVerificationSignatureWithCompletionHandler
         */
        timestamp: number;
    }
}
