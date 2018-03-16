declare namespace SparkRequests {
    /**
     * Allows a player’s internal profile to be disconnected from an external system to which it is linked.  Any friends linked as result of this connection will be removed.
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
