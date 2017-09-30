declare namespace SparkRequests {
    /**
     * A nested object that represents the achievement data.
     */
    class Achievement {
        /**
         * The desciption of the Achievement
         */
        description: string;
        /**
         * Whether to current player has earned the achievement
         */
        earned: boolean;
        /**
         * The name of the Achievement
         */
        name: string;
        /**
         * The custom property set configured on this Achievement
         */
        propertySet: JSON;
        /**
         * The shortCode of the Achievement
         */
        shortCode: string;
    }
}
