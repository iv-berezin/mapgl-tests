/// <reference types="@2gis/gl-matrix" />
import { Buffer } from '../../2gl/Buffer';
import { Texture } from '../../2gl/Texture';
import { TileCoords, TileInfo } from '../../types';
import { InternalHeatmapPoint, HeatmapPalette } from './';
import { StyleColor } from '../../expressions/types';
/**
 * Подготавливает буферы вершин, раздвижки и весов.
 */
export declare function prepareBuffers(points: InternalHeatmapPoint[], tileInfo: TileInfo): {
    vertices: Buffer;
    widens: Buffer;
    weights: Buffer;
};
/**
 * Переводит вектор из координат карты в координаты тайла хитмапа
 */
export declare function mapPointToHeatmapTilePoint(result: Vec3, point: Vec3, tile: TileInfo): void;
interface HandyHeatmapPalette {
    [key: number]: StyleColor;
}
/**
 * Создает ramp-текстуру на основе палитры.
 * @param palette палитра, заданная пользователем.
 * @param textureWidth ширина текстуры.
 * @returns объект ramp-текстуры.
 */
export declare function getRampTexture(palette: HeatmapPalette, textureWidth: number): Texture;
/**
 * Добавляет граничные значения интенсивности (0 и 1) в палитру, если пользователь их не задал.
 * @param palette палитра, заданная пользователем.
 */
declare function normalizePalette(palette: HeatmapPalette): HandyHeatmapPalette;
/**
 * Генерирует массив цветов для текстуры на основе переданной палитры.
 * @param palette нормализованная палитра, на основе которой будет создаваться текстура.
 * @param textureWidth ширина текстуры.
 * @returns массив цветов для текстуры.
 */
declare function getRampTextureColors(palette: HandyHeatmapPalette, textureWidth: number): number[];
export declare function isSameTileCoords(coords1: TileCoords, coords2: TileCoords): boolean;
export declare const testHandles: {
    normalizePalette: typeof normalizePalette;
    getRampTextureColors: typeof getRampTextureColors;
};
export {};
