import { WebglState } from '../../types';
import { HandyStyleLayer } from '../../expressions/types';
/** Стейт отрисовки пол умолчанию */
export declare const DEFAULT_WEBGL_STATE: WebglState;
/**
 * Создает новый стейт отрисовки WebGL на основе частичного стейта в аргументах.
 * Заполняя недостающие поля свойствами по умолчанию.
 */
export declare const createWebglState: (state: Partial<WebglState>) => WebglState;
/**
 * Устанавливает свойства отрисовки, согласно указанному стейту
 * и стейту стилевого слоя. Стейт стилевого слоя является приоритетным.
 */
export declare const applyWebglState: (gl: WebGLRenderingContext, state: WebglState, layer?: HandyStyleLayer | undefined) => void;
export declare const defaultState: WebglState;
export declare const blendNoDepthWrite: WebglState;
export declare const blendNoCulling: WebglState;
export declare const blendNoDepth: WebglState;
export declare const floatDemElevation: WebglState;
export declare const noDepth: WebglState;
export declare const noDepthWrite: WebglState;
export declare const zOnly: WebglState;
export declare const blendEqualDepth: WebglState;
export declare const pointSprite: WebglState;
export declare const model: WebglState;
export declare const noCullFace: WebglState;
export declare const heatmap: WebglState;
/**
 * Настройки webgl для кастомного слоя
 */
export declare const customLayer: WebglState;
