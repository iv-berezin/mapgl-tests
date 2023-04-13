import { TileObject } from '../../../tiles/tileObject';
import { DrawerEffects } from '../drawerEffects';
import { SceneObject, ISceneObject, GeneratingLayerType, SinkName } from '../../../types/generatedSceneObjects';
export interface Case {
    name: string;
    objects: SceneObject[];
    expected: SceneObject[][];
}
export declare function test(cases: Case[]): void;
export declare function mockTileObject({ readiness }: {
    readiness?: number;
}): TileObject;
export declare const mockEffects: () => DrawerEffects;
export declare const firstStateBinder: {};
export declare const secondStateBinder: {};
export declare const mockSceneObject: ({ sink, symbol, attributesHash, readiness, subRenderIndex, programName, stateBinder, attributes, }: Fields) => ISceneObject<any, any>;
interface Fields {
    sink?: SinkName;
    symbol?: GeneratingLayerType;
    attributesHash?: string;
    readiness?: number;
    subRenderIndex?: number;
    programName?: any;
    stateBinder?: any;
    attributes?: {
        [name: string]: any;
    };
}
export {};
