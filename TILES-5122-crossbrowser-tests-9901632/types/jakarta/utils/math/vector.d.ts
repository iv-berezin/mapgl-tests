/// <reference types="@2gis/gl-matrix" />
export declare function calcNormal(result: Vec2, xPrev: number, yPrev: number, xOrig: number, yOrig: number): void;
/** Возвращает нормальный вектор к поверхности треугольника */
export declare function calcTriangleNormal(result: Vec3, p0: Vec3, p1: Vec3, p2: Vec3): Vec3;
export declare function calcDirection(result: Vec2, xPrev: number, yPrev: number, xOrig: number, yOrig: number): void;
export declare function calcExtender(result: Vec2, xPrev: number, yPrev: number, xOrig: number, yOrig: number): void;
/** Упаковывает компонент вектора нормали в `int8` */
export declare function denormInt8(x: number): number;
/** Упаковывает вектор нормали в массив `int8` */
export declare function denormVector(result: Vec2, vector?: Vec2): Vec2;
export declare function buildBetween(result: Vec2, x0: number, y0: number, x1: number, y1: number): void;
/**
 * Вычисляет перпендикуляр, полученный вращением данного вектора на 90° против
 * часовой стрелки
 */
export declare function unperp(result: Vec2, vector: Vec2): void;
/**
 * Вычисляет перпендикуляр, полученный вращением данного вектора
 * на 90° по часовой стрелке
 */
export declare function perp(result: Vec2, vector: Vec2): void;
export declare function isNullVector(vec: Vec2): boolean;
export declare function calcAngle(a: Vec2, b: Vec2): number;
export declare function calcMidpoint(a: Vec2, b: Vec2): Vec2;
/**
 * Поворачивает произвольный радиус-вектор vec на угол angle.
 * Мутирует координаты переданного вектора.
 */
export declare function rotateVec2(vec: Vec2, angle: number): void;
/**
 * Возвращает единичный вектор, лежащий на биссектрисе угла
 * полилинии, образованной тремя точками.
 * Вектор всегда направлен "вправо" от полилинии.
 * Используется для расширения выпуклых полигонов,
 * с направлением контура против часовой стрелки.
 */
export declare function calcBisector(result: Vec2, p1: Vec2, p2: Vec2, p3: Vec2, clockwise?: boolean): void;
