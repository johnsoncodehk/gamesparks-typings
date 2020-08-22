/**
 * The Spark object that is available to all scripts is the entry point into the GameSparks API.
 * It can be used for getting access to objects and functions within the GameSparks platform.
 * This interface is available in all scripts using the notation "Spark."
 * @example
 * To return a JSON representation of the Object being acted upon
 * var data = Spark.getData();
 */
interface Spark {
    /**
     * Returns a SparkPlayer object that represents the player who either sent, or is going to receive the object that is invoking this script.
     * @validity All except Global Message Scripts
     * @example
     * var player = Spark.getPlayer();
     */
    getPlayer(): SparkPlayer
    /**
     * Returns a SparkPlayer object that represents the player that has the supplied GameSparks player ID.
     * @validity All Scripts
     * @param playerId the unique player identifier.
     * @example
     * var player = Spark.loadPlayer(myplayerid);
     */
    loadPlayer(playerId: string): SparkPlayer
    /**
     * Returns a SparkPlayer object that represents the player that in the supplied external system has the supplied external ID.
     * @validity All Scripts
     * @param externalSystem the unique external system identifier, supplied as a two letter ID. The options are: {FACEBOOK:FB, AMAZON:AM, GAME_CENTER:GC
     * GOOGLE_PLAY:GY , GOOGLE_PLUS:GP, KONGREGATE:KO, PSN:PS, QQ:QQ, STEAM:ST, TWITCH:TC, TWITTER:TW, VIBER:VB, WECHAT:WC, XBOX:XB
     * XBOXONE:X1, NINTENDO:NX}
     * @param externalId the player identifier in the external system.
     * @example
     * var player = Spark.loadPlayerByExternalId("FB",myplayerexternalid);
     */
    loadPlayerByExternalId(externalSystem: string, externalId: string): SparkPlayer
    /**
     * Allows a script to load a SparkChallenge object by it's ID.
     * This is mainly used on LogChallengeEventRequests where the ID of the SparkChallenge can be retrieved using Spark.data.challengeId.
     * @validity All Scripts
     * @param challengeInstanceId the unique challenge identifier.
     * @example
     * var myChallenge = Spark.getChallenge(Spark.data.challengeId);
     */
    getChallenge(challengeInstanceId: string): SparkChallenge
    /**
     * Sends a ScriptMessage to one or more spark Players.
     * The 'data' attribute of the SparkMessage will match the data parameter supplied.
     * @deprecated use Spark.message(extCode)
     * @validity All Scripts
     * @param data the JSON Data to send.
     * @param players the SparkPlayer array to send the message to.
     * @example
     * Spark.sendMessage({"alert" : "You've just won a car!"}, myplayers);
     */
    sendMessage(data: any, players: SparkPlayer[]): void
    /**
     * Sends a ScriptMessage to one or more spark Players.
     * The 'data' attribute of the SparkMessage will match the data parameter supplied.
     * The extCode parameter will be used to look up the configuration for the message from ScriptMessage Extensions
     * @deprecated use Spark.message(extCode)
     * @validity All Scripts
     * @param data the JSON Data to send.
     * @param extCode The short code of the ScriptMessage extension, if not found, the default ScriptMessage will be used.
     * @param players the SparkPlayer array to send the message to. If empty or null no message will be sent.
     * @example
     * Spark.sendMessageExt({"alert" : "You've just won a car!"},"CODE1" ,myplayers);
     */
    sendMessageExt(data: any, extCode: string, players: SparkPlayer[]): void
    /**
     * Sends a ScriptMessage to one or more spark Players. Push notifications will be supressed for this message
     * The 'data' attribute of the SparkMessage will match the data parameter supplied.
     * @deprecated use Spark.message(extCode)
     * @validity All Scripts
     * @param data the JSON Data to send.
     * @param players the SparkPlayer array to send the message to.
     * @example
     * Spark.sendMessage({"alert" : "You've just won a car!"}, myplayers);
     */
    sendMessageWithoutPush(data: any, players: SparkPlayer[]): void
    /**
     * Sends a ScriptMessage to one or more spark Players.
     * The 'data' attribute of the SparkMessage will match the data parameter supplied.
     * @deprecated use Spark.message(extCode)
     * @validity All Scripts
     * @param data the JSON Data to send.
     * @param playerIds An array of player id strings to send the message to.
     * @example
     * Spark.sendMessage({"alert" : "You've just won a car!"}, myplayerids);
     */
    sendMessageById(data: any, playerIds: string[]): void
    /**
     * Sends a ScriptMessage to one or more spark Players.
     * The 'data' attribute of the SparkMessage will match the data parameter supplied.
     * The extCode parameter will be used to look up the configuration for the message from ScriptMessage Extensions
     * @deprecated use Spark.message(extCode)
     * @validity All Scripts
     * @param data the JSON Data to send.
     * @param extCode The short code of the ScriptMessage extension, if not found, the default ScriptMessage will be used.
     * @param playerIds An array of player id strings to send the message to.
     * @example
     * Spark.sendMessage({"alert" : "You've just won a car!"}, myplayerids);
     */
    sendMessageByIdExt(data: any, extCode: string, playerIds: string[]): void
    /**
     * Sends a ScriptMessage to one or more spark Players.
     * The 'data' attribute of the SparkMessage will match the data parameter supplied. Push notifications will be supressed for this message
     * @deprecated use Spark.message(extCode)
     * @validity All Scripts
     * @param data the JSON Data to send.
     * @param playerIds An array of player id strings to send the message to.
     * @example
     * Spark.sendMessage({"alert" : "You've just won a car!"}, myplayerids);
     */
    sendMessageByIdWithoutPush(data: any, playerIds: string[]): void
    /**
     * Creates a SparkMessage object using the default configuration from the portal.
     * Providing an ext code allows different configurations to be used as th template.
     * @validity All Scripts
     * @param extCode (Optional) The extCode of a scriptMessageExtension, if null or not found the standard ScriptMessage configuration will be used.
     * @returns a SparkMessageobject
     * @example
     * Spark.message("myExtCode"));
     */
    message(extCode: string): SparkMessage
    /**
     * Locks a challenge for writing. Whilst the script 'owns' this lock no other script can modify the challenge
     * Useful for situations where there may be concurrent access required to a SparkChallengeObject.
     * Other scripts can continue to read the Challenge
     * If a Script gains a lock to the object, it will be released once the release method is called, or if the release method is not called, when the script terminates.
     * @validity All Scripts
     * @param challenge the challenge to lock
     * @example
     * Spark.lock(mychallenge);
     */
    lock(challenge: SparkChallenge): void
    /**
     * Unlocks the challenge.
     * This makes it available for other scripts to acquire a lock on it.
     * @validity All Scripts
     * @param challenge the challenge to unlock
     * @example
     * Spark.unlock(mychallenge);
     */
    unlock(challenge: SparkChallenge): void
    /**
     * Creates a lock on an arbitrary key. Whilst the script 'owns' this lock no other script can lock on the same key, and will be blocked until the lock is released.
     * Useful for situations where there may be concurrent access required to an object or data.
     * Locks are reentrant and recursive, i.e. if you lock the same key twice, you will need to call unlockKey() twice to completely release the lock.
     * Alternatively, an unlockKeyFully() call will release the lock regardless of how many times it has been locked by this thread.
     * Locks will always be released fully when the script terminates.
     * @validity All Scripts
     * @param lockKey a unique identifier for the lock
     * @param tryMillis if another thread has the lock, how long to block and attempt to acquire the lock before giving up
     * @returns true if the lock was acquired, false otherwise
     * @example
     * var gotLock = Spark.lockKey(lockName, 0);
     */
    lockKey(lockName: string, tryMillis: number): boolean
    /**
     * Releases a lock on the given key, assuming it is held by this thread.
     * This makes it available for other scripts to acquire a lock on it.
     * Note that locks are recursive, i.e. if you have locked twice on this key, you must unlock twice before other scripts can gain this lock.
     * @validity All Scripts
     * @param lockKey the key that was previously locked
     * @returns true if the lock was released, false otherwise
     * @example
     * Spark.unlock(lockName);
     */
    unlockKey(lockName: string): boolean
    /**
     * Fully releases all locks on the given key, assuming they are held by this thread.
     * This makes it immediately available for other scripts to acquire a lock on it, regardless of how many times you have locked it previously.
     * @validity All Scripts
     * @param lockKey the key that was previously locked
     * @returns true if the lock was released, false otherwise
     * @example
     * Spark.unlockKeyFully(lockName);
     */
    unlockKeyFully(lockName: string): boolean
    /**
     * Allows the script to detect if there have been any script errors set during the request or response.
     * @validity All Scripts
     * @example
     * var hasErrors = Spark.hasScriptErrors();
     */
    hasScriptErrors(): boolean
    /**
     * Allows an error to be added to either the request or a response being acted upon.
     * In the case of requests this will cause the request to be rejected. This is useful if you have some custom logic that needs to determine whether GameSparks should process the request.
     * The 'error' object of the Response or Message objects will contain an entry that matches the supplied parameters.
     * @validity All Scripts
     * @param key the key to the data
     * @param value the data, can be either complex JSON or simple types
     * @example
     * Spark.setScriptError("myerrorkey", {"test":12345});
     */
    setScriptError(key: string, value: any): void
    /**
     * Gets the value of the script error for the given key.  In the case of response scripts this may have been set in the request.
     * @param name The name in the name value pair
     * @returns a JSON object
     * @example
     * var error = Spark.getScriptError("name");
     */
    getScriptError(key: string): any
    /**
     * Removes a value from a name value pair structure containing any script errors that have previously been set.
     * @param name The name in the name value pair
     * @example
     * Spark.removeScriptError("name");
     */
    removeScriptError(key: string): void
    /**
     * Removes all script errors that have been set
     * @example
     * Spark.removeAllScriptErrors();
     */
    removeAllScriptErrors(): void
    /**
     * Provides access to a SparkLog interface
     * @validity All Scripts
     * @example
     * var logger = Spark.getLog();
     */
    getLog(): SparkLog
    /**
     * Messages are targeted to multiple players.
     * This method gives access to the ID's of all the target players.
     * This can be accessed in both Global Message Scripts and User Message Scripts
     * The ID's can in turn be used with getPlayer to access the player details
     * @validity lobal Message Scripts
     * @returns  An array of Id's
     * @example
     * var playerIds = Spark.getPlayerIds();
     */
    getPlayerIds(): string[]
    /**
     * Allows a script to post a LogEventRequest on behalf of the current player.
     * Can be useful to post a score to a global leaderboard when a score has been posted to a challenge.
     * @validity All Scripts
     * @example
     * Spark.logEvent("HS", {"HS":234});
     */
    logEvent(eventKey: string, values: any): void
    /**
     * Provides access to a SparkHttp interface
     * @validity All Scripts
     * @param url the URL of the service to connect to
     * @example
     * var httpSender = Spark.getHttp();
     */
    getHttp(url: string): SparkHttp
    /**
     * Provides access to a SparkHttp interface
     * @validity All Scripts
     * @param url the URL of the service to connect to
     * @param timeout (Optional) the max time in milliseconds to wait for the response, if null the system default will be used.
     * @example
     * var httpSender = Spark.getHttp();
     */
    getHttp(url: string, timeout: number): SparkHttp
    /**
     * Allows a script to dismiss a given message. 
     * Returns true if a message was dismissed. This method does not check if the message belongs to the current user.
     * @validity All Scripts
     * @param messageId the id of the message to dismiss
     * @returns true if the message was dismissed
     * @example
     * Spark.dismissMessage("528b3411e4b09c9ee8497949");
     */
    dismissMessage(messageId: string): boolean
    /**
     * Gets a metadata collection by name, this collection is read only and can be queried using the methods defined in the SparkMongoCollectionReadOnly object.
     * @validity All Scripts
     * @param collectionName the name of the collection you wish to access
     * @example
     * var myMetaCollection = Spark.metaCollection("metatest");
     */
    metaCollection(collectionName: string): SparkMongoCollectionReadOnly
    /**
     * Provides access to file operations via a SparkFiles interface
     * @validity All Scripts
     * @example
     * var files = Spark.getFiles();
     */
    getFiles(): SparkFiles
    /**
     * Provides access to an uploaded file via a SparkXmlReader interface
     * @deprecated use Spark.getFiles().uploadedXml(uploadId)
     * @validity All Scripts
     * @param uploadId the id of the uploaded file
     * @example
     * var reader = Spark.uploadedXml("myUploadId");
     */
    uploadedXml(uploadId: string): SparkXmlReader
    /**
     * Provides access to an uploaded file via a JSON object
     * @deprecated use Spark.getFiles().uploadedJson(uploadId)
     * @validity All Scripts
     * @param uploadId the id of the uploaded file
     * @returns A JSON object
     * @example
     * var reader = Spark.uploadedJson("myUploadId");
     */
    uploadedJson(uploadId: string): any
    /**
     * Provides access to a downloadable file via a SparkXmlReader interface
     * @deprecated use Spark.getFiles().downloadableXml(shortCode)
     * @validity All Scripts
     * @param shortCode the short code for the downloadable file
     * @example
     * var reader = Spark.downloadableXml("shortCode");
     */
    downloadableXml(shortCode: string): SparkXmlReader
    /**
     * Provides access to a downloadable file via a JSON object
     * @deprecated use Spark.getFiles().downloadableJson(shortCode)
     * @validity All Scripts
     * @param shortCode the short code for the downloadable file
     * @example
     * var reader = Spark.downloadableJson("shortCode");
     */
    downloadableJson(shortCode: string): any
    /**
     * Send an email via the SendGrid email delivery provider
     * @validity All Scripts
     * @param username your SendGrid accounet username
     * @param password your SendGrid account password
     * @example
     * Spark.sendGrid(username, password);
     */
    sendGrid(username: string, password: string): SendGrid
    /**
     * Utility to schedule execution of a module in the future
     * @validity All Scripts
     * @example
     * Spark.getScheduler();
     */
    getScheduler(): SparkScheduler
    /**
     * Utility to cache complex objects in memory
     * @validity All Scripts
     * @example
     * Spark.getCache();
     */
    getCache(): SparkCache
    /**
     * Sends a Request to the platform, this mimics the process a client uses to send requests
     * The request is sent as the current player, if there is no current player the method will fail.
     * @validity All Scripts
     * @param returns The response as would be returned to the client
     * @example
     * Spark.sendRequest({"@class": ".LogEventRequest", "eventKey": "SOT", "SC": "1000"});
     */
    sendRequest(request: any): any
    /**
     * Sends a Request to the platform, this mimics the process a client uses to send requests
     * The request is sent as the player identified by playerId, if there playerId is invalid the requst will fail.
     * @validity All Scripts
     * @param returns The response as would be returned to the client
     * @example
     * Spark.sendRequestAs({"@class": ".LogEventRequest", "eventKey": "SOT", "SC": "1000"}, "1234567890");
     */
    sendRequestAs(request: any, playerId: string): any
    /**
     * Returns a reference to a SparkRedis object
     * @validity All Scripts
     * @example
     * Spark.getRedis();
     */
    getRedis(): SparkRedis
    /**
     * Returns a reference to a SparkLeaderboards object, used to access the leaderboards for this game.
     * @validity All Scripts
     * @example
     * Spark.getLeaderboards();
     */
    getLeaderboards(): SparkLeaderboards
    /**
     * Returns the client IP address of the current websocket connection (if any).
     * @validity All Scripts
     * @example
     * var ip = Spark.getClientIp();
     */
    getClientIp(): string
    /**
     * Returns configuration information about the currently published game.
     * @validity All Scripts
     * @example
     * var myGameConfig = Spark.getConfig();
     */
    getConfig(): SparkConfig
    /**
     * Returns a configuration object for cloud-code scripts.
     * @validity All Scripts
     * @example
     * var options = Spark.getSparkScriptOptions();
     */
    getSparkScriptOptions(): SparkScriptOptions
    /**
     * Returns a reference to a SparkTeams object, used to access the teams for this game.
     * @validity All Scripts
     * @example
     * Spark.getTeams();
     */
    getTeams(): SparkTeams
    /**
     * Returns a reference to a SparkMultiplayer object, used to access the platform's multiplayer capabilities.
     * @validity All Scripts
     * @example
     * Spark.getMultiplayer();
     */
    getMultiplayer(): SparkMultiplayer
    /**
     * Returns a reference to a SparkProperties object, used to access the Properties and Property Sets configured against a game.
     * @validity All Scripts
     * @example
     * Spark.getProperties();
     */
    getProperties(): SparkProperties
    /**
     * Returns a reference to a SparkBulkScheduler object, used to perform operations on multiple players at once.
     * @validity All Scripts
     * @example
     * Spark.getBulkScheduler();
     */
    getBulkScheduler(): SparkBulkScheduler
    /**
     * Returns a reference to a SparkDigest object.
     * @validity All Scripts
     * @example
     * Spark.getDigester();
     */
    getDigester(): SparkDigest
    /**
     * Returns the type of the credential used for the current connection (if any).
     * @validity All Scripts
     * @example
     * var credentialType = Spark.getCredentialType();
     */
    getCredentialType(): string
    /**
     * Returns the session ID of the current player (if any).
     * @validity All Scripts
     * @example
     * var sessionId = Spark.getSessionId();
     */
    getSessionId(): string
    /**
     * Returns a utility class to enable uploading and retrieval of uploadables from cloud code.
     * @validity All Scripts
     * @example
     * var util = Spark.getUploadableUtils();
     */
    getUploadableUtils(): SparkUploadableUtils
    /**
     * Returns the Game Data Service
     * @validity All Scripts
     * @example
     * var api = Spark.getGameDataService();
     */
    getGameDataService(): SparkGameDataService
    /**
     * Terminates execution of the current script
     * @example
     * Spark.exit();
     */
    exit(): void
    /**
     * Gets the value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.
     * @param name The name in the name value pair
     * @returns a JSON object
     * @example
     * var value = Spark.getPlayer().getScriptData("name");
     */
    getScriptData(name: string): any
    /**
     * Allows arbitrary data to be added to the object being acted upon.
     * Sets a value into a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.
     * The data is visible to the client
     * This data is sent to the player(s) in the 'scriptData' attribute of the Request, Response or Message object.
     * When scriptData is set to a request, it gets set against the response that will be returned to the player. This allows basic communication between request and response scripts.
     * @param name The name in the name value pair
     * @param value The value to set in the name value pair
     * @example
     * Spark.getPlayer().setScriptData("name", "value");
     */
    setScriptData(name: string, value: any): void
    /**
     * Removes a value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.
     * @param name The name in the name value pair
     * @example
     * Spark.getPlayer().removeScriptData("name");
     */
    removeScriptData(name: string): void
    /**
     * Removes all script data that has been set
     * @example
     * Spark.removeAllScriptData();
     */
    removeAllScriptData(): void
    /**
     * Gets the number of milliseconds this script has left to run before a longRunningScriptError is thrown
     */
    getRemainingMilliseconds(): number
    /**
     * A JSON version of the object being scripted. Can be either a Request, Response or Message.
     * The structure of the JSON is as the Client either receives or sends it. Attributes can be read, but not changed
     * @validity All Scripts
     * @example
     * var userName = Spark.getData().userName;
     */
    getData(): any
}
