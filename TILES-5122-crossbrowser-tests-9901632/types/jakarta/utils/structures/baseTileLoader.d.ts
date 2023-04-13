import { TileCoords } from '../../types';
declare type DataType = 'json' | 'arrayBuffer';
export interface TileLoaderResults<T> {
    rejected?: boolean;
    data?: T;
}
/**
 * Загрузчик тайлов любого типа
 */
export declare class BaseTileLoader<T> {
    private readonly dataType;
    private ignoredStatusCodes;
    private pendingRequests;
    constructor(dataType: DataType, ignoreMissingTiles?: boolean);
    fetch(coords: TileCoords, tileServerURLTemplate: (coords: TileCoords) => string): Promise<TileLoaderResults<T>>;
    destroy(): void;
    abortRequest(key: string): void;
}
export {};
