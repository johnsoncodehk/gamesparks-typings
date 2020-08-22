/**
 * Provides the ability to send a ScriptMessage and provide the configuration in code rather than from within the portal 
 */
interface SparkMessage {
    /**
     * Sets the Send Via Socket option.
     */
    setSendViaSocket(value: boolean): SparkMessage
    /**
     * Sets the Send As Push option.
     */
    setSendAsPush(value: boolean): SparkMessage
    /**
     * Sets the Send As Push option.
     */
    setSupressPushOnSocketSend(value: boolean): SparkMessage
    /**
     * Sets the Include In Push Count option.
     */
    setIncludeInPushCount(value: boolean): SparkMessage
    /**
     * Sets the Time To Live (Hours) option.
     */
    setExpireAfterHours(hours: number): SparkMessage
    /**
     * Limits the message delivery to only the device types supplied.
     */
    setDeviceTypes(deviceTypes: string[]): SparkMessage
    /**
     * Sets the data to send.
     */
    setMessageData(data: any): SparkMessage
    /**
     * Sets the playerId to send the message to.
     */
    setPlayerIds(playerIds: string[]): SparkMessage
    /**
     * Sends the message.
     */
    send(): void
}
