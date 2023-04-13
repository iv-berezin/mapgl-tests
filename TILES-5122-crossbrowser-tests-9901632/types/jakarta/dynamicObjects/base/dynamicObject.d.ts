import { IdentifyDataChunk, IdentifyIds, MapState } from '../../types';
import { MapModules } from '../../map/mapModules';
import { MapClass } from '../../map';
import { Evented } from '../../utils/structures/evented';
import { TileObject } from '../../tiles/tileObject';
import { DynamicObjectEventTable } from '../../types/dynamicObjects';
export declare abstract class DynamicObject<T = any> extends Evented<DynamicObjectEventTable<T>> {
    uniqId: number;
    identifyIds: IdentifyIds[];
    protected tileObjects: TileObject[];
    protected modules: MapModules;
    protected mapState: MapState;
    protected style?: {
        [key: string]: any;
    };
    constructor(map: MapClass);
    update(): void;
    destroy(): void;
    getIdentifyData(): IdentifyDataChunk[];
}
