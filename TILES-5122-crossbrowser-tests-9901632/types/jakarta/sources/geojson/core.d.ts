import { MapModules } from '../../map/mapModules';
import { MapState, TileCoords, TileServerMetadata } from '../../types';
import { Int64 } from '../../utils/structures/int64';
import { SourceCore, SourceAttributes } from '../types';
import { TileType } from '../../tiles/tile';
import { GeoJsonSourceOptions, GeoJsonSourceOptionsUnion } from './';
export declare class GeoJsonSourceCore implements SourceCore {
    id: number;
    private modules;
    private options;
    type: TileType;
    private worker;
    private attributes;
    constructor(id: number, modules: MapModules, options: GeoJsonSourceOptionsUnion);
    fetchTile(tileCoords: TileCoords): Promise<TileServerMetadata[]>;
    generateTile(mapState: MapState, tileCoords: TileCoords, styleId: number, selectedIds: Int64[], devicePixelRatio: number): Promise<{
        results: import("../../types/tiles").GenerationResult[];
    }>;
    getObjectAttributes(id: Int64, tileKey: string): Promise<import("./types").GeoComponentProps | undefined>;
    abortTileFetch(coords: TileCoords): void;
    deleteTile(tileCoords: TileCoords): void;
    setAttributes(attributes: SourceAttributes): void;
    getAttributes(): SourceAttributes;
    destroy(): void;
    setData(data: string | GeoJsonSourceOptions['data']): Promise<boolean>;
}
