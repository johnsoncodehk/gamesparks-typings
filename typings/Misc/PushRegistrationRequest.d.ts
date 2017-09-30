declare namespace SparkRequests {
    /**
     * Registers the current device for push notifications. Currently GameSparks supports iOS, Android (GCM), FCM, Kindle, Viber & Microsoft Push notifications.
     * Supply the device type, and the push notification identifier for the device.
     */
    class PushRegistrationRequest extends _Request<_PushRegistrationResponse> {
        /**
         * The type of id, valid values are ios, android, fcm, wp8, w8, kindle or viber
         */
        deviceOS: string;
        /**
         * The push notification identifier for the device
         */
        pushId: string;
    }
    class _PushRegistrationResponse extends _Response {
        /**
         * The type of id, valid values are ios, android, fcm, wp8, w8, kindle or viber
         */
        deviceOS: string;
        /**
         * The push notification identifier for the device
         */
        pushId: string;
    }
}
