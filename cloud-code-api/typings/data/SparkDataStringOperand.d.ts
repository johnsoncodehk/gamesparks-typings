/**
 * A Condition builder for string values
 */
interface SparkDataStringOperand {
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
    in(values: string[]): SparkDataCondition
    /**
     * Less than
     */
    lt(value: any): SparkDataCondition
    /**
     * Not equal to
     */
    ne(value: any): SparkDataCondition
    /**
     * Starts with
     */
    startsWith(value: string): SparkDataCondition
}
