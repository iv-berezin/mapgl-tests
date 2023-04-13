import { TileServerData, NonAbortedFetchTileResolve } from '../../types';
import { FetchTileData } from '../../types/threads';
export declare class TileLoader {
    private cache;
    private pendingRequests;
    constructor();
    fetch({ coords, tileServer, tileSet, tileProtocol, subdomains, tileKey, appId, lang, defaultLang, sessionId, }: FetchTileData): Promise<NonAbortedFetchTileResolve | undefined>;
    get(key: string): TileServerData[];
    delete(key: string): void;
    abortRequest(key: string): void;
    destroy(): void;
}
