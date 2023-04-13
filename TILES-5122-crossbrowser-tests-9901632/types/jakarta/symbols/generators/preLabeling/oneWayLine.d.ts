import { Collector } from '../../../worker/collector';
import { GeneratorContext, OneWayLineStyleLayer } from '../../../expressions/types';
import { TileCoords } from '../../../types';
import { Int64 } from '../../../utils/structures/int64';
import { ObjectAttributeValue } from '../../../utils/objectAttributes';
import { PreLabelType } from './common';
export interface PreLabelOneWayLine {
    type: PreLabelType.OneWayLine;
    styleId: number;
    layerId: number;
    sourceId: number;
    tileCoords: TileCoords;
    id: Int64;
    componentDistanceStart: number;
    componentDistanceEnd: number;
    objectLength: number;
    labelPriority: number;
    vertices: Array<ArrayLike<number>>;
    tileData: ObjectAttributeValue[];
}
export declare const preLabelingOneWayLine: (collector: Collector, styleId: number, layer: OneWayLineStyleLayer, tileCoords: TileCoords, sourceId: number, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>) => void;
