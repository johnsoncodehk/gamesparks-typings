/**
 * The javascript representation of an RTData object
 * This object allows you to inpect the RTData objects sent from a client
 * This object is immutable, to create a new one you should use RTSession.getRTDataBuilder()
 */
interface RTData {
    /**
     * Gets an RTData object using the given index key, if the key contains a different type, or is empty a null will be returned
     */
    getData(index: number): RTData
    /**
     * Gets a double using the given index key, if the key contains a different type, or is empty a null will be returned
     */
    getDouble(index: number): Number
    /**
     * Gets a float using the given index key, if the key contains a different type, or is empty a null will be returned
     */
    getFloat(index: number): Number
    /**
     * Gets a float array using the given index key, if the key contains a different type, or is empty a null will be returned
     */
    getFloatArray(index: number): Number[]
    /**
     * Gets a number using the given index key, if the key contains a different type, or is empty a null will be returned
     */
    getNumber(index: number): Number
    /**
     * Gets a string using the given index key, if the key contains a different type, or is empty a null will be returned
     */
    getString(index: number): string
}
