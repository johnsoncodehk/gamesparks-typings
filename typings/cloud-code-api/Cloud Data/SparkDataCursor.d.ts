/**
 * An iterator over database results. Performing a queryItems() SparkDataCursor thus:
 * var cursor = api.queryItems( query );if( cursor.hasNext() ) {var obj = cursor.next();}
 */
interface SparkDataCursor {
    /**
     * Checks if there is another object available.
     */
    hasNext(): boolean
    /**
     * Moves the cursor ahead by one and returns the object the cursor is then at.
     */
    next(): SparkDataItem
}
