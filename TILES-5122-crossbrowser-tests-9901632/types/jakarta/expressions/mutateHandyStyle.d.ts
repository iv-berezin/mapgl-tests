import { HandyGroupLayer, HandyStyleLayer, HandyStyle } from './types';
import { MapModules } from '../map/mapModules';
export declare const __onlyForTests: {
    updateRenderIndexes: typeof updateRenderIndexes;
};
/**
 * Добавляет handy-слой addedLayer в стиль style.
 * Если не задан beforeId, то слой будет добавлен в конец массива,
 * иначе, сразу перед слоем с идентификатором beforeId.
 * Если слоя с beforeId нет, или слой с addedLayer.id уже существует в стиле,
 * то бросит исключение.
 * ВНИМАНИЕ! Мутирует стиль style.
 *
 * @param addedLayer Handy-слой который нужно добавить в стиль.
 * @param style Стиль в который добавится слой.
 * @param beforeId Опциональный Id слоя перед которым нужно вставить слой.
 */
export declare function addHandyLayer(addedLayer: HandyStyleLayer | HandyGroupLayer, style: HandyStyle, beforeId?: string): void;
/**
 * Удаляет стилевой слой c идентификатором layerId из стиля style.
 * ВНИМАНИЕ! Мутирует стиль.
 */
export declare function removeHandyLayerById(layerId: string, style: HandyStyle, modules: MapModules): void;
/**
 * Пересчитывает renderIndex слоев в стиле так,
 * чтобы каждый следующий индекс был больше предыдущего,
 * а индексы слоев лежащих в одно группе совпадали.
 *
 * @param style Handy-стиль в котором будем обновлять renderIndexes.
 */
declare function updateRenderIndexes(style: HandyStyle): void;
export {};
