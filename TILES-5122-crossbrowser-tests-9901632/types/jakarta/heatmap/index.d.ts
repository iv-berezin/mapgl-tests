import { Texture } from '../2gl/Texture';
import { HeatmapStyleLayer } from '../expressions/types';
import { MapModules } from '../map/mapModules';
import { MapState } from '../types';
export declare function initHeatmapLayer(layer: HeatmapStyleLayer, styleId: number, modules: MapModules): ((state: MapState) => void) | undefined;
/**
 * Создает ramp-текстуру на основе стиля хитмапа
 * @param mapState
 * @param layer
 * @param textureWidth
 */
export declare function getRampTexture(mapState: MapState, layer: HeatmapStyleLayer, textureWidth: number): Texture;
