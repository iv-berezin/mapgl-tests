import { SourceAttributes, SourceCore } from '../types';
import { MapState, TileServerMetadata, TileCoords } from '../../types';
import { TileType } from '../../tiles/tile';
import { MapModules } from '../../map/mapModules';
import { RasterTileSourceOptions } from './index';
import { TileGeneratedData } from '../../types/threads';
export declare class RasterTileSourceCore implements SourceCore {
    id: number;
    private modules;
    private options;
    type: TileType;
    private attributes;
    private tiles;
    private textureIndices;
    private readonly sourceAttrs;
    private readonly url;
    private readonly tileLoader;
    constructor(id: number, modules: MapModules, options: RasterTileSourceOptions);
    deleteTextures(): void;
    abortTileFetch(tileCoords: TileCoords): void;
    deleteTile(tileCoords: TileCoords): void;
    fetchTile(tileCoords: TileCoords): Promise<TileServerMetadata[] | undefined>;
    generateTile(mapState: MapState, tileCoords: TileCoords): Promise<{
        results: TileGeneratedData[];
        transferable: (ArrayBuffer | ImageBitmap)[];
    }>;
    getAttributes(): SourceAttributes;
    setAttributes(attributes: SourceAttributes): void;
    destroy(): void;
}
