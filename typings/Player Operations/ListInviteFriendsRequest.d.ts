declare namespace SparkRequests {
    /**
     * Returns the list of the current players friends in their social network, who are not yet playing this game.
     * This is dependent on the security and privacy policies of the social network.
     * For example, Facebook’s policies prevent this friend list being provided, whereas Twitter will supply a list of users who are not playing the game.
     */
    class ListInviteFriendsRequest extends _Request<_ListInviteFriendsResponse> {
    }
    class _ListInviteFriendsResponse extends _Response {
    }
}
