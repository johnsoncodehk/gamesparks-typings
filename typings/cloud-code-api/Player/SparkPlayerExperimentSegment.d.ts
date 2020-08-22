/**
 * An experiment segment that the player is part of.
 */
interface SparkPlayerExperimentSegment {
    /**
     * The experiment ID
     */
    getExperimentId(): number
    /**
     * The segment that the player is in for this experiment
     */
    getSegmentName(): string
}
