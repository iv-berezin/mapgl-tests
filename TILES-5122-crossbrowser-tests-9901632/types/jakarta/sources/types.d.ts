import { TileType } from '../tiles/tile';
import { MapState, TileCoords, TileServerMetadata } from '../types';
import { Int64 } from '../utils/structures/int64';
import { GeneratedTileOptions, GenerationResult } from '../types/tiles';
export declare type SourceAttributeValue = number | string | boolean;
export interface SourceAttributes {
    [key: string]: SourceAttributeValue;
}
export interface FeatureState {
    [key: string]: number | string | boolean | null;
}
export interface FeatureStateMap {
    [key: string]: FeatureState;
}
export interface BinaryFeatureStateAttribute {
    buffer: ArrayBuffer;
    stride: number;
    offset: number;
}
export interface BinaryFeatureStateMap {
    size: number;
    attributes: {
        [name: string]: BinaryFeatureStateAttribute;
        id: BinaryFeatureStateAttribute;
    };
}
export interface SourceCore {
    id: number;
    type: TileType;
    fetchTile: (tileCoords: TileCoords, mapState: MapState) => Promise<TileServerMetadata[] | undefined>;
    generateTile: (mapState: MapState, tileCoords: TileCoords, styleId: number, selectedIds: Int64[], devicePixelRatio: number, generatedTileOptions?: GeneratedTileOptions) => Promise<{
        results: GenerationResult[];
    }>;
    abortTileFetch: (tileCoords: TileCoords) => void;
    deleteTile: (tileCoords: TileCoords) => void;
    setAttributes: (attributes: SourceAttributes) => void;
    getAttributes: () => SourceAttributes;
    destroy: () => void;
}
export interface Source {
    type: SourceType;
    setAttributes: (attributes: SourceAttributes) => void;
    getAttributes: () => SourceAttributes;
    destroy: () => void;
    getId: () => number;
}
export declare type SourceType = 'default' | 'geojson' | 'raster' | 'dem' | 'zenith';
