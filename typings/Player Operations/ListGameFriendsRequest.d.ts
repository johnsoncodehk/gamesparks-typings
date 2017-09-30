declare namespace SparkRequests {
    /**
     * Returns the list of the current players game friends.
     * A Game friend is someone in their social network who also plays the game.
     * Against each friend, an indicator is supplied to show whether the friend is currently connected to the GameSparks service
     */
    class ListGameFriendsRequest extends _Request<_ListGameFriendsResponse> {
    }
    class _ListGameFriendsResponse extends _Response {
    }
}
