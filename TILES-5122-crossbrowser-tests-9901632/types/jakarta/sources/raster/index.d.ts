import { Map } from '../..';
import { Source, SourceAttributes } from '../types';
export interface RasterTileSourceOptions {
    /**
     * Функция возвращающая url для тайла по его координатам.
     */
    url: (x: number, y: number, zoom: number) => string;
    /**
     * Минимальный зум для которого есть данные тайлов
     */
    minZoom?: number;
    /**
     * Максимальный зум для которого есть данные тайлов
     */
    maxZoom?: number;
    /**
     * Атрибуты источника данных.
     */
    attributes?: SourceAttributes;
}
export declare class RasterTileSource implements Source {
    type: 'raster';
    private id;
    private readonly layer;
    private readonly modules;
    private readonly source;
    constructor(map: Map, options: RasterTileSourceOptions);
    destroy(): void;
    getAttributes(): SourceAttributes;
    getId(): number;
    setAttributes(attributes: SourceAttributes): void;
    isIdentifiedAsDefault(): boolean;
}
