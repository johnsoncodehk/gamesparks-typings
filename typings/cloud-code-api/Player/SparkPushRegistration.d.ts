/**
 * The registration of a device to receive push notifications.
 * @example
 * var player = Spark.getPlayer().getPushRegistrations();
 */
interface SparkPushRegistration {
    /**
     * Gets the id of this registration.  This is the registrationId returned from the PushRegistrationResponse.
     * @example
     * pushRegistration.getId();
     */
    getId(): string
    /**
     * Returns the id that uniquely identifies the device to the 3rd party push service.
     * @example
     * pushRegistration.getPushId();
     */
    getPushId(): string
    /**
     * Returns the OS type for the device to which this registration belongs.
     * @example
     * pushRegistration.getDeviceOS();
     */
    getDeviceOS(): string
}
