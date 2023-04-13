import { MapModules } from '../../map/mapModules';
import { MapClass } from '../../map';
import { Vao } from '../../2gl/Vao';
import { TileObjectBase } from '../../tiles/tileObject';
import { MapState, TileCoords } from '../../types';
import { DemGroundSceneObject, DemMeshSceneObject, SceneObject } from '../../types/generatedSceneObjects';
export declare const DEFAULT_DEM_MESH_TILE_SIZE = 32;
export declare const DEFAULT_DEM_MESH_MAX_ZOOM: number;
export interface DemMeshSourceOptions {
    maxZoom?: number;
}
declare type MeshVaos = {
    [sink in MeshSinks]: Vao;
};
declare type MeshTileSceneObjects = DemMeshSceneObject | DemGroundSceneObject;
declare type MeshSinks = MeshTileSceneObjects['sink'];
export declare class MeshTileObject extends TileObjectBase {
    children: MeshTileSceneObjects[];
    identifyChildren: SceneObject[];
    constructor(coords: TileCoords, mapModules: MapModules, vaos: MeshVaos, sinkName: MeshSinks);
    setTileCoords(coords: TileCoords): void;
    tryToExpandInstancedObjects(_state: MapState, _modules: MapModules): void;
}
export declare class DemMeshSource {
    meshTiles: Map<string, MeshTileObject>;
    groundTiles: Map<string, MeshTileObject>;
    private maxZoom;
    private modules;
    private buffer;
    private vaos;
    private destroyed;
    constructor(map: MapClass, options: DemMeshSourceOptions);
    destroy(): void;
    setMaxZoom(maxZoom?: number): void;
    update(): void;
    updateStyleId(): void;
    private updateTileStyleId;
}
export {};
