import { ShaderProgram } from '../../2gl/ShaderProgram';
import * as gb from './globalBinders';
import { MapModules } from '../../map/mapModules';
import { MapState } from '../../types';
import { DrawerEffects } from '../drawer/drawerEffects';
/**
 * Функция установки юниформ и текстур шейдерной программы,
 * зависящих только от состояния карты.
 */
export declare type ProgramBinder = (gl: WebGLRenderingContext, program: ShaderProgram, mapState: MapState, mapModules: MapModules, effects: DrawerEffects, ignoreDem?: boolean) => void;
export declare function compose(...binders: ProgramBinder[]): ProgramBinder;
export declare const demProgramBinder: ProgramBinder;
export declare const demDisableHillshade: (gl: WebGLRenderingContext, program: ShaderProgram) => boolean;
export declare const turnDemOffBinder: (gl: WebGLRenderingContext, program: ShaderProgram) => boolean;
export declare const defuseProgramBinder: ProgramBinder;
export declare const meshProgramBinder: ProgramBinder;
export declare const buildingIdentifyBinder: ProgramBinder;
export declare const lineProgramBinder: ProgramBinder;
export declare const labelLineBinder: ProgramBinder;
export declare const oneWayLineBinder: ProgramBinder;
export declare const stripedLineBinder: ProgramBinder;
export declare const pointSpriteBinder: ProgramBinder;
export declare const pointSpriteIdentifyBinder: ProgramBinder;
export declare const labelPointBinder: ProgramBinder;
export declare const circleMarkerBinder: gb.GlobalBinder;
export declare const entranceBinder: ProgramBinder;
export declare const simpleLineBinder: ProgramBinder;
