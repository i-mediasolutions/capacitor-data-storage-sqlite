import { WebPlugin } from '@capacitor/core';
import type { CapacitorDataStorageSqlitePlugin, capEchoOptions, capEchoResult, capDataStorageOptions, capDataStorageResult, capFilterStorageOptions, capKeysResult, capKeysValuesResult, capTablesResult, capOpenStorageOptions, capTableStorageOptions, capValueResult, capValuesResult, capStorageOptions } from './definitions';
export declare class CapacitorDataStorageSqliteWeb extends WebPlugin implements CapacitorDataStorageSqlitePlugin {
    private mDb;
    echo(options: capEchoOptions): Promise<capEchoResult>;
    openStore(options: capOpenStorageOptions): Promise<void>;
    closeStore(options: capStorageOptions): Promise<void>;
    isStoreOpen(options: capStorageOptions): Promise<capDataStorageResult>;
    isStoreExists(options: capStorageOptions): Promise<capDataStorageResult>;
    setTable(options: capTableStorageOptions): Promise<void>;
    set(options: capDataStorageOptions): Promise<void>;
    get(options: capDataStorageOptions): Promise<capValueResult>;
    remove(options: capDataStorageOptions): Promise<void>;
    clear(): Promise<void>;
    iskey(options: capDataStorageOptions): Promise<capDataStorageResult>;
    keys(): Promise<capKeysResult>;
    values(): Promise<capValuesResult>;
    filtervalues(options: capFilterStorageOptions): Promise<capValuesResult>;
    keysvalues(): Promise<capKeysValuesResult>;
    deleteStore(options: capOpenStorageOptions): Promise<void>;
    isTable(options: capTableStorageOptions): Promise<capDataStorageResult>;
    tables(): Promise<capTablesResult>;
    deleteTable(options: capTableStorageOptions): Promise<void>;
}
