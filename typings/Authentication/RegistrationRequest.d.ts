declare namespace SparkRequests {
    /**
     * Allows a new player to be created using a username, password display name.
     */
    class RegistrationRequest extends _Request<_RegistrationResponse> {
        /**
         * A display name to use
         */
        displayName: string;
        /**
         * The previously registered password
         */
        password: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * The previously registered player name
         */
        userName: string;
    }
    class _RegistrationResponse extends _Response {
        /**
         * A display name to use
         */
        displayName: string;
        /**
         * The previously registered password
         */
        password: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * The previously registered player name
         */
        userName: string;
    }
}
