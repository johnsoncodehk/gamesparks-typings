declare namespace SparkRequests {
    /**
     * A collection of arbitrary data that can be added to a message via a Cloud Code script.
     */
    class BundledGood {
        /**
         * The number of items bundled
         */
        qty: number;
        /**
         * The shortCode of the bundled good
         */
        shortCode: string;
    }
}
