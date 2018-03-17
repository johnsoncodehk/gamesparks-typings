declare namespace SparkRequests {
    /**
     * Withdraws a challenge previously issued by the current player.
     * This can only be done while the challenge is in the ISSUED state. Once it’s been accepted the challenge can not be withdrawn.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * challengeInstanceId | INVALID | The ID does not match a challenge in the ISSUED state that was issued by the current player
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
    class WithdrawChallengeRequest extends _Request<_WithdrawChallengeResponse> {
        /**
         * The ID of the challenge
         * @Required Yes
         */
        challengeInstanceId: string;
        /**
         * An optional message to send with the challenge
         * @Required No
         */
        message: string;
    }
    /**
     * A response containing the challenge instance id that was withdrawn by a player
     */
    class _WithdrawChallengeResponse extends _Response {
        /**
         * A challenge instance id
         */
        challengeInstanceId: string;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
