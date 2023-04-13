import { MapState, DynamicLayer } from '../types';
import { DynamicObject } from '../dynamicObjects/base/dynamicObject';
import { HtmlMarker } from '../dynamicObjects/htmlMarker';
/**
 * Модуль слоев карты
 *
 * Назначение — хранение `DynamicLayer` сущностей. Обновление всех слоев на update карты.
 *
 * Добавляем объект в слои, если:
 *  1. Если необходимо подписка на обновление карты,
 *  2. Добавить какое-то взаимодействие с объектом из модулей карты
 *     (например, checkEntranceAnimation в tileManager)
 */
export declare class MapLayers {
    private layers;
    private state;
    constructor(state: MapState);
    addLayer(layer: DynamicLayer): void;
    removeLayer(layer: DynamicLayer): void;
    getLayers(): DynamicLayer[];
    getDynamicObjectLayers(): DynamicObject[];
    getHtmlMarkers(): HtmlMarker[];
    entranceAnimationFinished(): boolean;
}
