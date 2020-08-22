/**
 * Provides access to a HTTP client object.
 * @example
 * var httpSender = Spark.getHttp("http://somehost");
 */
interface SparkHttp {
    /**
     * Sets credentials to be used for Basic Auth
     * @param userName the username to use
     * @param password the password to use
     * @example
     * Spark.getHttp(url).setBasicAuth("myusername", "mypassword");
     */
    setBasicAuth(username: string, password: string): SparkHttp
    /**
     * Add custom header to the request
     * @param headers A JSON object
     * @example
     * Spark.getHttp(url).setHeaders({"X-Custom-header":"1234"});
     */
    setHeaders(headers: any): SparkHttp
    /**
     * Perform a HTTP GET request
     * @example
     * var response = Spark.getHttp(url).get();
     */
    get(): SparkHttpResponse
    /**
     * Perform a HTTP POST using a JSON form object
     * @param form the HTTP form data
     * @example
     * Spark.getHttp(url).postForm(form);
     */
    postForm(form: any): SparkHttpResponse
    /**
     * Perform a HTTP POST using an XML form object
     * @param form the HTTP form data
     * @example
     * Spark.getHttp(url).postXml(xmlForm);
     */
    postXml(form: XMLObject): SparkHttpResponse
    /**
     * Perform a HTTP POST using a JSON form object
     * @param form the HTTP form data
     * @example
     * Spark.getHttp(url).postJson(jsonForm);
     */
    postJson(form: any): SparkHttpResponse
    /**
     * Perform a HTTP POST using a string
     * @param data the HTTP POST data
     * @example
     * Spark.getHttp(url).postString(data);
     */
    postString(data: string): SparkHttpResponse
    /**
     * Perform a HTTP PUT using a JSON form object
     * @param form the HTTP form data
     * @example
     * Spark.getHttp(url).putForm(form);
     */
    putForm(form: any): SparkHttpResponse
    /**
     * Perform a HTTP PUT using an XML form object
     * @param form the HTTP form data
     * @example
     * Spark.getHttp(url).putXml(xmlForm);
     */
    putXml(form: XMLObject): SparkHttpResponse
    /**
     * Perform a HTTP PUT using a JSON form object
     * @param form the HTTP form data
     * @example
     * Spark.getHttp(url).putJson(jsonForm);
     */
    putJson(form: any): SparkHttpResponse
    /**
     * Perform a HTTP PUT using a string
     * @param data the HTTP PUT data
     * @example
     * Spark.getHttp(url).putString(data);
     */
    putString(data: string): SparkHttpResponse
    /**
     * Perform a HTTP DELETE request
     * @example
     * var response = Spark.getHttp(url).delete();
     */
    delete(): SparkHttpResponse
}
