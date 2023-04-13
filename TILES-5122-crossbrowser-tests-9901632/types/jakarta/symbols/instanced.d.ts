import { AssetManager } from '../map/assetManager';
import { Renderer } from '../map/renderer';
import { DefaultSource } from '../sources/defaultSource';
import { TileObject } from '../tiles/tileObject';
import { SceneObject } from '../types/generatedSceneObjects';
export declare function expandInstancedObjects(tileObject: TileObject, renderer: Renderer, assetManager: AssetManager, defaultSource: DefaultSource): boolean;
export declare function isInstancingObject(obj: SceneObject): boolean;
export declare function getModelIdFromAttributes(obj: SceneObject): number;
