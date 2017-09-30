declare namespace SparkRequests {
    /**
     * Provides authentication using a username/password combination.
     * The username will have been previously created using a RegistrationRequest.
     */
    class AuthenticationRequest extends _Request<_AuthenticationResponse> {
        /**
         * The previously registered password
         */
        password: string;
        /**
         * The previously registered player name
         */
        userName: string;
    }
    class _AuthenticationResponse extends _Response {
        /**
         * The previously registered password
         */
        password: string;
        /**
         * The previously registered player name
         */
        userName: string;
    }
}
