declare namespace SparkRequests {
    /**
     * Allows a player to join an open challenge.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * challengeInstanceId | UNKNOWN | No challenge could be found with the given challengeInstanceId
     * JOIN | NOT_FRIEND | The player is trying to join a FRIENDS challenge that is owned by someone with whom they are not a friend
     * JOIN | Must be a PUBLIC | FRIENDS challenge to join
     * eligibility | { “XXX” : “UNRECOGNISED”} | XXX is not a valid field of eligibility
     * eligibility | { “segments” : {“XXX” : “MALFORMED”}} | The value provied for XXX is not in the correct format
     * eligibility | { “missingSegments” : {“XXX” : [“YYY”, “ZZZ”]}} | To join this challenge the player must have segment XXX with value YYY or ZZZ
     * eligibility | { “invalidSegments” :  { “actual” : {“XXX” : “YYY”}, “required” : {“XXX” : “ZZZ”}} | This player has segment XXX value YYY however this challenge requires a segment XXX value of ZZZ
     * 
     * @example
     * var request = new SparkRequests.JoinChallengeRequest();
     * request.challengeInstanceId = ...;
     * request.eligibility = ...;
     * request.message = ...;
     * var response = request.Send();
     * 
     * var joined = response.joined; 
     * var scriptData = response.scriptData; 
     */
    class JoinChallengeRequest extends _Request<_JoinChallengeResponse> {
        /**
         * The ID of the challenge
         * @Required Yes
         */
        challengeInstanceId: string;
        /**
         * Optional.  Allows the current player’s eligibility to be overridden by what is provided here.
         * @Required Yes
         */
        eligibility: JSON;
        /**
         * An optional message to send with the challenge
         * @Required No
         */
        message: string;
    }
    /**
     * A response to a player joining a challenge
     */
    class _JoinChallengeResponse extends _Response {
        /**
         * Whether the player successfully joined the challenge
         */
        joined: boolean;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
