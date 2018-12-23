declare namespace SparkRequests {
    /**
     * Allows a player’s internal profile to be disconnected from an external system to which it is linked.  Any friends linked as result of this connection will be removed.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * systemId | REQUIRED | A systemId from which to disconnect must be provided
     * systemId | NOT_CONNECTED | The player does not have a connection with the provided system.
     * userName | CHANGE_REQUIRED | If the player’s userName was derived from the profile they are disconnecting from, they must change it before they can disconnect.  The userName can be changed via a ChangeUserDetailsRequest.
     * password | NOT_SET | Before disconnecting, if the player has no other connected profiles then they must have a password set in order to be able to authenticate in the future.  A password can be set via a ChangeUserDetailsRequest.
     * 
     * @example
     * var request = new SparkRequests.SocialDisconnectRequest();
     * request.systemId = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     */
    class SocialDisconnectRequest extends _Request<_SocialDisconnectResponse> {
        /**
         * The external system from which to disconnect this profile, supplied as a two letter ID. The options are: {FACEBOOK:FB, AMAZON:AM, GAME_CENTER:GC
         * @Required No
         */
        systemId: string;
    }
    /**
     * A response to a SocialDisconnectRequest
     */
    class _SocialDisconnectResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
