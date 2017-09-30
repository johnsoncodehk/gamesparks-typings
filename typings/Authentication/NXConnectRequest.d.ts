declare namespace SparkRequests {
    /**
     * Allows an Nintendo Network Service Account (NSA) to be used as an authentication mechanism.
     * Once authenticated the platform can determine the current players details from the NSA and store them within GameSparks.
     * GameSparks will determine the player’s friends and whether any of them are currently registered with the game.
     * If the NSA is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the NSA is not already registered with the game, the NSA will be linked to the current player.
     * If the current player has not authenticated and the NSA is not known, a new player will be created using the NSA details and the session will be authenticated against the new player.
     * If the NSA is already known, the session will switch to being the previously created user.
     */
    class NXConnectRequest extends _Request<_NXConnectResponse> {
        /**
         * Whether to create one GameSparks player per console login ID
         */
        accountPerLoginId: boolean;
        /**
         * The display name of the current player from NX. This will be used as the displayName of the gamesparks player if created (or syncDisplayname is true)
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
         * The NSA ID token obtained from Nintendo
         */
        nsaIdToken: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         */
        syncDisplayName: boolean;
    }
    class _NXConnectResponse extends _Response {
        /**
         * Whether to create one GameSparks player per console login ID
         */
        accountPerLoginId: boolean;
        /**
         * The display name of the current player from NX. This will be used as the displayName of the gamesparks player if created (or syncDisplayname is true)
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
         * The NSA ID token obtained from Nintendo
         */
        nsaIdToken: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         */
        syncDisplayName: boolean;
    }
}
