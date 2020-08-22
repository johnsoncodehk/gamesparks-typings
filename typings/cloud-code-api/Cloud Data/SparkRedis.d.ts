/**
 * Provides access to the Games Redis Instance.
 * Rather than copy and paste the excellent documentation from the Redis site, we've opted to link to the relevant page through the documentation.
 * @example
 * var redis = Spark.getRedis();
 */
interface SparkRedis {
    /**
     * See http://redis.io/commands/append
     */
    append(key: string, value: string): number
    /**
     * See http://redis.io/commands/bitcount
     */
    bitcount(key: string): number
    /**
     * See http://redis.io/commands/bitcount
     */
    bitcount(key: string, start: number, end: number): number
    /**
     * See http://redis.io/commands/bitop
     */
    bitop(op: string, destKey: string, srcKeys: string[]): number
    /**
     * See http://redis.io/commands/decr
     */
    decr(key: string): number
    /**
     * See http://redis.io/commands/decrBy
     */
    decrBy(key: string, integer: number): number
    /**
     * See http://redis.io/commands/del
     */
    del(keys: string[]): number
    /**
     * See http://redis.io/commands/exists
     */
    exists(key: string): boolean
    /**
     * See http://redis.io/commands/expire
     */
    expire(key: string, seconds: number): number
    /**
     * See http://redis.io/commands/expireAt
     */
    expireAt(key: string, unixTime: number): number
    /**
     * See http://redis.io/commands/flushdb
     */
    flushdb(): string
    /**
     * See http://redis.io/commands/geoadd
     */
    geoadd(dstkey: string, memberCoordinateMap: any): number
    /**
     * See http://redis.io/commands/geodist
     */
    geodist(dstkey: string, member1: string, member2: string, unit: string): number
    /**
     * See http://redis.io/commands/geohash
     */
    geohash(dstkey: string, members: string[]): any
    /**
     * See http://redis.io/commands/geopos
     */
    geopos(dstkey: string, members: string[]): any
    /**
     * See http://redis.io/commands/georadius
     */
    georadius(dstkey: string, longitude: number, latitude: number, radius: number, unit: string, params: any): any
    /**
     * See http://redis.io/commands/georadiusbymember
     */
    georadiusbymember(dstkey: string, member: string, radius: number, unit: string, params: any): any
    /**
     * See http://redis.io/commands/get
     */
    get(key: string): string
    /**
     * See http://redis.io/commands/getbit
     */
    getbit(key: string, offset: number): boolean
    /**
     * See http://redis.io/commands/getrange
     */
    getrange(key: string, startOffset: number, endOffset: number): string
    /**
     * See http://redis.io/commands/hdel
     */
    hdel(key: string, fields: string[]): number
    /**
     * See http://redis.io/commands/hexists
     */
    hexists(key: string, field: string): boolean
    /**
     * See http://redis.io/commands/hget
     */
    hget(key: string, field: string): string
    /**
     * See http://redis.io/commands/hgetAll
     */
    hgetAll(key: string): string[]
    /**
     * See http://redis.io/commands/hincrBy
     */
    hincrBy(key: string, field: string, value: number): number
    /**
     * See http://redis.io/commands/hincrByFloat
     */
    hincrByFloat(key: string, field: string, increment: number): number
    /**
     * See http://redis.io/commands/hkeys
     */
    hkeys(key: string): string[]
    /**
     * See http://redis.io/commands/hlen
     */
    hlen(key: string): number
    /**
     * See http://redis.io/commands/hmget
     */
    hmget(key: string, fields: string[]): string[]
    /**
     * See http://redis.io/commands/hmset
     */
    hmset(key: string, hash: any): string
    /**
     * See http://redis.io/commands/hset
     */
    hset(key: string, field: string, value: string): number
    /**
     * See http://redis.io/commands/hsetnx
     */
    hsetnx(key: string, field: string, value: string): number
    /**
     * See http://redis.io/commands/hvals
     */
    hvals(key: string): string[]
    /**
     * See http://redis.io/commands/incr
     */
    incr(key: string): number
    /**
     * See http://redis.io/commands/incrBy
     */
    incrBy(key: string, integer: number): number
    /**
     * See http://redis.io/commands/incrByFloat
     */
    incrByFloat(key: string, increment: number): number
    /**
     * See http://redis.io/commands/keys
     */
    keys(pattern: string): string[]
    /**
     * See http://redis.io/commands/lindex
     */
    lindex(key: string, index: number): string
    /**
     * See http://redis.io/commands/linsert
     */
    linsert(key: string, where: string, pivit: string, value: string): number
    /**
     * See http://redis.io/commands/llen
     */
    llen(key: string): number
    /**
     * See http://redis.io/commands/lpop
     */
    lpop(key: string): string
    /**
     * See http://redis.io/commands/lpush
     */
    lpush(key: string, strings: string[]): number
    /**
     * See http://redis.io/commands/lpushx
     */
    lpushx(key: string, strings: string[]): number
    /**
     * See http://redis.io/commands/lrange
     */
    lrange(key: string, start: number, end: number): string[]
    /**
     * See http://redis.io/commands/lrem
     */
    lrem(key: string, count: number, value: string): number
    /**
     * See http://redis.io/commands/lset
     */
    lset(key: string, index: number, value: string): string
    /**
     * See http://redis.io/commands/ltrim
     */
    ltrim(key: string, start: number, end: number): string
    /**
     * See http://redis.io/commands/mget
     */
    mget(keys: string[]): string[]
    /**
     * See http://redis.io/commands/mset
     */
    mset(keysvalues: string[]): string
    /**
     * See http://redis.io/commands/msetnx
     */
    msetnx(keysvalues: string[]): number
    /**
     * See http://redis.io/commands/persist
     */
    persist(key: string): number
    /**
     * See http://redis.io/commands/pexpire
     */
    pexpire(key: string, milliseconds: number): number
    /**
     * See http://redis.io/commands/pexpireAt
     */
    pexpireAt(key: string, millisecondsTimestamp: number): number
    /**
     * See http://redis.io/commands/psetex
     */
    psetex(key: string, milliseconds: number, value: string): string
    /**
     * See http://redis.io/commands/pttl
     */
    pttl(key: string): number
    /**
     * See http://redis.io/commands/rename
     */
    rename(oldkey: string, newkey: string): string
    /**
     * See http://redis.io/commands/renamenx
     */
    renamenx(oldkey: string, newkey: string): number
    /**
     * See http://redis.io/commands/rpop
     */
    rpop(key: string): string
    /**
     * See http://redis.io/commands/rpoplpush
     */
    rpoplpush(srckey: string, dstkey: string): string
    /**
     * See http://redis.io/commands/rpush
     */
    rpush(key: string, strings: string[]): number
    /**
     * See http://redis.io/commands/rpushx
     */
    rpushx(key: string, strings: string[]): number
    /**
     * See http://redis.io/commands/sadd
     */
    sadd(key: string, members: string[]): number
    /**
     * See http://redis.io/commands/scard
     */
    scard(key: string): number
    /**
     * See http://redis.io/commands/sdiff
     */
    sdiff(keys: string[]): string[]
    /**
     * See http://redis.io/commands/sdiffstore
     */
    sdiffstore(dstkey: string, keys: string[]): number
    /**
     * See http://redis.io/commands/getSet
     */
    getSet(key: string, value: string): string
    /**
     * See http://redis.io/commands/set
     */
    set(key: string, value: string, nxxx: string, expx: string, time: number): string
    /**
     * See http://redis.io/commands/set
     */
    set(key: string, value: string): string
    /**
     * See http://redis.io/commands/set
     */
    set(key: string, value: string, nxxx: string, expx: string, time: number): string
    /**
     * See http://redis.io/commands/set
     */
    set(key: string, value: string, nxxx: string): string
    /**
     * See http://redis.io/commands/setbit
     */
    setbit(key: string, offset: number, value: boolean): boolean
    /**
     * See http://redis.io/commands/setex
     */
    setex(key: string, seconds: number, value: string): string
    /**
     * See http://redis.io/commands/setnx
     */
    setnx(key: string, value: string): number
    /**
     * See http://redis.io/commands/setrange
     */
    setrange(key: string, offset: number, value: string): number
    /**
     * See http://redis.io/commands/sinter
     */
    sinter(keys: string[]): string[]
    /**
     * See http://redis.io/commands/sinterstore
     */
    sinterstore(dstkey: string, keys: string[]): number
    /**
     * See http://redis.io/commands/sismember
     */
    sismember(key: string, member: string): boolean
    /**
     * See http://redis.io/commands/smembers
     */
    smembers(key: string): string[]
    /**
     * See http://redis.io/commands/smove
     */
    smove(srckey: string, dstkey: string, member: string): number
    /**
     * See http://redis.io/commands/sort
     */
    sort(key: string): string[]
    /**
     * See http://redis.io/commands/sort
     */
    sort(key: string, dstkey: string): number
    /**
     * See http://redis.io/commands/spop
     */
    spop(key: string): string
    /**
     * See http://redis.io/commands/srandmember
     */
    srandmember(key: string): string
    /**
     * See http://redis.io/commands/srandmember
     */
    srandmember(key: string, count: number): string[]
    /**
     * See http://redis.io/commands/srem
     */
    srem(key: string, members: string[]): number
    /**
     * See http://redis.io/commands/strlen
     */
    strlen(key: string): number
    /**
     * See http://redis.io/commands/substr
     */
    substr(key: string, start: number, end: number): string
    /**
     * See http://redis.io/commands/sunion
     */
    sunion(keys: string[]): string[]
    /**
     * See http://redis.io/commands/sunionstore
     */
    sunionstore(dstkey: string, keys: string[]): number
    /**
     * See http://redis.io/commands/ttl
     */
    ttl(key: string): number
    /**
     * See http://redis.io/commands/type
     */
    type(key: string): string
    /**
     * See http://redis.io/commands/zadd
     */
    zadd(key: string, score: number, member: string): number
    /**
     * See http://redis.io/commands/zcard
     */
    zcard(key: string): number
    /**
     * See http://redis.io/commands/zcount
     */
    zcount(key: string, min: string, max: string): number
    /**
     * See http://redis.io/commands/zcount
     */
    zcount(key: string, min: number, max: number): number
    /**
     * See http://redis.io/commands/zincrby
     */
    zincrby(key: string, score: number, member: string): number
    /**
     * See http://redis.io/commands/zinterstore
     */
    zinterstore(dstkey: string, sets: string[]): number
    /**
     * See http://redis.io/commands/zrange
     */
    zrange(key: string, start: number, end: number): string[]
    /**
     * See http://redis.io/commands/zrangeByScore
     */
    zrangeByScore(key: string, min: string, max: string, offset: number, count: number): string[]
    /**
     * See http://redis.io/commands/zrangeByScore
     */
    zrangeByScore(key: string, min: string, max: string): string[]
    /**
     * See http://redis.io/commands/zrangeByScore
     */
    zrangeByScore(key: string, min: number, max: number, offset: number, count: number): string[]
    /**
     * See http://redis.io/commands/zrangeByScore
     */
    zrangeByScore(key: string, min: number, max: number): string[]
    /**
     * See http://redis.io/commands/zrangeByScoreWithScores
     */
    zrangeByScoreWithScores(key: string, min: number, max: number, offset: number, count: number): any
    /**
     * See http://redis.io/commands/zrangeByScoreWithScores
     */
    zrangeByScoreWithScores(key: string, min: string, max: string): any
    /**
     * See http://redis.io/commands/zrangeByScoreWithScores
     */
    zrangeByScoreWithScores(key: string, min: number, max: number): any
    /**
     * See http://redis.io/commands/zrangeByScoreWithScores
     */
    zrangeByScoreWithScores(key: string, min: string, max: string, offset: number, count: number): any
    /**
     * See http://redis.io/commands/zrangeWithScores
     */
    zrangeWithScores(key: string, start: number, end: number): any
    /**
     * See http://redis.io/commands/zrank
     */
    zrank(key: string, member: string): number
    /**
     * See http://redis.io/commands/zrem
     */
    zrem(key: string, members: string[]): number
    /**
     * See http://redis.io/commands/zremrangeByRank
     */
    zremrangeByRank(key: string, start: number, end: number): number
    /**
     * See http://redis.io/commands/zremrangeByScore
     */
    zremrangeByScore(key: string, start: string, end: string): number
    /**
     * See http://redis.io/commands/zremrangeByScore
     */
    zremrangeByScore(key: string, start: number, end: number): number
    /**
     * See http://redis.io/commands/zrevrange
     */
    zrevrange(key: string, start: number, end: number): string[]
    /**
     * See http://redis.io/commands/zrevrangeByScore
     */
    zrevrangeByScore(key: string, max: number, min: number, offset: number, count: number): string[]
    /**
     * See http://redis.io/commands/zrevrangeByScore
     */
    zrevrangeByScore(key: string, max: string, min: string, offset: number, count: number): string[]
    /**
     * See http://redis.io/commands/zrevrangeByScore
     */
    zrevrangeByScore(key: string, max: string, min: string): string[]
    /**
     * See http://redis.io/commands/zrevrangeByScore
     */
    zrevrangeByScore(key: string, max: number, min: number): string[]
    /**
     * See http://redis.io/commands/zrevrangeByScoreWithScores
     */
    zrevrangeByScoreWithScores(key: string, max: string, min: string): any
    /**
     * See http://redis.io/commands/zrevrangeByScoreWithScores
     */
    zrevrangeByScoreWithScores(key: string, max: string, min: string, offset: number, count: number): any
    /**
     * See http://redis.io/commands/zrevrangeByScoreWithScores
     */
    zrevrangeByScoreWithScores(key: string, max: number, min: number): any
    /**
     * See http://redis.io/commands/zrevrangeByScoreWithScores
     */
    zrevrangeByScoreWithScores(key: string, max: number, min: number, offset: number, count: number): any
    /**
     * See http://redis.io/commands/zrevrangeWithScores
     */
    zrevrangeWithScores(key: string, start: number, end: number): any
    /**
     * See http://redis.io/commands/zrevrank
     */
    zrevrank(key: string, member: string): number
    /**
     * See http://redis.io/commands/zscore
     */
    zscore(key: string, member: string): number
    /**
     * See http://redis.io/commands/zunionstore
     */
    zunionstore(dstkey: string, sets: string[]): number
}
