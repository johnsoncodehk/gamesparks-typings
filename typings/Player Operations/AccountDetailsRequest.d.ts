declare namespace SparkRequests {
    /**
     * Retrieves the details of the current authenticated player.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.AccountDetailsRequest();
     * var response = request.Send();
     * 
     * var achievements = response.achievements; 
     * var currencies = response.currencies; 
     * var currency1 = response.currency1; 
     * var currency2 = response.currency2; 
     * var currency3 = response.currency3; 
     * var currency4 = response.currency4; 
     * var currency5 = response.currency5; 
     * var currency6 = response.currency6; 
     * var displayName = response.displayName; 
     * var externalIds = response.externalIds; 
     * var location = response.location; 
     * var reservedCurrencies = response.reservedCurrencies; 
     * var reservedCurrency1 = response.reservedCurrency1; 
     * var reservedCurrency2 = response.reservedCurrency2; 
     * var reservedCurrency3 = response.reservedCurrency3; 
     * var reservedCurrency4 = response.reservedCurrency4; 
     * var reservedCurrency5 = response.reservedCurrency5; 
     * var reservedCurrency6 = response.reservedCurrency6; 
     * var userId = response.userId; 
     * var virtualGoods = response.virtualGoods; 
     * ```
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
