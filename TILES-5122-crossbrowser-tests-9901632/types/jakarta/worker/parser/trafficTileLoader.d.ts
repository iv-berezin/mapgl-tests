import { TileCoords } from '../../types';
import { TrafficTileServerData } from '../../types/traffic';
export declare class TrafficTileLoader {
    private cache;
    private pendingRequests;
    constructor();
    fetch(coords: TileCoords, tileServer: string, tileProtocol: string, regionIds: number[], timestamp: number): Promise<void>;
    get(key: string): TrafficTileServerData | undefined;
    delete(key: string): void;
    abortRequest(key: string): void;
}
