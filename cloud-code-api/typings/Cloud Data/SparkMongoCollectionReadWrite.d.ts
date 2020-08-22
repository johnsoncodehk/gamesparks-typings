/**
 * Provides read write access to a mongo collection.
 * All methods defined in  SparkMongoCollectionReadOnly are available in this object along with those listed below.
 * @example
 * var myRuntimeCollection = Spark.runtimeCollection('runtimetest');
 */
interface SparkMongoCollectionReadWrite {
    /**
     * Returns the number of documents in this collection
     * @returns the number of documents
     * @example
     * var count = myMetaCollection.count();
     */
    count(): number
    /**
     * Returns the number of documents that match the supplied query
     * @returns the number of documents
     * @example
     * var count = Spark.metaCollection('metatest').count({"metafield" : "metavalue"});
     */
    count(query: any): number
    /**
     * Returns a list of distinct values for the given key in the collection
     * @param key the key to use in the query
     * @returns an object array
     * @example
     * var keys = Spark.metaCollection('metatest').distinct("metafield");
     */
    distinct(key: string): any
    /**
     * Returns a list of distinct values for the given key in the collection that match the supplied query
     * @param key the key to use in the query
     * @param query the Mongo query
     * @returns an object array
     * @example
     * var keys = Spark.metaCollection('metatest').distinct("metafield", {"metafield1":{"$gte" : 5}});
     */
    distinct(key: string, query: any): any
    /**
     * Drops or removes the specified index from a collection.
     * @param keys the index definition used in ensureIndex.
     * @example
     * Spark.metaCollection('metatest').dropIndex({"metafield" : 1});
     */
    dropIndex(keys: any): void
    /**
     * Drops or removes the specified index from a collection.
     * @param name the name of the index to drop.
     * @example
     * Spark.metaCollection('metatest').dropIndexByName("myIndex");
     */
    dropIndexByName(name: string): void
    /**
     * Creates an index on the specified fields if the index does not already exist.
     * @param keys the index definition used in ensureIndex.
     * @example
     * Spark.metaCollection('metatest').ensureIndex({"metafield" : 1, "metafield1" : 1});
     */
    ensureIndex(keys: any): void
    /**
     * Creates an index on the specified fields if the index does not already exist.
     * @param keys the index definition used in ensureIndex.
     * @param optionsIN index options
     * @example
     * Spark.metaCollection('metatest').ensureIndex({"metafield" : 1, "metafield1" : 1}, {"name":"myIndex"});
     */
    ensureIndex(keys: any, optionsIN: any): void
    /**
     * Returns a SparkMongoCursor of all documents in this collection
     * @example
     * var results = Spark.metaCollection('metatest').find();
     */
    find(): SparkMongoCursor
    /**
     * Returns a SparkMongoCursor of all documents in this collection that match the supplied query
     * @param query a Mongo query
     * @example
     * var results = Spark.metaCollection('metatest').find({"metatest1" : {"$gt" : 1}});
     */
    find(query: any): SparkMongoCursor
    /**
     * Returns a SparkMongoCursor of all documents in this collection that match the supplied query.
     * The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.
     * @param query  a Mongo query
     * @param fields the fields to return
     * @example
     * var results = Spark.metaCollection('metatest').find({"metatest1" : {"$gt" : 1}}, {"metatest" : 1});
     */
    find(query: any, fields: any): SparkMongoCursor
    /**
     * Returns the first document from the collection according to natural order (which reflects the order of documents on the disk)
     * @returns A JSON object
     * @example
     * var results = Spark.metaCollection('metatest').findOne();
     */
    findOne(): any
    /**
     * Returns one document that satisfies the specified query criteria.
     * If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.
     * @param query a Mongo query
     * @example
     * var result = Spark.metaCollection('metatest').findOne({"metatest1" : {"$gt" : 1}}
     */
    findOne(query: any): any
    /**
     * Returns one document that satisfies the specified query criteria.
     * If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.
     * The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.
     * @param query a Mongo query
     * @param fields the fields to return
     * @example
     * var result = Spark.metaCollection('metatest').findOne({"metatest1" : {"$gt" : 1}}, {"metatest" : 1});
     */
    findOne(query: any, fields: any): any
    /**
     * Returns one document that satisfies the specified query criteria.
     * If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.
     * The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.
     * @param query a Mongo query
     * @param fields the fields to return
     * @param orderBy the order clause
     * @example
     * var result = Spark.metaCollection('metatest').findOne({"metatest1" : {"$gt" : 1}}, {"metatest" : 1});
     */
    findOne(query: any, fields: any, orderBy: any): any
    /**
     * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with fields=null, remove=false, returnNew=false, upsert=false, sort=null
     * @param query Specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.
     * @param update  Must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.
     * @returns a JSON object
     * @example
     * var doc = myRuntimeCollection.findAndModify({"field" : "value"}, {"field" : 1}, {"field" : "value1"});
     */
    findAndModify(query: any, update: any): any
    /**
     * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with fields=null, remove=false, returnNew=false, upsert=false
     * @param query Specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.
     * @param sort Determines which document the operation will modify if the query selects multiple documents. findAndModify will modify the first document in the sort order specified by this argument.
     * @param update  Must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.
     * @returns a JSON object
     * @example
     * var doc = myRuntimeCollection.findAndModify({"field" : "value"},{"field" : 1}, {"field" : "value1"});
     */
    findAndModify(query: any, sort: any, update: any): any
    /**
     * Atomically modifies and returns a single document. By default, the returned document does not include the modifications made on the update. To return the document with the modifications made on the update, use the returnNew option.
     * @param query specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.
     * @param fields the fields to return
     * @param sort determines which document the operation will modify if the query selects multiple documents. findAndModify will modify the first document in the sort order specified by this argument.
     * @param remove must specify either the remove or the update field in the findAndModify command. When true, removes the selected document. The default is false.
     * @param update  must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.
     * @param returnNew when true, returns the modified document rather than the original. The findAndModify method ignores the new option for remove operations. The default is false.
     * @param upsert used in conjunction with the update field. When true, the findAndModify command creates a new document if the query returns no documents. The default is false.
     * @returns a JSON object
     * @example
     * var doc = myRuntimeCollection.findAndModify({"field" : "value"},{"field" : 1},false,{"field" : "value1"},true, {"field" : 1},false);
     */
    findAndModify(query: any, fields: any, sort: any, remove: boolean, update: any, returnNew: boolean, upsert: boolean): any
    /**
     * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with  fields=null, sort=null, remove=true, returnNew=false, upsert=false
     * @param query a Mongo query
     * @returns a JSON object
     * @example
     * var doc = myRuntimeCollection.findAndRemove({"field" : "value"});
     */
    findAndRemove(query: any): any
    /**
     * Inserts a document or documents into a collection.
     * @param documents A document or array of documents to insert into the collection.
     * @returns true if the operation was successful
     * @example
     * var success = myRuntimeCollection.insert({"field" : "value"}, {"field" : "value1"}, {"field" : "value2"});
     */
    insert(documents: any[]): boolean
    aggregate(firstOp: any, additionalOps: any[]): any
    /**
     * Generates the correct mongo update command to set and unset fields so the mongo record matches the newDocument.
     * This can greatly increase performance in documents where only a small amount of change has been made as only the required fields are modified.
     * If the existing document is null, the new document is inserted directly into the collection
     * @param existingDocument A document perviously retrieved from the database. The _id field of this document will be used to determine which document to update. If the document passed has no _id the call will fail.
     * @param newDocument The new state to persist in the database, and _id field in this document will be ignored.
     * @returns true if the operation was successful
     */
    applyChanges(existingDocument: any, newDocument: any): boolean
    /**
     * Return a list of the indexes for this collection. Each object in the list is the "info document" from MongoDB
     * @returns list of index documents
     * @example
     * var indexes = Spark.metaCollection('metatest').getIndexInfo();
     */
    getIndexInfo(): any
    /**
     * Gets the error (if there is one) from the previous operation on this connection.
     * @returns a JSON object with error and status information
     * @example
     * var errors = Spark.metaCollection('metatest').getLastError();
     */
    getLastError(): any
    /**
     * Updates an existing document or inserts a new document, depending on its document parameter.
     * If the document does not contain an _id field, then the save() method performs an insert. During the operation, mongo will add to the document the _id field and assign it a unique ObjectId.
     * If the document contains an _id field, then the save() method performs an upsert, querying the collection on the _id field. If a document does not exist with the specified _id value, the save() method performs an insert. If a document exists with the specified _id value, the save() method performs an update that replaces all fields in the existing document with the fields from the document.
     * @param document the document to save
     * @example
     * var success = myRuntimeCollection.save({"field" : "value"});
     */
    save(document: any): boolean
    /**
     * Removes any document from the collection that matches the supplied query.
     * Return a boolean indicating whether the remove was successful.
     * @param query the query
     * @returns true if the operation was successful
     * @example
     * var success = myRuntimeCollection.remove({"field" : "value"});
     */
    remove(query: any): boolean
    /**
     * Calls update(query, update, upsert, multi) with upsert=false and multi=false
     * @param query query (document) The selection criteria for the update. Use the same query selectors as used in the find() method
     * @param update update (document) The modifications to apply. For details see Update Parameter
     * @returns true if the operation was successful
     * @example
     * var success = myRuntimeCollection.update({"field" : "value"}, {"field" : "value1"});
     */
    update(query: any, update: any): boolean
    /**
     * Modifies an existing document or documents in a collection. The method can modify specific fields of existing document or documents or replace an existing document entirely, depending on the update parameter.
     * By default, the update() method updates a single document. If the multi option is set to true, the method updates all documents that match the query criteria.
     * @param query query (document) The selection criteria for the update. Use the same query selectors as used in the find() method
     * @param update update (document) The modifications to apply. For details see Update Parameter
     * @param upsert if set to true, creates a new document when no document matches the query criteria. The default value is false, which does not insert a new document when no match is found
     * @param multi multi (boolean) Optional. If set to true, updates multiple documents that meet the query criteria. If set to false, updates one document. The default value is false. For additional information, see Multi Parameter
     * @returns true if the operation was successful
     * @example
     * var success = myRuntimeCollection.update({"field" : "value"}, {"field" : "value1"}, false, false);
     */
    update(query: any, update: any, upsert: boolean, multi: boolean): boolean
    /**
     * Calls update(query, update, upsert, multi) with upsert=false and multi=true
     * @param query query (document) The selection criteria for the update. Use the same query selectors as used in the find() method
     * @param update update (document) The modifications to apply. For details see Update Parameter
     * @returns true if the operation was successful
     * @example
     * var success = myRuntimeCollection.updateMulti({"field" : "value"}, {"field" : "value1"});
     */
    updateMulti(query: any, update: any): boolean
}
