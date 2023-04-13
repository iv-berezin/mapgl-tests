import { LabelingTileElement } from './labelingTile';
import { LabelBoxElement } from './labelBox';
import { LabelingState } from '../../../types';
import { GlyphData } from '../../../types/styles';
import { LabelStorage, LabelBoxStorage } from '../../../types/labeling';
import { TwoKeyMap } from '../../../utils/structures/twoKeyMap';
import { StyleManager } from '../../../styleManager/common';
import { LoadFontRanges } from '..';
import { Camera } from '../../../map/camera';
/**
 * По массиву лейблов готовит и возвращает массив элементов лейблинга
 */
export declare function collectLabelingElements(modKeys: string[], state: LabelingState, camera: Camera, styleManager: StyleManager, labelStorage: LabelStorage, labelBoxStorage: LabelBoxStorage, glyphs: {
    [fontName: string]: GlyphData;
}, loadedGlyphs: TwoKeyMap<boolean>, pixelRatio: number, hiddenIds: Set<string>, loadFontRanges: LoadFontRanges): {
    boxElements: LabelBoxElement[];
    oneWayTileElements: LabelingTileElement[];
    noLabelingElements: LabelingTileElement[];
    otherTileElements: LabelingTileElement[];
};
