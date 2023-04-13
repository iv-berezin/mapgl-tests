import { RasterGridCache } from './rasterGridCache';
import { Raster } from '../../../types/styles';
import { StyleStretchableIconConfig } from '../../../types/publicStyles';
import { PointRasterBucket } from '../point';
/**
 * Рассчитывает координатные растянутой и текстурной сеток изображения.
 *
 * @param result Переиспользуемый объект для хранения результата расчетов
 * @param atlasSize Размер атласа, в котором будет храниться текстура изображения
 * @param raster Объект описывающий параметры исходного изображения
 * @param targetW Ширина, до которой нужно растянуть изображение
 * @param targetH Высота, до которой нужно растянуть растр
 * @param offsetX Сдвиг на который нужно сместить изображение при отрисовке по оси X
 * @param offsetY Сдвиг на который нужно сместить изображение при отрисовке по оси Y
 * @param stretchX Конфиг растяжки изображения по оси X
 * @param stretchY Конфиг растяжки изображения по оси Y
 */
export declare function calculateRasterGrid(result: RasterGridCache, atlasSize: number[], raster: Raster, targetW: number, targetH: number, offsetX: number, offsetY: number, stretchX?: StyleStretchableIconConfig['stretchX'], stretchY?: StyleStretchableIconConfig['stretchY']): void;
/**
 * Генерация геометрии растров по сетке.
 */
export declare function appendRaster(x: number, y: number, z: number, rasterGrid: RasterGridCache, bucket: PointRasterBucket, minScale: number, maxScale: number, localID: number): void;
