export interface TrafficEdgeServerData {
    geo: number[][][];
    normals: number[][][];
    road: number;
    type?: number;
    zLevel?: number;
    color?: number;
}
export interface TrafficTileServerData {
    x: number;
    y: number;
    z: number;
    tile: TrafficEdgeServerData[];
}
export declare type TrafficServerData = TrafficTileServerData[];
export interface TrafficServerRegionMetadata {
    time: number;
    score: number;
    id: number;
}
export declare type TrafficServerMetadata = TrafficServerRegionMetadata[];
