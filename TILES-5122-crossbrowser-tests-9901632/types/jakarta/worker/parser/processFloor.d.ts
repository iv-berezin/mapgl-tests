import { Collector } from '../collector';
import { FloorsComplexData } from '../../types/floors';
import { Int64 } from '../../utils/structures/int64';
import { StyleState } from '../../types';
import { MasterSyncableMetatile } from '../../syncableMetatile/master';
import { MetatileCollectedData } from '../../syncableMetatile/common';
import { HandyStyle } from '../../expressions/types';
export declare function processFloor(style: HandyStyle, styleState: StyleState, collector: Collector, data: FloorsComplexData, metatile: MasterSyncableMetatile, regionId: number, pixelRatio: number, floorIndex: number, selectedIds: Int64[], sourceId: number): import("../../types").CollectorOutput;
/**
 * Собирает данные этажного комплекса для передачи в синхронизируемый метатайл.
 */
export declare const collectFloorData: (data: FloorsComplexData) => MetatileCollectedData;
