/**
 * Contains configuration information for the downloadable
 */
interface SparkDownloadable {
    /**
     * Returns the shortCode of the downloadable
     * @validity All Scripts
     */
    getShortCode(): string
    /**
     * Returns the size of the downloadable
     * @validity All Scripts
     */
    getSize(): number
    /**
     * Returns the lastModified date of the downloadable
     * @validity All Scripts
     */
    getLastModified(): date
    /**
     * Returns a url that can be used to download this content
     * @validity All Scripts
     */
    getUrl(): string
}
