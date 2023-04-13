import { MapState } from '../../types';
import { MapModules } from '../../map/mapModules';
import { HandyStyleLayer } from '../../expressions/types';
import { SceneObject } from '../../types/generatedSceneObjects';
export interface WebGLExtensions {
    [name: string]: any;
}
/**
 * Механизм эффектов: прячет в себе вызовы WebGL и другие сайд-эффекты - отпадает необходимость
 * пробрасывать через все функции группировок параметры необходимые для отрисовки.
 * А еще это возможность передать эффекты-пустышки, что позволяет тестировать группировку unit-тестами.
 */
export interface DrawerEffects {
    /** Устанавливает программу и вызывает layerBinder */
    useProgram: (objects: SceneObject[]) => void;
    /** Устанавливает programBinder */
    setProgramBinder: (object: SceneObject, ignoreDem?: boolean) => void;
    /** Применяем webglState */
    useState: (objects: SceneObject[], layer: HandyStyleLayer) => void;
    /** Применяем webglState для кастомных слоев */
    useCustomLayerState: (layer: HandyStyleLayer) => void;
    /** Вызывает objectBinder и рисует набор символов */
    drawSymbol: (objects: SceneObject[], layer: HandyStyleLayer, mapState: MapState, mapModules: MapModules) => void;
    /** Установить флажки для работы отрисовщика. */
    setFlags: (flags: Partial<DrawerFlags>) => void;
}
export interface DrawerFlags {
    /**
     * Флажок сигнализирует о том, что юниформы рельефа успешно установлены, то есть
     * он по факту включился. Если это так, что далее в renderSceneObject мы должны
     * дополнительно забиндить матрицу рельефа в юниформы
     */
    demUniformsBound: boolean;
}
export declare const createDrawerEffects: (mapState: MapState, mapModules: MapModules) => DrawerEffects;
