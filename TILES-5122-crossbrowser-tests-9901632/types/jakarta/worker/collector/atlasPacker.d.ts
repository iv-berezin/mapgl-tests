import { Size2D } from '../../types';
import { Raster, RasterSet, StaticRasterSet } from '../../types/styles';
export declare class AtlasPacker {
    private packer;
    private currentAtlasIndex;
    private packedRasters;
    private newRasterSets;
    private rastersToLoad;
    constructor();
    /**
     * Сохраняет динамически созданные растер сеты, чтобы потом передать их в главный тред
     */
    addNewRasterSet(styleId: number, rasterSet: RasterSet): void;
    /**
     * Определяет место в атласе для конкретного растер сета
     * После этого сразу пакует информацию о месте в массив, чтобы передать обновленную информацию в главный тред
     */
    pack(rasterSet: RasterSet, iconWidthValues: number[], pixelRatio: number): void;
    /**
     * Упаковывает в атлас SVG-шку с учетом двух размеров: ширины и высоты.
     * В отличие от PNG, упаковка SVG создаёт новые элементы в массиве rasters.
     */
    packSvg(rasterSet: StaticRasterSet, iconSizes: Size2D[], pixelRatio: number): void;
    addRastersToLoad(styleId: number, raster: Raster): void;
    /**
     * Возвращает информацию о накопленных новых растрах за момент генерации
     * Очищает массив
     */
    getNewRasterSets(): Map<number, RasterSet[]>;
    getPackedRasters(): Uint16Array | undefined;
    getRastersToLoad(): Float64Array;
    private packPng;
}
