import { Buffer } from '../2gl/Buffer';
import { SceneObject } from '../types/generatedSceneObjects';
import { Gltf } from '../worker/parser/gltf/types';
import { Texture } from '../2gl/Texture';
import { Renderer } from '../map/renderer';
import { TileObjectBase } from '../tiles/tileObject';
import { TileCoords, MapState } from '../types';
import { MapModules } from '../map/mapModules';
export interface GltfModel {
    buffers: Buffer[];
    objects: TileObjectBase[];
    textures: Texture[];
}
export declare function emptyModel(): GltfModel;
export declare class GltfTileObject extends TileObjectBase {
    children: SceneObject[];
    identifyChildren: SceneObject[];
    constructor();
    setTileCoords(_coords: TileCoords): void;
    tryToExpandInstancedObjects(_state: MapState, _modules: MapModules): void;
}
/**
 * Создает из GLTF-модели объекты сцены.
 */
export declare function gltfSpreader(output: GltfModel, renderer: Renderer, input: Gltf): GltfModel;
