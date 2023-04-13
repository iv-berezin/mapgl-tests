/// <reference types="@2gis/gl-matrix" />
import { MapPoint, GeoPoint, Viewport, Padding } from '../types';
/**
 * Радиус сферойда из параметров датума веб-меркатора
 * https://epsg.io/3857
 */
export declare const MERCATOR_EARTH_RADIUS = 6378137;
/**
 * Размер экватора в метрах, рассчитанный как длина окружности
 * с радиусом сферойда веб-меркатора
 */
export declare const EARTH_CIRCUMFERENCE: number;
/**
 * Сколько мап поинтов в 1 метре веб-меркатора.
 */
export declare const MAP_POINTS_IN_METER: number;
/** Используется для преобразования координат по осям X и Y c [0, 1] к [-1, 1] */
export declare const TEXTURE_COORDS_TO_WEBGL: Mat4;
/** Используется для преобразования координат по осям X и Y c [-1, 1] к [0, 1] */
export declare const WEBGL_COORDS_TO_TEXTURE: Mat4;
/**
 * Переводит вектор из географических координат в координаты карты
 */
export declare function projectGeoToMap(geoPoint: GeoPoint): MapPoint;
/**
 * Переводит вектор из координат карты в географические координаты
 */
export declare function projectMapToGeo(mapPoint: MapPoint): number[];
/**
 * Возвращает скорректированное значение высоты экрана. Если фактическое значение
 * меньше standardScreenHeight, возвращается standardScreenHeight. Если больше,
 * то возвращается фактическое значение.
 */
export declare function correctScreenHeight(height: number): number;
/**
 * Переводит зум-уровень в высоту камеры
 */
export declare function zoomToHeight(zoom: number, size: Vec2): number;
/**
 * Переводит высоту камеры в зум-уровень
 */
export declare function heightToZoom(height: number, size: Vec2): number;
/**
 * Вычисляет масштаб по зум-левелу
 */
export declare function zoomToScale(zoom: number): number;
/**
 * Вычисляет зум-левел по масштабу
 */
export declare function scaleToZoom(scale: number): number;
/**
 * Вычисляет зум стилей по зуму и центру карты
 */
export declare function getStyleZoom(zoom: number, center: MapPoint): number;
/**
 * Вычисляет зум по стилевому зуму и центру карты.
 * Инверсия дельты — обратное интерполированное значение дельты от заданного стилевого зума.
 * affineStep(9, 10 + delta, styleZoom) - вычисляет значение интерполяции, которое нужно применить
 * к коэффициенту delta для текущего стилевого зума
 * с условиями:
 * - 9 минимальный зум - ниже которого всегда будет 0
 * - между 9 и 10+delta - значение интерполяции (например, если delta равна -0.5, а стилевой зум 9.25, то вернет 0.5)
 * - больше 10+delta — всегда вернет 1
 * Для вычисления zoom мы от styleZoom вычитаем обратно интерполированное значение delta.
 * Это действие полностью противоположно методу getStyleZoom.
 */
export declare function getZoomFromStyleZoom(styleZoom: number, center: MapPoint): number;
/**
 * Переводит расстояние из логических пикселей экрана
 * в относительные координаты тайла. Функция перенесена из Зенита
 * и нужна только для совместимости с его шейдерами.
 * Использовать её для чего-либо ещё нельзя.
 * В Зените логические пиксели именуются zpt.
 * Здесь мы понимаем какое расстояние нужно отложить в тайле,
 * что бы на экране отобразилась линия шириной в `zpt` пикселей.
 */
export declare function zptToSceneDistance(zpt: number, tileSizeWorld: number): number;
/**
 * Переводит расстояние из метров в мап-поинты
 *
 * @param point Точка возле которой рассчитывается расстояние
 * @param distance Расстояние в метрах
 */
export declare function geoToMapDistance(point: GeoPoint, distance: number): number;
/**
 * Определяет во сколько раз проекция карты преувеличивает расстояния и площади на заданной широте
 * @param latitude широта в градусах
 */
export declare function projectionScaleFactor(latitude: number): number;
/**
 * Возвращает расстояние между двумя географическими точками - формула Haversine
 */
export declare function geoPointsDistance(lngLat1: GeoPoint, lngLat2: GeoPoint): number;
/**
 * Возвращает длину линии по географическими координатам - формула Haversine
 */
export declare function geoLineDistance(coordinates: GeoPoint[]): number;
/**
 * Размер мира в координатах карты
 */
export declare const worldBounds: import("../types").Bounds;
/**
 * Переводит расстояние из логических пикселей в координаты карты.
 * Функция не учитывает наклон карты и искажение перспективы.
 */
export declare function pixelToMapDistance(pixels: number, zoom: number): number;
/**
 * Переводит расстояние из координат карты в логические пиксели.
 * Функция не учитывает наклон карты и искажение перспективы.
 */
export declare function mapToPixelDistance(map: number, zoom: number): number;
/**
 * Вычисляет зум, на котором расстояние в координатах карты будет иметь
 * длину в нужное количество логических пикселей на экране.
 * Функция не учитывает наклон карты и искажение перспективы.
 */
export declare function pixelsAndMapDistanceToZoom(pixels: number, world: number): number;
/**
 * Вычисление угла от точки обзора к точке на карте
 * Т.е. считается аналогично pitch только не к центру, а к точке
 * @param eye Положение камеры
 * @param point Точка к которой нужно считать угл
 * @param center Точка куда смотрит камера, у нас всегда равна центру карты
 */
export declare function mapPointPitch(eye: Vec3, point: MapPoint, center: Vec2): number;
export declare function isValidGeoPoint(point: GeoPoint): boolean;
/**
 * Вычисляет метры по сдвигу на количество пикселей по X,Y вокруг проецируемой в географические координаты точки экрана
 */
export declare function getMetersFromPixelsXY(center: number[], zoom: number, rotation: number, size: number[], pitch: number, screenPoint: number[], viewport: Viewport | undefined, padding: Padding | undefined, x: number, y: number): number;
export declare function normalizeTo2Pi(rad: number): number;
