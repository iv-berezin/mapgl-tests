import { RasterSet, TileAttrs } from '../../types/styles';
import { HandyStyle, HandyStyleLayer } from '../../expressions/types';
/**
 * ID динамического стиля
 * Как и любой ID стиля, должен быть всего больше 0, т.к. в preLabeling он зашивается в u32 масив
 */
export declare const DYNAMIC_STYLE_ID = 0;
declare type DynamicLabelingGroupName = 'default' | 'marker' | 'markerText' | 'htmlLabel';
/**
 * Вспомогательная функция, которая трансформирует опции динамических объектов в тайловые атрибуты.
 */
export declare function optionsToTileAttrs(options: {
    [name: string]: any;
}): TileAttrs;
/**
 * Объект стиля, который используется для работы динамических объектов.
 * На самом деле никаких стилей (AST) в себе не содержит, а нужен только, чтобы повторить работу обычный стилей,
 * в которых используется маппинг иконок (rasterSets) и шрифтов (fonts).
 *
 * От обычных стилей отличается еще своей динамичностью, т.е. в рантайме у него могут появляться иконки.
 * Обновленная информация обязательно должна пересылаться в воркеры.
 *
 * Уже сейчас можно отказаться от единого динамического стиля, и для каждого дин. объекта создавать свой стиль. Это будет
 * идеалогически более правильно, т.к. сейчас вся эта заморочка с ID = 0 является костылем.
 *
 * А в будущем, возможно стоит вообще выпилить этот динамический стиль, так как обычный стиль станет по-настоящему динамическим:
 * при добавлении/удалении слоя не будет перерисовываться вся карта.
 */
export declare class DynamicStyle {
    private style;
    /**
     * В динамических объектах мы сортируем по zIndex. Этот флаг показывает,
     * что у нас появились новые объекты и их необходимо отсортировать перед
     * отрисовкой.
     */
    private needRenderIndexRebuild;
    private zIndexById;
    constructor();
    getStyle(): HandyStyle;
    appendRasterSet(rasterSet: RasterSet, key?: string): void;
    removeRasterSet(index: number): void;
    getLabelingGroupIndex(name: DynamicLabelingGroupName): number;
    addLayer(layer: HandyStyleLayer, zIndex?: number): void;
    removeLayer(layerInnerId: number): void;
    update(): void;
    updateLayerStyle(layerInnerId: number, { style, dataKeys }: HandyStyleLayer): void;
    private rebuildRenderIndex;
}
export {};
