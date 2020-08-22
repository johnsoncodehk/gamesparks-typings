/// <reference path="./references.d.ts" />

declare namespace SparkRequests {

    type date = string;
    type DBObject = any;
    type ScriptData = any;
    type Float = number;

    class _Request<T> {
        scriptData: any;
        Execute: () => T;
        ExecuteAs: (playerId: any) => T;
        Send: () => T;
        SendAs: (playerId: any) => T;
    }
    class _Response {
        error: any;
    }
}
