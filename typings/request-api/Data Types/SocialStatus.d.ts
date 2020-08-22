declare namespace SparkRequests {
    /**
     * A the details of a social connection
     */
    class SocialStatus {
        /**
         * When the token is still active.
         */
        active: boolean;
        /**
         * When the token expires (if available).
         */
        expires: date;
        /**
         * The identifier of the external platform.
         */
        systemId: string;
    }
}
