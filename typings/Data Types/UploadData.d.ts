declare namespace SparkRequests {
    /**
     * This object represents the result of uploading a file to the GameSparks platform.
     */
    class UploadData {
        /**
         * The filename of the file that was uploaded.
         */
        fileName: string;
        /**
         * The unique player id of the player that uploaded the file.
         */
        playerId: string;
    }
}
