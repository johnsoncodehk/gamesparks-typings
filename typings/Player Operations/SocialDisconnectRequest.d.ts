declare namespace SparkRequests {
    /**
     * Allows a player’s internal profile to be disconnected from an external system to which it is linked.  Any friends linked as result of this connection will be removed.
     */
    class SocialDisconnectRequest extends _Request<_SocialDisconnectResponse> {
        /**
         * The external system from which to disconnect this profile, supplied as a two letter ID. The options are: {FACEBOOK:FB, AMAZON:AM, GAME_CENTER:GC
         */
        systemId: string;
    }
    class _SocialDisconnectResponse extends _Response {
        /**
         * The external system from which to disconnect this profile, supplied as a two letter ID. The options are: {FACEBOOK:FB, AMAZON:AM, GAME_CENTER:GC
         */
        systemId: string;
    }
}
