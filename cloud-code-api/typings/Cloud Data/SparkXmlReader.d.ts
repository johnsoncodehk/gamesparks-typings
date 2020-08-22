/**
 * Provides read only access to an Xml document in gamesparks storage.
 * @example
 * var myXmlReader = Spark.uploadedXml("7359237762da4245add41e44bc994cdd");
 * or
 * var myXmlReader = Spark.downloadableXml("SHORTCODE");
 */
interface SparkXmlReader {
    /**
     * Registers a function to be called when a given element is found.
     * @param path A dot notated path representing the element to attach to
     * @param function Your javascript function that should be called when the element is found
     * @example
     * uploadedXml.registerCallback("catalog.book", processBookElement);
     */
    registerCallback(path: string, startCallback: Function): void
    /**
     * Processes each document element and triggers any registered callback
     * @example
     * uploadedXml.process();
     */
    process(): void
    /**
     * Returns the current element in the document, generally only useful during callbacks
     * The returned element only contains the element name and any attributes, it does not include children
     * @returns The current element
     * @example
     * var element = uploadedXml.element;
     */
    getElement(): any
    /**
     * Returns the current element in the document as a complete xml structure including all children
     * @returns The current element as a document
     * @example
     * var element = uploadedXml.xml;
     */
    getXml(): any
}
