import { labeling as labelingConfig } from '../../config';
import { LabelingTileElement } from './elements/labelingTile';
import { LabelBoxElement } from './elements/labelBox';
import { LabelingState } from '../../types';
declare type LabelingElement = LabelingTileElement | LabelBoxElement;
declare function isCollidable(element1: LabelingElement, element2: LabelingElement): boolean;
declare function sortBySurvivedAndPriority(elements: LabelingTileElement[], survivedLabelIds: Map<string, number>): LabelingTileElement[];
export declare function isCommercialPoi(elem: LabelingElement): elem is LabelingTileElement & {
    commercialPriority: number;
};
export declare function isCommercialPoiCity(elem: LabelingElement): elem is LabelingTileElement & {
    commercialPriority: number;
};
/**
 * Входная точка генерализации
 */
export declare function generalize(elements: LabelingElement[], state: Pick<LabelingState, 'size' | 'viewport' | 'debugLabels'>, survivedLabelIds: Map<string, number>, commercialMargins: typeof labelingConfig.commercialMargins): number[] | undefined;
export declare const testHandles: {
    isCollidable: typeof isCollidable;
    sortBySurvivedAndPriority: typeof sortBySurvivedAndPriority;
};
export {};
