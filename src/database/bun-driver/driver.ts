import { Database } from "bun:sqlite";
import { CompiledQuery, DatabaseConnection, Driver, QueryResult } from "kysely";
import { BunSqliteDialectConfig } from "./config";

export class BunSqliteDriver implements Driver {
    readonly #config: BunSqliteDialectConfig;
    readonly #connectionMutex = new ConnectionMutex();

    #db?: Database;
    #connection?: DatabaseConnection;

    constructor(config: BunSqliteDialectConfig) {
        this.#config = { ...config };
    }

    async init(): Promise<void> {
        this.#db = this.#config.database;

        this.#connection = new BunSqliteConnection(this.#db);

        if (this.#config.onCreateConnection) {
            await this.#config.onCreateConnection(this.#connection);
        }
    }

    async acquireConnection(): Promise<DatabaseConnection> {
        // SQLite only has one single connection. We use a mutex here to wait
        // until the single connection has been released.
        await this.#connectionMutex.lock();
        return this.#connection!;
    }

    async beginTransaction(connection: DatabaseConnection): Promise<void> {
        await connection.executeQuery(CompiledQuery.raw("begin"));
    }

    async commitTransaction(connection: DatabaseConnection): Promise<void> {
        await connection.executeQuery(CompiledQuery.raw("commit"));
    }

    async rollbackTransaction(connection: DatabaseConnection): Promise<void> {
        await connection.executeQuery(CompiledQuery.raw("rollback"));
    }

    async releaseConnection(): Promise<void> {
        this.#connectionMutex.unlock();
    }

    async destroy(): Promise<void> {
        this.#db?.close();
    }
}

class BunSqliteConnection implements DatabaseConnection {
    readonly _db: Database;

    constructor(db: Database) {
        this._db = db;
    }

    streamQuery<R>(_compiledQuery: CompiledQuery, _chunkSize?: number): AsyncIterableIterator<QueryResult<R>> {
        throw new Error("Sqlite driver doesn't support streaming");
    }

    executeQuery<O>(compiledQuery: CompiledQuery): Promise<QueryResult<O>> {
        const { sql, parameters } = compiledQuery;
        const stmt = this._db.prepare(sql);

        return Promise.resolve({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            rows: stmt.all(parameters as any) as O[],
        });
    }
}

class ConnectionMutex {
    #promise?: Promise<void>;
    #resolve?: () => void;

    async lock(): Promise<void> {
        while (this.#promise) {
            await this.#promise;
        }

        this.#promise = new Promise(resolve => {
            this.#resolve = resolve;
        });
    }

    unlock(): void {
        const resolve = this.#resolve;

        this.#promise = undefined;
        this.#resolve = undefined;

        resolve?.();
    }
}
