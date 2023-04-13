import { ShaderProgram } from '../../2gl/ShaderProgram';
import { MapState } from '../../types';
import { MapModules } from '../../map/mapModules';
/**
 * Модуль содержит функции, инициализирующие юниформы для объектов с одинаковыми шейдерным программами
 */
/**
 * Функция установки юниформ и текстур шейдерной программы,
 * зависящих только от состояния карты.
 */
export declare type GlobalBinder = (gl: WebGLRenderingContext, program: ShaderProgram, mapState: MapState, mapModules: MapModules) => void;
export declare const size: GlobalBinder;
/**
 * Тоже самое, что и `size`, но если рисуем карту на тайлах рельефа -
 * нужно брать размер текстуры тайла, а не экрана.
 * Иначе линии будут слишком толстые.
 */
export declare const lineSize: GlobalBinder;
/**
 * Scale нужен символам, в которых происходит расчёт ширины (например, line)
 */
export declare const scale: GlobalBinder;
/**
 * StyleScale нужен символам, в которых происходит выбор иконки по масштабу
 * (point, poi и marker)
 */
export declare const styleScale: GlobalBinder;
export declare const heightFactor: GlobalBinder;
export declare const heightLimitation: GlobalBinder;
export declare const noHeightLimitation: GlobalBinder;
export declare const diffuse: GlobalBinder;
export declare const fillDiffuse: GlobalBinder;
export declare const meshLightColor: GlobalBinder;
export declare const lineExtrusionDiffuse: GlobalBinder;
export declare const floorsDiffuse: GlobalBinder;
export declare const roundingFactor: GlobalBinder;
export declare const borderWidthOffset: GlobalBinder;
export declare const defaultZOffset: GlobalBinder;
export declare const roofStrokeZOffset: GlobalBinder;
export declare const zeroTexture: GlobalBinder;
export declare const scaleLimits: GlobalBinder;
export declare const defaultBorderColor: GlobalBinder;
export declare const defaultSpaceColor: GlobalBinder;
export declare const enableTextures: GlobalBinder;
export declare function compose(...binders: GlobalBinder[]): GlobalBinder;
