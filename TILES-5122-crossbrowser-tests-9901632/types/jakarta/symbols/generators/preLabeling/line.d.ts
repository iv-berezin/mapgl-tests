import { Collector } from '../../../worker/collector';
import { GeneratorContext, LabelLineStyleLayer } from '../../../expressions/types';
import { TileCoords } from '../../../types';
import { Int64 } from '../../../utils/structures/int64';
import { ObjectAttributeValue } from '../../../utils/objectAttributes';
import { PreLabelType } from './common';
export interface PreLabelLine {
    type: PreLabelType.Line;
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
export declare const preLabelingLine: (collector: Collector, styleId: number, layer: LabelLineStyleLayer, tileCoords: TileCoords, sourceId: number, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>) => void;
