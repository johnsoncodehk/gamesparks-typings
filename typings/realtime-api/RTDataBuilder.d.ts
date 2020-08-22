/**
 * A builder object to construct RTData objects
 */
interface RTDataBuilder {
    /**
     * Adds a nested RTData object at the given index key
     */
    setData(index: number, value: RTDataBuilder): RTDataBuilder
    /**
     * Adds a double at the given index key, the number will be added as a protobuf fixed64
     */
    setDouble(index: number, value: Number): RTDataBuilder
    /**
     * Adds a float at the given index key, the number will be added as a protobuf fixed32
     */
    setFloat(index: number, value: Number): RTDataBuilder
    /**
     * Adds a an array of floats at the given index key
     */
    setFloatArray(index: number, values: Number[]): RTDataBuilder
    /**
     * Adds a number at the given index key, the number will be added as a protobuf varint
     */
    setNumber(index: number, value: Number): RTDataBuilder
    /**
     * Adds a string at the given index key
     */
    setString(index: number, value: string): RTDataBuilder
}
