import { Metatile } from '../../../types/styles';
import { Collector } from '../../../worker/collector';
import { HandyStyle, PointStyleLayer, GeneratorContext } from '../../../expressions/types';
import { TileCoords } from '../../../types';
import { Int64 } from '../../../utils/structures/int64';
import { ObjectAttributeValue } from '../../../utils/objectAttributes';
import { LabelGeometryType, LabelPointType } from '../../../types/labeling';
import { PreLabelType } from './common';
export interface PreLabelPoint {
    type: PreLabelType.Point;
    pointType: LabelPointType;
    geometryType: LabelGeometryType;
    styleId: number;
    layerId: number;
    sourceId: number;
    tileCoords: TileCoords;
    id: Int64;
    identifyIndex: number;
    identifyPoiLabelIndex: number;
    iconPriority: number;
    labelPriority: number;
    label2Priority: number;
    hovered: number;
    vertices: ArrayLike<ArrayLike<number>>;
    demElevation: number;
    componentDistanceStart: number;
    componentDistanceEnd: number;
    objectLength: number;
    tileData: ObjectAttributeValue[];
}
export declare const preLabelingPoint: (collector: Collector, style: HandyStyle, layer: PointStyleLayer, ctx: GeneratorContext<any>, metatile: Metatile, tileCoords: TileCoords, sourceId: number, vertices: Array<ArrayLike<number>>, dpi: number, generateForAdditionalState?: boolean | undefined, floorId?: Int64 | undefined) => void;
