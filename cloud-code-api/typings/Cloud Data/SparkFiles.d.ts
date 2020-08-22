/**
 * Provides access uploaded files along with downloadables
 */
interface SparkFiles {
    /**
     * Deletes a previously uploaded file by uploadId
     * @validity All Scripts
     * @param uploadId the id of the uploaded file
     * @example
     * Spark.getFiles().deleteUploadedFile("myUploadId");
     */
    deleteUploadedFile(uploadId: string): boolean
    /**
     * Provides access to an uploaded file via a SparkXmlReader interface
     * @validity All Scripts
     * @param uploadId the id of the uploaded file
     * @example
     * var reader = Spark.getFiles().uploadedXml("myUploadId");
     */
    uploadedXml(uploadId: string): SparkXmlReader
    /**
     * Provides access to an uploaded file via a JSON object
     * @validity All Scripts
     * @param uploadId the id of the uploaded file
     * @returns A JSON object
     * @example
     * var reader = Spark.getFiles().uploadedJson("myUploadId");
     */
    uploadedJson(uploadId: string): any
    /**
     * Provides access to a downloadable file via a SparkXmlReader interface
     * @validity All Scripts
     * @param shortCode the short code for the downloadable file
     * @example
     * var reader = Spark.getFiles().downloadableXml("shortCode");
     */
    downloadableXml(shortCode: string): SparkXmlReader
    /**
     * Provides access to a downloadable file via a JSON object
     * @validity All Scripts
     * @param shortCode the short code for the downloadable file
     * @example
     * var reader = Spark.getFiles().downloadableJson("shortCode");
     */
    downloadableJson(shortCode: string): any
}
