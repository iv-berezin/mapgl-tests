/**
 * Модуль содержит функции, устанавливающие юниформы, зависящие от
 * параметров тайла, непосредственно перед отрисовкой объекта сцены.
 */
import { ShaderProgram } from '../../2gl/ShaderProgram';
import { MapModules } from '../../map/mapModules';
import { MapState } from '../../types';
import { SceneObject } from '../../types/generatedSceneObjects';
import { PolygonStyleLayer } from '../../expressions/types';
export declare type TileBinder<T = {}, S = SceneObject> = (gl: WebGLRenderingContext, program: ShaderProgram, mapState: MapState, mapModules: MapModules, object: S, useDem: boolean, layer: T) => void;
export declare function compose<T, S = SceneObject>(...binders: Array<TileBinder<T, S>>): TileBinder<T, S>;
export declare const tileMvpMatrixBinder: TileBinder;
export declare const tileModelMatrixBinder: TileBinder;
export declare const polygonTexture: TileBinder<PolygonStyleLayer, SceneObject>;
