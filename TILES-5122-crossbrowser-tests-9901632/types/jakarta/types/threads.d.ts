/// <reference types="@2gis/gl-matrix" />
import { TileInfo, CollectorOutput, TileCoords, MapPoint, Bounds, StyleState } from './index';
import { Int64 } from '../utils/structures/int64';
import { RasterSet, Metatile } from './styles';
import { FirmsToFloorIndexMap } from './floors';
import { SourceAttributes } from '../sources/types';
import { CommPoiEventCommPoi } from './events';
export declare type SetMetatile = (hash: number, metatile: Metatile) => void;
export declare type AddNewRasterSets = (styleId: number, newRasterSets: RasterSet[]) => void;
export interface FetchTileData {
    coords: TileCoords;
    tileServer: string;
    tileSet: string;
    tileProtocol: string;
    tileKey: string;
    subdomains: string[];
    appId: string;
    lang: string;
    defaultLang?: string;
    sessionId?: string;
}
export interface GenerateTileData {
    tileInfo: TileInfo;
    pixelRatio: number;
    selectedIds: Int64[];
    styleId: number;
    styleState: StyleState;
    sourceId: number;
    sourceAttrs: SourceAttributes;
    floorsEnabled: boolean;
    hoverId?: Int64;
    isDefaultSource?: boolean;
    generateOnlySelectedPoi?: boolean;
    generateOnlyHoveredPoi?: boolean;
    areTileBoundsVisible?: boolean;
    modelsPath?: string;
}
export interface ModelData {
    url: string;
    id: Int64;
    offset: Vec2;
    matrix: Mat4;
    regionId: number;
    metatileHash: number;
    pixelRatio: number;
    selected: boolean;
    styleState: StyleState;
    styleId: number;
}
export interface TileGeneratedData {
    regionId: number;
    metatileHash: number;
    styleId: number;
    collectorOutput: CollectorOutput;
}
export interface ProcessTileResponse {
    results: TileGeneratedData[];
    transferable: ArrayBuffer[];
}
export interface PackRastersResponse {
    packedRasters: Uint16Array | undefined;
}
export interface ProcessFloorResponse {
    tileCoords: TileCoords;
    collectorOutput: CollectorOutput;
    styleId: number;
}
export interface ProcessPersonalPoiResponse {
    collectorOutput: CollectorOutput;
    styleId: number;
}
export interface LoadFloorSuccessResponse {
    type: 'success';
    center: MapPoint;
    defaultFloor: number;
    floors: Array<{
        ids: string[];
        name: string;
    }>;
    buildings: string[];
    bound: Bounds;
    firmsToFloorIndexMap: FirmsToFloorIndexMap;
}
export interface LoadFloorErrorResponse {
    type: 'error';
    errorStatus: number;
}
export interface ProcessModelResponse {
    objects: CollectorOutput;
    textures: RawTextures | BitmapTextures;
    transferable?: any[];
}
export interface RawTextures {
    isBitmap: false;
    data: Array<ArrayBuffer | Uint8Array>;
    transferable?: ArrayBuffer[];
}
export interface BitmapTextures {
    isBitmap: true;
    data: ImageBitmap[];
    transferable?: ImageBitmap[];
}
export declare type PrepareAtlasResponse = RawTextures | BitmapTextures | undefined;
export interface ProcessLabelsResponse {
    collectorOutput: CollectorOutput;
    survivedLabelBoxIds: number[];
    survivedCommPois: CommPoiEventCommPoi[];
    transferable: any[];
    labels?: ArrayBuffer;
}
