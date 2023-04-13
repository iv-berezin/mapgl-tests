import { MapModules } from '../../map/mapModules';
import { MapState } from '../../types';
import { StyleManager } from '../../styleManager/common';
import { HandyStyle } from '../../expressions/types';
export declare const createMapModules: () => MapModules;
export declare const createStyleManager: (styles: HandyStyle[]) => StyleManager;
export declare const createMapState: (styleZoom?: number, styleState?: {}) => MapState;
