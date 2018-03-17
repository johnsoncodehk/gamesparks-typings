declare namespace SparkRequests {
    /**
     * Change the details of the currently signed in Player.
     * 
     * ## Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * DETAILS | UNRECOGNISED | The oldPassword did not match the one stored against the player.
     * USERNAME | TAKEN | The userName supplied is already in use.
     * 
     * ## Cloud Code Sample
     * ```javascript
     * var request = new SparkRequests.DismissMessageRequest();
     * request.messageId = ...;
     * var response = request.Send();
     * 
     * var scriptData = response.scriptData; 
     * ```
     */
    class ChangeUserDetailsRequest extends _Request<_ChangeUserDetailsResponse> {
        /**
         * The new display name to set in the player data.
         * @Required No
         */
        displayName: string;
        /**
         * The new language code to set in the player data.
         * @Required No
         */
        language: string;
        /**
         * The new password to set in the player data.
         * @Required No
         */
        newPassword: string;
        /**
         * The player’s existing password. If supplied it will be checked against the password stored in the player data. This allows you re-authenticate the player making the change.
         * @Required No
         */
        oldPassword: string;
        /**
         * The new userName with which this player will sign in.  If the player currently authenticates using device authentication this will upgrade their account and require them to use username and password authentication from now on.
         * @Required No
         */
        userName: string;
    }
    /**
     * A response to a change user details request
     */
    class _ChangeUserDetailsResponse extends _Response {
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
