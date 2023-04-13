import { StyleState } from '../types';
/**
 * Создает "пустой" стейт стилей. Вызывается при создании карты.
 */
export declare function createStyleState(): StyleState;
/**
 * Обновляет стейт стилей после вызова публичного метода `map.setStyleState()`.
 * Обязательно должен вначале проставлять дефолты, чтобы они работали в стилях.
 */
export declare function setStyleState(newStyleState: StyleState): {
    [x: string]: string | number | boolean | string[] | number[] | undefined;
};
/**
 * Обновляет стейт стилей после вызова публичного метода `map.patchStyleState()`.
 * Также проставляет переменные движка, чтобы юзер не мог их поменять.
 */
export declare function patchStyleState(currentStyleState: StyleState, newStyleState: StyleState): {
    _activeFloorIds: string | number | boolean | string[] | number[] | undefined;
    _activeFloorBuildingIds: string | number | boolean | string[] | number[] | undefined;
};
/**
 * Обновляет стейт стилей переменными движка, которые нужны для работы с этажами.
 * Вызывается внутри FloorManager.
 *
 * @param currentStyleState Текущий стейт стилей.
 * @param activeFloorIds Массив ID активных этажей.
 * @param activeFloorBuildingIds Массив ID активных зданий этажей.
 */
export declare function patchStyleStateWithFloorParams(currentStyleState: StyleState, activeFloorIds: string[] | undefined, activeFloorBuildingIds: string[] | undefined): {
    _activeFloorIds: string[] | undefined;
    _activeFloorBuildingIds: string[] | undefined;
};
