interface Axis {
    coords: number[];
    isOddStretchable: boolean;
}
export interface Grid2D {
    x: Axis;
    y: Axis;
}
export declare const __onlyForTests: {
    getSourceGridAxis: typeof getSourceGridAxis;
    isOddStretchable: typeof isOddStretchable;
    getTextureCoords: typeof getTextureCoords;
    getAxisStretchParams: typeof getAxisStretchParams;
    getStretchedAxisCoords: typeof getStretchedAxisCoords;
    moveAxisCenterToZeroWithOffset: typeof moveAxisCenterToZeroWithOffset;
};
/**
 * Считает сетку для исходного изображения в пикселях
 *
 * @param width number Ширина исходного изображения
 * @param height number Высота исходного изображения
 * @param stretchX Array<[number, number]> Конфиг растяжки изображения по оси X
 * @param stretchY Array<[number, number]> Конфиг растяжки изображения по оси Y
 */
export declare function getSourceGrid(width: number, height: number, stretchX?: Array<[number, number]>, stretchY?: Array<[number, number]>): Grid2D;
/**
 * Рассчитывает одну ось сетки исходного изображения по конфигу растяжки с учетом размера изображения.
 *
 * TODO: OPTIMIZATION. Можно в handy-стиле сразу хранить оси растяжки,
 * т. е. эту ф-ю можно использовать при конвертации публичного стиля.
 * https://jira.2gis.ru/browse/TILES-3833
 *
 * @param stretchConfig Array<[number, number]> Конфиг растяжки изображения по оси
 * @param size number Размер изображения пикселях по оси соответствующей оси конфига растяжки
 */
declare function getSourceGridAxis(stretchConfig: Array<[number, number]>, size: number): Axis;
/**
 * Флаг, говорящий о том, какие интервалы оси тянутся: нечетные или четные.
 * Если первая координата первого интервала конфига растяжки по оси равна нулю, любо конфиг не задан,
 * то вернет true — тянутся нечетные интервалы, иначе false — четные.
 *
 * @@param stretchConfig Array<[number, number]> Конфиг растяжки изображения по оси
 */
declare function isOddStretchable(stretchConfig?: Array<[number, number]>): boolean;
/**
 * Считает сетку в текстурных координатах
 *
 * @param atlasCoordX number Координата расположения изображения в атласе по оси X
 * @param atlasCoordY number Координата расположения изображения в атласе по оси Y
 * @param atlasSize number[] Размер атласа по осям [atlasSizeX, atlasSizeY]
 * @param padding number Отступ с которым изображение добавлено в атлас
 */
export declare function getTextureCoords2D(grid: Grid2D, atlasCoordX: number, atlasCoordY: number, atlasSize: number[], padding: number): number[][];
/**
 * Возвращает массив координат оси растяжки приведенный к текстурным координатам.
 *
 * @param axis number[] Ось растяжки изображения
 * @param atlasCoord number Координата расположения изображения в атласе по оси axis
 * @param atlasSize number Размер атласа по соответствующей оси
 * @param padding number Отступ с которым изображение добавлено в атлас
 */
declare function getTextureCoords(axis: Axis, atlasCoord: number, atlasSize: number, padding: number): number[];
/**
 * Возвращает сетку растянутого изображения в пикселях
 *
 * @param grid Grid2D Сетка координат исходного изображения
 * @param targetWidth number Ширина, до которой нужно растянуть изображение
 * @param targetHeight number Ширина, до которой нужно растянуть изображение
 * @param padding number Отступ в пикселях, который будет добавлен по краям сетки
 * @param offsetX number Сдвиг сетки по оси X
 * @param offsetY number Сдвиг сетки по осям Y
 */
export declare function getStretchedCoords2D(grid: Grid2D, targetWidth: number, targetHeight: number, padding: number, offsetX?: number, offsetY?: number): number[][];
declare function getStretchedAxisCoords(axis: Axis, targetSize: number): number[];
declare function getAxisStretchParams({ coords, isOddStretchable, }: Axis): {
    stretchSize: number;
    fixSize: number;
};
declare function moveAxisCenterToZeroWithOffset(axis: number[], padding: number, offset?: number): number[];
export {};
