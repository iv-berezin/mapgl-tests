import { DynamicObject } from './base/dynamicObject';
import { GeoPoint } from '../types';
import { MapClass } from '../map';
import { InterpolateExpression, LogicalMatchExpression } from '../types/publicStyles';
declare type Stretch = Array<[number, number]>;
/**
 * Конфиг исходного изображения.
 */
interface LabelImage {
    url: string;
    /**
     * [width, height] — размеры исходного изображения в логических пикселях
     */
    size: [number, number];
    /**
     * задает области изображения, которые могут тянуться по горизонтали
     */
    stretchX?: Stretch;
    /**
     * задает области изображения, которые могут тянуться по вертикали
     */
    stretchY?: Stretch;
    /**
     * Плотность пикселей в исходном изображении.
     * Для исходного изображения размером 200х200 и логическим size = [100, 100], нужно передать pixelRatio = 2
     */
    pixelRatio?: number;
    /**
     * Поля для области занимаемой текстом на изображении, начиная сверху по часовой стрелке,
     * как в css [top, right, bottom, left], по умолчанию [0, 0, 0, 0]
     * эти поля добавятся при вычислении размеров до которых нужно растянуть изображение
     */
    padding?: [number, number, number, number];
}
export interface PointLabelOptions {
    /**
     * Гео-координаты центра подписи на карте
     */
    coordinates: GeoPoint;
    /**
     * Текст подписи
     */
    text: string;
    /**
     * [anchorX, anchorY] — якорь подписи по соответствующей оси в относительных координатах от 0 до 1.
     * Эта точка подписи будет соответствовать гео-координатам coordinates.
     *
     * Например:
     * [0, 0] — левый верхний угол контейнера подписи,
     * [1, 1] — правый нижний угол.
     */
    anchor?: number[];
    /**
     * [offsetX, offsetY] — смещение якоря подписи по соответствующей оси в пикселях относительно гео-координат coordinates.
     * Оси X и Y направлены вправо и вниз соответственно.
     */
    offset?: number[];
    /**
     * Подложка под подпись
     */
    image?: LabelImage;
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    color?: string | InterpolateExpression | LogicalMatchExpression | Array<string | InterpolateExpression | LogicalMatchExpression>;
    fontSize?: number;
    font?: string;
    haloRadius?: number;
    haloColor?: string | InterpolateExpression | LogicalMatchExpression | Array<string | InterpolateExpression | LogicalMatchExpression>;
    letterSpacing?: number;
    lineHeight?: number;
}
export declare class PointLabel extends DynamicObject<PointLabel> {
    private status;
    private options;
    private position;
    constructor(map: MapClass, options: PointLabelOptions);
    hide(): void;
    show(): void;
    remove(): void;
    setCoordinates(coordinates: number[]): void;
    getCoordinates(): number[];
    private initImageIfNeed;
}
export {};
