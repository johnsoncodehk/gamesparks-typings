declare namespace SparkRequests {
    /**
     * Allows a device id to be used to create an anonymous profile in the game.
     * This allows the player to be tracked and have data stored against them before using FacebookConnectRequest to create a full profile.
     * DeviceAuthenticationRequest should not be used in conjunction with RegistrationRequest as the two accounts will not be merged.
     */
    class DeviceAuthenticationRequest extends _Request<_DeviceAuthenticationResponse> {
        /**
         * A unique device identifier. Each platform has it’s own method for getting a unique id
         */
        deviceId: string;
        /**
         * The device model
         */
        deviceModel: string;
        /**
         * The device name
         */
        deviceName: string;
        /**
         * An indicator of the device platform, should be IOS, ANDROID, WP8 or W8
         */
        deviceOS: string;
        /**
         * The device type
         */
        deviceType: string;
        /**
         * An optional displayname for the player
         */
        displayName: string;
        /**
         * The device type
         */
        operatingSystem: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
    }
    class _DeviceAuthenticationResponse extends _Response {
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
