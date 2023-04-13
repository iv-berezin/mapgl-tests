/**
 * Хранит текстурную и растянутую координатные сетки изображения.
 *
 * TODO: OPTIMIZATION. Сейчас этот объект выглядит не очень полезным, можно сделать лучше,
 * если использовать его для хранения результата при расчете
 * текстурных и растянутых координат в ф-е calculateRasterGrid.
 * https://jira.2gis.ru/browse/TILES-3833
 */
export declare class RasterGridCache {
    countX: number;
    countY: number;
    textureX: number[];
    textureY: number[];
    stretchedX: number[];
    stretchedY: number[];
    reset(): void;
    set(stretchedCoords: number[][], textureCoords: number[][]): void;
    isEmpty(): boolean;
}
