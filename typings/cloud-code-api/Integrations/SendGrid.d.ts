/**
 * Provides the ability to send emails via SendGrid.
 * @example
 * var mySendGrid = Spark.sendGrid("SG.SendGridAPIKey");
 * Before you use SendGrid, we recommend that you get a restricted access SendGrid API key and reserve this key for exclusive use by GameSparks. To learn about SendGrid API keys, see SendGrid: API Keys.
 * User name and password disabled on 12/9/2020 If you have been authenticating to SendGrid from GameSparks with your user name and password, we recommend that you switch as soon as possible to using an API key as explained above.
 */
interface SendGrid {
    /**
     * Adds a recipient to this email
     * @param email The email address of the recipient
     * @param query The name of the recipient (optional)
     * @returns This SendGrid object
     * @example
     * mySendGrid.addTo("info@gamesparks.com", "GameSparks")
     */
    addTo(email: string, name: string): SendGrid
    /**
     * Sends this email, this step should be performed after configuring the email fully
     * @returns The response from SendGrid
     * @example
     * mySendGrid.send();
     */
    send(): string
    /**
     * Sets the from address of this email
     * @param email The email address of the sender
     * @param query The name of the sender (optional)
     * @returns This SendGrid object
     * @example
     * mySendGrid.setFrom("info@gamesparks.com", "GameSparks")
     */
    setFrom(email: string, name: string): SendGrid
    /**
     * Sets the replyTo address of this email
     * @param email The email address to replyTo
     * @returns This SendGrid object
     * @example
     * mySendGrid.setReplyTo("info@gamesparks.com")
     */
    setReplyTo(email: string): SendGrid
    /**
     * Sets a bcc address to this email. SendGrid only allows one address in this field
     * @param email The email address to add as bcc
     * @returns This SendGrid object
     * @example
     * mySendGrid.setBcc("info@gamesparks.com")
     */
    setBcc(bcc: string): SendGrid
    /**
     * Sets the subject of this email
     * @param subject The subject of the email
     * @returns This SendGrid object
     * @example
     * mySendGrid.setSubject("Hello from GameSparks")
     */
    setSubject(subject: string): SendGrid
    /**
     * Sets the text body of this email. If html is set this value is ignored.
     * @param text The body of the email
     * @returns This SendGrid object
     * @example
     * mySendGrid.setText("Welcome to using SendGrid via GameSparks")
     */
    setText(text: string): SendGrid
    /**
     * Sets the html body of this email.
     * @param html The html body of the email
     * @returns This SendGrid object
     * @example
     * mySendGrid.setHtml("<b>Welcome to using SendGrid via GameSparks</b>")
     */
    setHtml(html: string): SendGrid
    /**
     * Adds an uploaded file to the email as an attachment
     * @param uploadId The id of the uploaded file
     * @returns This SendGrid object
     * @example
     * mySendGrid.addUploaded("7359237762da4245add41e44bc994cdd")
     */
    addUploaded(uploadId: string): SendGrid
    /**
     * Adds an downloadable file to the email as an attachment
     * @param shortCode The shortCode of the downloadable
     * @returns This SendGrid object
     * @example
     * mySendGrid.addDownloadable("SHORTCODE")
     */
    addDownloadable(shortCode: string): SendGrid
    /**
     * Adds an custom SMTP header to this email
     * @param name The header name to set
     * @param value The value to set for the header
     * @returns This SendGrid object
     * @example
     * mySendGrid.addHeader("X-Sent-Using", "SendGrid-API")
     */
    addHeader(key: string, value: string): SendGrid
}
