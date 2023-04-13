import { AnimationOptions, GeoPoint, WebglState } from './index';
import { DraggablePointerEvent, DynamicObjectPointerEvent } from './events';
import { LogicalMatchExpression, InterpolateExpression } from './publicStyles';
export declare type PolylineAnimationOptions = AnimationOptions & {
    /**
     * Задает границы интерполяции от значения времени в тикере к длине линии
     * Когда нужно последовательно показать анимацию нескольких отдельных несвязанных объектов,
     * одновременно с нелинейным изингом.
     * {duration: 1000, durationRange:{start: 0, end:0,5}} - анимация будет только 500мс в самом начале.
     */
    durationRange?: {
        start?: number;
        end?: number;
    };
};
export interface CircleOptions {
    coordinates: GeoPoint;
    radius: number;
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    color?: string | InterpolateExpression | LogicalMatchExpression;
    borderColor?: string | InterpolateExpression | LogicalMatchExpression;
    borderWidth?: number | InterpolateExpression | InterpolateExpression;
    segments?: number;
    interactive?: boolean;
}
export interface PolylineOptions {
    coordinates: GeoPoint[];
    zIndex?: number;
    zIndex2?: number;
    zIndex3?: number;
    width?: number | InterpolateExpression;
    width2?: number | InterpolateExpression;
    width3?: number | InterpolateExpression;
    color?: string | InterpolateExpression;
    color2?: string | InterpolateExpression;
    color3?: string | InterpolateExpression;
    minZoom?: number;
    maxZoom?: number;
    interactive?: boolean;
    displayTileBounds?: boolean;
    showAnimation?: PolylineAnimationOptions;
    webglState?: Partial<WebglState>;
}
export interface DashedPolylineOptions {
    coordinates: GeoPoint[];
    zIndex?: number;
    zIndex2?: number;
    width?: number | InterpolateExpression | InterpolateExpression;
    width2?: number | InterpolateExpression | InterpolateExpression;
    dashColor?: string | InterpolateExpression | LogicalMatchExpression;
    dash2Color?: string | InterpolateExpression | LogicalMatchExpression;
    gapColor?: string | InterpolateExpression | LogicalMatchExpression;
    dashLength?: number | InterpolateExpression | InterpolateExpression;
    dash2Length?: number | InterpolateExpression | InterpolateExpression;
    gapLength?: number | InterpolateExpression | InterpolateExpression;
    minZoom?: number;
    maxZoom?: number;
    interactive?: boolean;
    displayTileBounds?: boolean;
    showAnimation?: PolylineAnimationOptions;
}
export interface CircleMarkerOptions {
    coordinates: GeoPoint;
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    color?: string | InterpolateExpression | LogicalMatchExpression;
    width?: number | InterpolateExpression | InterpolateExpression;
    borderColor?: string | InterpolateExpression | LogicalMatchExpression;
    borderWidth?: number | InterpolateExpression | InterpolateExpression;
    border2Color?: string | InterpolateExpression | LogicalMatchExpression;
    border2Width?: number | InterpolateExpression | InterpolateExpression;
    interactive?: boolean;
    draggable?: boolean;
}
export interface PolygonOptions {
    coordinates: GeoPoint[][];
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    color?: string | InterpolateExpression | LogicalMatchExpression;
    strokeColor?: string | InterpolateExpression | LogicalMatchExpression;
    strokeWidth?: number | InterpolateExpression | InterpolateExpression;
    interactive?: boolean;
}
export interface EntranceOptions {
    coordinates: GeoPoint[][];
    animate?: boolean;
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    color?: string | InterpolateExpression;
    borderColor?: string | InterpolateExpression;
    width?: number | InterpolateExpression;
    borderWidth?: number;
    wingWidthMultiplier?: number;
    wingHeightMultiplier?: number;
    tipHeightMultiplier?: number;
    tipMovementAmplitude?: number;
}
export interface HtmlMarkerOptions {
    coordinates: GeoPoint;
    html: HTMLElement | string;
    minZoom?: number;
    maxZoom?: number;
    /**
     * Конфиг лейблинга html-маркеров.
     * - `none` или конфиг не задан — маркер никак не участвует в лейблинге
     * - 'invincible`: маркер может скрывать другие объекты в лейблинге, но сам всегда отображается
     * - `full`: маркер может как скрывать другие объекты, так и скрываться сам
     * - `pinnedToPoi`: маркер может как скрывать другие объекты, так и скрываться сам,
     *    при этом он прибит к POI на карте
     *
     * Поля width и height задают размер области занимаемой маркером в лейблинге.
     */
    labeling?: {
        type: 'none';
    } | {
        type: 'invincible' | 'full';
        width: number;
        height: number;
    } | {
        type: 'pinnedToPoi';
        poiId: string;
        width: number;
        height: number;
    };
    /**
     * Для html-элементов удобней задавать отступ в пикселях, чем относительный, как в случае с `anchor`.
     * При значении `[0, 0]` левый верхний край элемента будет находится ровно над переданной гео-позицией.
     */
    offset?: number[];
    animate?: boolean;
    duration?: number;
    /**
     * Если true, то маркер может стать объектом события мыши (pointer-events: auto),
     * иначе нет (pointer-events: none)
     */
    interactive?: boolean;
    /**
     * Если true, то события над маркером не будут передаваться в карту
     * (например, при скролле контента внутри HtmMarker карта не будет зумиться
     * и ее нельзя будет таскать за такой маркер),
     * иначе карта обработает события как обычно.
     * Маркер с этим флагом будет всегда выше любого маркера без него,
     * так как они будут находится в разных слоях.
     */
    preventMapInteractions?: boolean;
    zIndex?: number;
    /**
     * Если true, то координаты маркеров не будут округляться
     */
    disableRounding?: boolean;
}
export interface DynamicObjectEventTable<T = any> {
    click: DynamicObjectPointerEvent<T>;
    dblclick: DynamicObjectPointerEvent<T>;
    contextmenu: DynamicObjectPointerEvent<T>;
    mousemove: DynamicObjectPointerEvent<T>;
    mouseover: DynamicObjectPointerEvent<T>;
    mouseout: DynamicObjectPointerEvent<T>;
    mousedown: DynamicObjectPointerEvent<T>;
    mouseup: DynamicObjectPointerEvent<T>;
    touchstart: DynamicObjectPointerEvent<T>;
    touchend: DynamicObjectPointerEvent<T>;
    drag: DraggablePointerEvent<T>;
    dragstart: DraggablePointerEvent<T>;
    dragend: DraggablePointerEvent<T>;
}
