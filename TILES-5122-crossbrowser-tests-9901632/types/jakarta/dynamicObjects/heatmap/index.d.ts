import { MapClass } from '../../map';
import { DynamicObject } from '../base/dynamicObject';
import { GeoPoint, MapPoint } from '../../types';
import { InterpolateExpression } from '../../types/publicStyles';
/**
 * Точка, которая задается пользователем снаружи.
 */
export interface HeatmapPoint {
    coordinates: GeoPoint;
    /**
     * Множитель функции ядра (kernel).
     * Чем выше его значение, тем выше интенсивность цвета.
     * Применяется к конкретной точке хитмапа (в отличие от intensity).
     */
    weight?: number;
}
export interface HeatmapPalette {
    [key: number]: string;
}
/**
 * Опции хитмапа плотности.
 */
export interface HeatmapOptions {
    /**
     * Точки для отрисовки хитмапа.
     */
    points?: HeatmapPoint[];
    /**
     * Палитра хитмапа плотности.
     * Задается по схеме "интенсивность цвета в точке -> цвет".
     * Интенсивность цвета задается в диапазоне от 0 до 1.
     */
    palette?: HeatmapPalette;
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    opacity?: number | InterpolateExpression;
    /**
     * Радиус точек хитмапа в пикселях.
     * Равен половине ширины/длины ядра (kernel), описывающего точку хитмапа.
     * ВАЖНО: визуально точка будет выглядеть меньше, т.к. это зависит от настройки палитры.
     */
    pointRadius?: number | InterpolateExpression;
    /**
     * Множитель функции ядра (kernel).
     * Чем выше его значение, тем выше интенсивность цвета.
     * Применяется ко всем переданным точкам хитмапа (в отличие от weight).
     */
    intensity?: number | InterpolateExpression;
    /**
     * Делитель разрешения текстуры хитмапа.
     * Чем выше его значение, тем хуже качество текстуры хитмапа.
     * Нужен для производительности.
     */
    downscale?: number;
}
/**
 * Точка для внутреннего использования в хитмапе.
 */
export interface InternalHeatmapPoint {
    mapCoords: MapPoint;
    weight: number;
}
export declare class Heatmap extends DynamicObject<Heatmap> {
    private needRerender;
    private isDestroyed;
    private layer;
    private offscreenTextureIndex;
    private rampTextureIndex;
    private tileCoords?;
    private offscreenProgram;
    private buffers?;
    /**
     * Model матрица: постоянная, расчитывается на основе координат тайла.
     */
    private matrix;
    /**
     * Model-View-Projection: расчитывается перемножением View-Projection матрицы на Model матрицу.
     * Здесь нужна для того, чтобы не создавать каждый кадр новую матрицу, а перезаписывать ее.
     */
    private mvpMatrix;
    private vao?;
    private frameBuffer;
    private gl;
    private vertexCount;
    private downscale;
    private points;
    private tree?;
    private viewDiffer;
    private sizeDiffer;
    private throttledFillBuffer;
    constructor(map: MapClass, options?: HeatmapOptions);
    setPoints(points: HeatmapPoint[]): void;
    /**
     * Используется для отрисовки хитмапа во FrameBuffer.
     */
    update(): void;
    destroy(): void;
    private resetBuffers;
    private fillBuffers;
    private resizeFrameBuffer;
}
