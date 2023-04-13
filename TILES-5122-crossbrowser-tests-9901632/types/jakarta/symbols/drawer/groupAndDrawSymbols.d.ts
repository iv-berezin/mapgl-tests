import { MapState } from '../../types';
import { CustomSceneObject } from '../../types/symbols';
import { DrawerEffects } from './drawerEffects';
import { MapModules } from '../../map/mapModules';
import { SceneObject } from '../../types/generatedSceneObjects';
declare type RenderSceneObject = SceneObject | CustomSceneObject;
declare type RenderGroupFunction<T extends RenderSceneObject> = (mapState: MapState, modules: MapModules, objects: T[], effects: DrawerEffects, 
/**
 * Если true, то идет отрисовка плоской карты и
 * нужно игнорировать факт того, что рельеф включен.
 */
ignoreDem?: boolean) => void;
declare type Accessor<T extends RenderSceneObject> = (object: T, state: MapState) => any;
/**
 * Процедура рисования объектов.
 * Принимает массив объектов, которые нужно отрисовать, после чего группирует их и
 * отправляет на отрисовку в WebGL (еще это называется батчинг).
 *
 * Целью группировки является минимизация вызовов WebGL - загрузок и переключений шейдерных программ,
 * установки юниформ, собственно отрисовки. Карта работает быстро, когда мы отрисовываем,
 * например, 100 объектов 1 вызовом `gl.drawArrays()`, а не 100 объектов по одному.
 *
 * Группирует все объекты по:
 * 1. Тайлам, либо динамичности объекта
 * 2. RenderIndex
 * 3. Объекты принадлежащие стилевой группе группируются по атрибутам группы и groupIndex
 * 4. Подфазам
 * 5. Шейдерным программам
 * 6. WebGL стейту
 * 7. Юниформам
 *
 * Группировка позволяет снизить количество вызовов WebGL.
 */
export declare const groupAndDrawSymbols: RenderGroupFunction<RenderSceneObject>;
/**
 * Группировка с учётом порядка. Используется для фаз и субфаз.
 */
export declare const orderedGroup: <T extends RenderSceneObject>(accessor: Accessor<T>) => (objects: T[], state: MapState) => T[][];
export {};
