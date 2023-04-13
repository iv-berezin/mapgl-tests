/// <reference types="@2gis/gl-matrix" />
import { ScreenPoint, MapState } from '../types';
export declare function clamp(value: number, min: number, max: number): number;
export declare function sign(x: number): number;
export declare function normalizeMousePosition(size: Vec2, point: Vec2): Vec2;
export declare function degToRad(degrees: number): number;
export declare function radToDeg(radians: number): number;
/**
 * Возращает вектор коррекции для центра. Этот вектор показывает насколько нужно сдвинуть центр,
 * чтобы переданный screenPoint оказался на том же месте карты, после изменений stateDiff стейта,
 * например, после изменения зума или поворота.
 */
export declare function getCenterCorrection(state: MapState, screenPoint: ScreenPoint, changeState: Partial<MapState>): Vec3;
/**
 * Вычисляет наименьшую степень числа 2, большую или равную переданному параметру
 */
export declare function pow2AtLeast(n: number): number;
export declare function applyDefaults<T>(params: T, defaults: Required<T>): Required<T>;
/**
 * Меняет местами свойства и ключи объекта и возвращает новый объект.
 */
export declare function reverseObject(object: {
    [key: string]: number | string;
}): {
    [key: string]: string;
};
/**
 * Позволяет получить объект, частично или полностью состоящий из свойств
 * переданного объекта, в зависимости от переданного массива свойств
 */
export declare function pick<Obj extends {
    [key: string]: any;
}, Prop extends keyof Obj>(obj: Obj, props: readonly Prop[]): Pick<Obj, Prop>;
/**
 * Возвращает массив, содержащий все элементы А, которые не входят в Б
 */
export declare function subtract<T>(a: {
    [key: string]: T;
}, b: {
    [key: string]: T;
}): T[];
/**
 * Возвращает массив, содержащий все элементы А, которые не входят в Б
 */
export declare function mapSubtract<T>(a: Map<string, T>, b: Map<string, T>): T[];
export declare function affineStep(min: number, max: number, value: number): number;
export declare function getFractionalPart(value: number): number;
export declare function isBetween(value: number, min: number, max: number): boolean;
export declare function equalSets<T>(a: Set<T>, b: Set<T>): boolean;
/**
 * Честно адаптированная версия из пакета fast-deep-equal
 */
export declare function deepEqual(a: any, b: any): boolean;
/**
 * Удаляет элемент из массива. Возвращает true, если элемент был в массиве, и false - если нет.
 */
export declare function excludeItemFromArray<T extends any>(array: T[], item: T): boolean;
/** Линейная интерполяция */
export declare function lerp(x0: number, x1: number, factor: number): number;
