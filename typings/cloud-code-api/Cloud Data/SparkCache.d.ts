/**
 * Provides the ability to cache javascript objects. This includes complex objects with functions. Any javascript object can be cached. This allows you to create objects of a particular structure from your JSON data in mongo that can speed up access.
 * This differs slighty from storing data in mongo as the data is stored in memory and expired on a LRU basis. This means access time is significantly faster for these in memory objects
 * Cached objects are backed by mongo for up to 30 days, so if an item is expired in memory, when you try to access it again it will be reloaded.
 * There is a limited amount of memory available on servers, so this should be used for few, shared configuration type objects
 * Using this for player data or having a large amount of objects could slow down you application as the store / reload process is more expensive than a mongo find for JSON data
 * Code using SparkCache should be written with the expectation that the cache may return null (if data is expired) so should be able to reconstruct and re-cache the data in this scenario.
 * @example
 * var theCache = Spark.getCache();
 */
interface SparkCache {
    /**
     * Adds an object to the cache
     * @example
     * theCache.put("key", myObject);
     */
    put(key: string, object: any): void
    /**
     * Gets an objects from the cache
     * @returns A JavaScipt object, or null depending on whether put has ben called for the given key 
     * @example
     * var myObject = theCache.get("key");
     */
    get(key: string): any
    /**
     * Remove an object from the cache
     * The object will be removed form the cache, and form the database. Subsequent calls to get will return null
     * @example
     *  theCache.remove("key")
     */
    remove(key: string): void
    /**
     * Clears everything from the cache
     * @example
     *  theCache.removeAll()
     */
    removeAll(): void
    /**
     * Clears all objects from the cache where the keys match the regex pattern provided.
     * the match pattern is ultimately used by mongo to do a $regex query, which uses
     * "Perl Compatible Regular Expressions" (PCRE) as the matching engine.
     * @example
     *  theCache.removeAll("match\..*\.2014)
     */
    removeAll(pattern: string): void
}
