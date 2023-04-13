import { MapClass } from '../map';
import { GeoPoint } from '../types';
import { DynamicObject } from '..';
import { InterpolateExpression, LogicalMatchExpression } from '../types/publicStyles';
/**
 * Опции прямоугольника
 */
export interface RectOptions {
    /**
     * Гео-координаты центра прямоугольника на карте
     */
    center: GeoPoint;
    /**
     * Ширина прямоугольника метрах
     */
    width: number;
    /**
     * Высота прямоугольника метрах
     */
    height: number;
    /**
     * Цвет заливки прямоугольника, по умолчанию '#ff0000ff'
     */
    color?: string | InterpolateExpression | LogicalMatchExpression;
    /**
     * Если true, объект будет интерактивным
     */
    interactive?: boolean;
    /**
     * Минимальный зум на котором будет виден прямоугольник
     */
    minZoom?: number;
    /**
     * Максимальный зум на котором будет виден прямоугольник
     */
    maxZoom?: number;
    /**
     * zIndex прямоугольника
     */
    zIndex?: number;
}
/**
 * Динамический демо-объект «Прямоугольник».
 *
 * Отрисовывается в плоскости карты с центром в точке RectOptions['coordinates'],
 * ширина RectOptions['width'] направлена вдоль параллели,
 * высота RectOptions['height'] направлена вдоль меридиана.
 *
 * Помимо самого динамического объекта, еще нужно:
 * 1. сконфигурировать отрисовку слоев символа
 *    src/symbols/index.ts
 * 2. добавить шейдерную программу
 *    src/symbols/shaders/map.ts
 * 3. написать генератор данных о вершинах объекта
 *    src/workers/generators
 *
 * ВНИМАНИЕ! Перед тем как начинать разбираться с рендерингом объектов в Джакарте,
 * познакомься с рендерингом простых объектом в WebGL, например, тут
 * https://webglfundamentals.org/webgl/lessons/ru/webgl-fundamentals.html
 *
 * А вот МР в котором появился этот объект https://gitlab.2gis.ru/WebMaps/jakarta/-/merge_requests/1249
 */
export declare class Rect extends DynamicObject<Rect> {
    private points;
    private options;
    private layerId;
    constructor(map: MapClass, options: RectOptions);
    destroy(): void;
}
