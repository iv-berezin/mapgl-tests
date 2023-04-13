import { Metatile } from '../../types/styles';
import { ModelData } from '../../types/threads';
import { Collector } from '../collector';
import { StyleState } from '../../types';
import { HandyStyle } from '../../expressions/types';
import { FeatureStateIdsMap } from '../../utils/structures/featureStateMap';
export declare function generateBuildingModel(style: HandyStyle, styleState: StyleState, collector: Collector, buffer: ArrayBuffer, data: ModelData, metatile: Metatile, regionId: number, featureStateIdsMap: FeatureStateIdsMap): {
    objects: import("../../types").CollectorOutput;
    textures: Uint8Array[];
};
