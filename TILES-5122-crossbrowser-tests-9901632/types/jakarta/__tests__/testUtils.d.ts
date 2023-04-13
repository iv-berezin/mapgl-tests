/// <reference types="@2gis/gl-matrix" />
import { GridState } from '../types/tiles';
import { StyleLayer, Style } from '../types/publicStyles';
import { HandyStyle } from '../expressions/types';
/**
 * Округление координат карты
 */
export declare function mapRound(x: number): number;
export declare function mapRoundVec2(v: Vec2): void;
export declare function mapRoundVec3(v: Vec3): void;
export declare function mapRoundVec4(v: Vec4): void;
/**
 * Округление географических координат
 */
export declare function geoRound(x: number): number;
export declare function createGridState(): GridState;
/**
 * Создает пустой публичный стиль карты
 */
export declare function createPublicStyle(layers?: StyleLayer[]): Style;
/**
 * Создает пустой стиль карты
 */
export declare function createHandyStyle(layers?: StyleLayer[]): HandyStyle;
