/**
 * Thanks to @jcular
 */
interface SparkGameDataService {
    queryItems(type: string, condition: SparkDataCondition, sortOrder?: SparkDataSortOrder): SparkDataQueryResult
}
