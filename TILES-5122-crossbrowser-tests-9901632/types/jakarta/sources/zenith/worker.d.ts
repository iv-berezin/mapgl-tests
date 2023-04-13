import { FetchTileData, GenerateTileData, ModelData, ProcessModelResponse, ProcessTileResponse } from '../../types/threads';
import { NonAbortedFetchTileResolve } from '../../types';
import { BinaryFeatureStateMap, FeatureStateMap } from '../types';
import { IdSet } from '../../utils/structures/idSet';
import { SlaveStyleManager } from '../../styleManager/slave';
import { Collector } from '../../worker/collector';
import { Metatile } from '../../types/styles';
import { WorkerContext } from '../../utils/thread/types';
export interface ZenithWorkerScope {
    styleManager: SlaveStyleManager;
    collector: Collector;
    metatiles: {
        [hash: number]: Metatile;
    };
    hiddenObjectIds: IdSet;
    resetCollector: () => void;
    syncRasterSets: () => void;
    createImageBitmap: WorkerContext['createImageBitmap'];
}
export declare class ZenithWorker {
    protected scope: ZenithWorkerScope;
    private tileLoader;
    private tileAttrs;
    private models;
    private featureStateMap;
    constructor(scope: ZenithWorkerScope);
    fetchTile(data: FetchTileData): Promise<NonAbortedFetchTileResolve | undefined>;
    abortTileRequest(key: string): void;
    generateTile(data: GenerateTileData): Promise<ProcessTileResponse>;
    deleteTile(key: string): void;
    setFeatureStateMap(featureStateMap: FeatureStateMap): void;
    setFeatureStateMapBinary(featureStateMapBinary: BinaryFeatureStateMap): void;
    generateModel(data: ModelData): Promise<ProcessModelResponse>;
    destroy(): void;
    private buildFeatureState;
    private buildFeatureStateFromBinary;
}
