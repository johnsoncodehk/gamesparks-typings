/**
 * Returns a reference to a SparkDigest object.
 * Implements a number of hashing functions similar to those found in CryptoJS.
 * example
 * Spark.getDigester();
 */
interface SparkDigest {
    /**
     * Returns a HmacMD5 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.
     */
    hmacMd5Base64(key: string, valueToDigest: string): string
    /**
     * Returns a HmacMD5 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.
     */
    hmacMd5Base64WithBase64Key(key: string, valueToDigest: string): string
    /**
     * Returns a HmacMD5 Message Authentication Code (MAC) as a hex string (lowercase) for the given key and value.
     */
    hmacMd5Hex(key: string, valueToDigest: string): string
    /**
     * Returns a HmacMD5 Message Authentication Code (MAC) as a hex string (lowercase) for the given hex encoded key and value.
     */
    hmacMd5HexWithHexKey(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA1 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.
     */
    hmacSha1Base64(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA1 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.
     */
    hmacSha1Base64WithBase64Key(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA1 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.
     */
    hmacSha1Hex(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA1 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.
     */
    hmacSha1HexWithHexKey(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA256 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.
     */
    hmacSha256Base64(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA256 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.
     */
    hmacSha256Base64WithBase64Key(base64Key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA256 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.
     */
    hmacSha256Hex(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA256 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.
     */
    hmacSha256HexWithHexKey(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA384 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.
     */
    hmacSha384Base64(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA384 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.
     */
    hmacSha384Base64WithBase64Key(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA384 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.
     */
    hmacSha384Hex(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA384 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.
     */
    hmacSha384HexWithHexKey(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA512 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.
     */
    hmacSha512Base64(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA512 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.
     */
    hmacSha512Base64WithBase64Key(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA512 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.
     */
    hmacSha512Hex(key: string, valueToDigest: string): string
    /**
     * Returns a HmacSHA512 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.
     */
    hmacSha512HexWithHexKey(key: string, valueToDigest: string): string
    /**
     * Calculates the MD2 digest and returns the value as a a base64 encoded string.
     */
    md2Base64(data: string): string
    /**
     * Calculates the MD2 digest and returns the value as a 32 character hex string.
     */
    md2Hex(data: string): string
    /**
     * Calculates the MD5 digest and returns the value as a base64 encoded string.
     */
    md5Base64(data: string): string
    /**
     * Calculates the MD5 digest and returns the value as a 32 character hex string.
     */
    md5Hex(data: string): string
    /**
     * Calculates the SHA-1 digest and returns the value as a base64 encoded string.
     */
    sha1Base64(data: string): string
    /**
     * Calculates the SHA-1 digest and returns the value as a hex string.
     */
    sha1Hex(data: string): string
    /**
     * Calculates the SHA-256 digest and returns the value as a base64 encoded string.
     */
    sha256Base64(data: string): string
    /**
     * Calculates the SHA-256 digest and returns the value as a hex string.
     */
    sha256Hex(data: string): string
    /**
     * Calculates the SHA-384 digest and returns the value as a base64 encoded string.
     */
    sha384Base64(data: string): string
    /**
     * Calculates the SHA-384 digest and returns the value as a hex string.
     */
    sha384Hex(data: string): string
    /**
     * Calculates the SHA-512 digest and returns the value as a base64 encoded string.
     */
    sha512Base64(data: string): string
    /**
     * Calculates the SHA-512 digest and returns the value as a hex string.
     */
    sha512Hex(data: string): string
}
