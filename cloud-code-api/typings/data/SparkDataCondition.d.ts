/**
 * A Condition
 */
interface SparkDataCondition {
    /**
     * Logical AND with supplied condition
     */
    and(that: SparkDataCondition): SparkDataCondition
    /**
     * Negates this condition
     */
    negate(): SparkDataCondition
    /**
     * Logical OR with supplied condition
     */
    or(that: SparkDataCondition): SparkDataCondition
}
