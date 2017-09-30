declare namespace SparkRequests {
    /**
     * Get a list of the messages sent to the team (by players using SendTeamChatMessageRequest).
     */
    class ListTeamChatRequest extends _Request<_ListTeamChatResponse> {
        /**
         * The number of messages to return (default=50)
         */
        entryCount: number;
        /**
         * The offset (nth message) to start from (default=0)
         */
        offset: number;
        /**
         * The team owner to find, used in combination with teamType. If not supplied the current players id will be used
         */
        ownerId: string;
        /**
         * The teamId to find (may be null if teamType supplied)
         */
        teamId: string;
        /**
         * The teamType to find, used in combination with the current player, or the player defined by ownerId
         */
        teamType: string;
    }
    class _ListTeamChatResponse extends _Response {
        /**
         * The number of messages to return (default=50)
         */
        entryCount: number;
        /**
         * The offset (nth message) to start from (default=0)
         */
        offset: number;
        /**
         * The team owner to find, used in combination with teamType. If not supplied the current players id will be used
         */
        ownerId: string;
        /**
         * The teamId to find (may be null if teamType supplied)
         */
        teamId: string;
        /**
         * The teamType to find, used in combination with the current player, or the player defined by ownerId
         */
        teamType: string;
    }
}
