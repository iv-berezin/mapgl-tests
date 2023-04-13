import { Collector } from '../collector';
import { Int64 } from '../../utils/structures/int64';
import { Metatile } from '../../types/styles';
import { PersonalPoi, CollectorOutput, StyleState } from '../../types';
import { HandyStyle } from '../../expressions/types';
export declare function processPersonalPoi(collector: Collector, style: HandyStyle, styleState: StyleState, metatile: Metatile, regionId: number, pixelRatio: number, selectedIds: Int64[], pois: PersonalPoi[], sourceId: number): CollectorOutput;
