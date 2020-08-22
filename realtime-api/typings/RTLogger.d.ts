/**
 * Allows log records to be written to the realtime.log collection
 */
interface RTLogger {
    /**
     * Logs a message at DEBUG level
     */
    debug(msg: any): void
    /**
     * Logs a message at ERROR level
     */
    error(msg: any): void
    /**
     * Logs a message at INFO level
     */
    info(msg: any): void
    /**
     * Logs a message at WARN level
     */
    warn(msg: any): void
}
