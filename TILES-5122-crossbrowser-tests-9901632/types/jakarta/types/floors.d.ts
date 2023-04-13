/// <reference types="@2gis/gl-matrix" />
import { Bounds, MapPoint, TileCoords } from './index';
export interface FirmsToFloorIndexMap {
    [firmId: string]: number;
}
export interface ComplexDescriptor {
    id: string;
    regionId: number;
    metatileHash: number;
    bound: Bounds;
    buildings: string[];
    center: MapPoint;
    defaultFloor: number;
    floors: Array<{
        ids: string[];
        name: string;
    }>;
    firmsToFloorIndexMap: FirmsToFloorIndexMap;
}
export interface FloorEntity {
    id?: string;
    areaId: number;
    coordinates: Vec2;
    firmId?: string;
    floorIndex: number;
    floorName: string;
    iconId: number;
    humanReadableIconId: string;
    priority: number;
    text?: string;
    text2?: string;
    textPriority: number;
    sublayer: string;
    floorId: string;
    buildingId: string;
}
export interface FloorsComplexServerData {
    address: string;
    bound: Bounds;
    branchCount: number;
    branchId: string;
    buildings: string[];
    hybrids: string[];
    center: MapPoint;
    centroid: Vec2;
    defaultFloor: number;
    entities: FloorEntity[];
    floorCount: number;
    floorNames: string[];
    floorGeometries: Array<{
        name: string;
        rooms: RoomServerData[];
        ids: string[];
    }>;
    hull: Vec2[];
    id: string;
    metaRubrics: Array<{
        id: string;
        orgCount: number;
    }>;
    name: string;
    regionId: number;
    scaleFactor: number;
    type: 'mall';
    tileCoords: [number, number, number];
}
export interface FloorsComplexData extends Omit<FloorsComplexServerData, 'tileCoords'> {
    tileCoords: TileCoords;
}
export interface RoomServerData {
    area: Uint8Array[];
    firmIds: string[];
    id: number;
    floorId: string;
    buildingId: string;
    isIsland: boolean;
    type: number;
    sublayer: string;
    areaSublayer: string;
    wallSublayer?: string;
    wallSide: Uint8Array[];
    wallTop: Uint8Array[];
}
