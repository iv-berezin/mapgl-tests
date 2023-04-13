/// <reference types="@2gis/gl-matrix" />
/**
 * Вычисляет площадь простого полигона (с учетом знака).
 * Если площадь положительная, то точки полигона расположены по часовой стрелке.
 */
export declare const area: (polygon: Vec2[]) => number;
/**
 * Возвращает `true`, если точки простого полигона расположены по часовой стрелке.
 */
export declare const isClockwise: (polygon: Vec2[]) => boolean;
/**
 * Функция реализует монотонный алгоритм построениея выпуклой оболочки.
 * Заимствовано отсюда https://github.com/image-js/monotone-chain-convex-hull
 * Описание работы алгоритма https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain
 */
export declare function monotoneChainConvexHull(points: Vec2[]): Vec2[];
