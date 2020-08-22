/**
 * A Condition builder for number values
 */
interface SparkDataNumberOperand {
    /**
     * Between values
     */
    between(low: any, high: any): SparkDataCondition
    /**
     * Equal to
     */
    eq(value: any): SparkDataCondition
    /**
     * Greater than
     */
    gt(value: any): SparkDataCondition
    /**
     * Equal to any item in the supplied values
     */
    in(values: Number[]): SparkDataCondition
    /**
     * Less than
     */
    lt(value: any): SparkDataCondition
    /**
     * Not equal to
     */
    ne(value: any): SparkDataCondition
}
