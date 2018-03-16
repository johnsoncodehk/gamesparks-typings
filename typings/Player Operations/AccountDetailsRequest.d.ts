declare namespace SparkRequests {
    /**
     * Retrieves the details of the current authenticated player.
     */
    class AccountDetailsRequest extends _Request<_AccountDetailsResponse> {
    }
    /**
     * A response containing the player’s data.
     */
    class _AccountDetailsResponse extends _Response {
        /**
         * A JSON object containing the player’s achievments
         */
        achievements: string[];
        /**
         * A JSON object containing the player’s currency balances
         */
        currencies: JSON;
        /**
         * The amount of type 1 currency that the player holds
         */
        currency1: number;
        /**
         * The amount of type 2 currency that the player holds
         */
        currency2: number;
        /**
         * The amount of type 3 currency that the player holds
         */
        currency3: number;
        /**
         * The amount of type 4 currency that the player holds
         */
        currency4: number;
        /**
         * The amount of type 5 currency that the player holds
         */
        currency5: number;
        /**
         * The amount of type 6 currency that the player holds
         */
        currency6: number;
        /**
         * The player’s display name
         */
        displayName: string;
        /**
         * A JSON object containing the player’s external account details
         */
        externalIds: JSON;
        /**
         * A JSON object containing the player’s location
         */
        location: Location;
        /**
         * A JSON object containing the player’s currency balances
         */
        reservedCurrencies: JSON;
        /**
         * The amount of type 1 currency that the player holds which is currently reserved
         */
        reservedCurrency1: JSON;
        /**
         * The amount of type 2 currency that the player holds which is currently reserved
         */
        reservedCurrency2: JSON;
        /**
         * The amount of type 3 currency that the player holds which is currently reserved
         */
        reservedCurrency3: JSON;
        /**
         * The amount of type 4 currency that the player holds which is currently reserved
         */
        reservedCurrency4: JSON;
        /**
         * The amount of type 5 currency that the player holds which is currently reserved
         */
        reservedCurrency5: JSON;
        /**
         * The amount of type 6 currency that the player holds which is currently reserved
         */
        reservedCurrency6: JSON;
        /**
         * The player’s id
         */
        userId: string;
        /**
         * A JSON object containing the virtual goods that the player owns
         */
        virtualGoods: JSON;
    }
}
