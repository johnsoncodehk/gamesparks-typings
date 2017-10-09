declare namespace SparkRequests {
    /**
     * Allows a PSN account to be used as an authentication mechanism.
     * Once authenticated the platform can determine the current players details from the PSN platform and store them within GameSparks.
     * GameSparks will determine the player’s friends and whether any of them are currently registered with the game.
     * If the PSN user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the PSN user is not already registered with the game, the PSN user will be linked to the current player.
     * If the current player has not authenticated and the PSN user is not known, a new player will be created using the PSN details and the session will be authenticated against the new player.
     * If the PSN user is already known, the session will switch to being the previously created user.
     */
    class PSNConnectRequest extends _Request<_PSNConnectResponse> {
        /**
         * The authorization code obtained from PSN, as described here https://ps4.scedev.net/resources/documents/SDK/latest/NpAuth-Reference/0008.html
         * @Required No
         */
        authorizationCode: string;
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
         * When using the authorization code obtained from PlayStation®4/PlayStation®Vita/PlayStation®3, this is not required.
         * @Required No
         */
        redirectUri: string;
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
    class _PSNConnectResponse extends _Response {
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
