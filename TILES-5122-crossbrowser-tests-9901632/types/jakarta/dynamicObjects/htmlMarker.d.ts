import { GeoPoint } from '../types';
import { MapClass } from '../map';
import { HtmlMarkerOptions } from '../types/dynamicObjects';
import { HTMLMarkerShownEvent } from '../types/events';
import { Evented } from '../utils/structures/evented';
/**
 * На самом деле, HTML-маркер является динамическим объектом.
 * Не наследуется от DynamicObject, так как не использует методы из него, а только лишь малую часть.
 *
 * HTML-маркер позволяет отобразить маркер с разметкой, представленной в виде HTML.
 * ВАЖНО! HTML-маркер не рисуется в WebGL-контексте, а отображается в Dom-дереве.
 * Отсюда есть ограничение, что много таких маркеров создавать не стоит.
 *
 * HTML-маркеры не участвуют в генерализации с маркерами, которые рисуются в WebGL-контексте.
 */
export declare class HtmlMarker extends Evented<{
    shown: HTMLMarkerShownEvent<HtmlMarker>;
}> {
    protected static options: Required<HtmlMarkerOptions>;
    uniqId: number;
    private labelKey;
    private mapPoint;
    private screenPoint;
    private modules;
    private mapState;
    /**
     * Ссылка на корневой контейнер маркера, к нему нет и не должно быть доступа у клиента.
     * На нем будет выставлена позиция маркер.
     */
    private html;
    private isHidden;
    private options;
    /**
     * Значение прозрачности, к которому сейчас идет анимация
     */
    private targetOpacity;
    private showAnimationTimer?;
    private hideAnimationTimer?;
    private rounder;
    /** Кэш высоты земли для маркера */
    private demElevation;
    /** Ревизия тайлов рельефа */
    private demTilesRevision;
    constructor(map: MapClass, options: HtmlMarkerOptions);
    destroy(): void;
    update(): void;
    setContent(content: HTMLElement | string): void;
    setLabelingSize(width: number, height: number): void;
    setPosition(lngLat: GeoPoint): void;
    setOffset(offset: number[]): void;
    setMinZoom(zoom: number): void;
    setMaxZoom(zoom: number): void;
    getZIndex(): number;
    getOffset(): number[];
    getPosition(): number[];
    getHtmlElement(): HTMLDivElement;
    /**
     * Используй этот метод только если ты прочел комментарии в функции createHtml()
     * и точно понимаешь, что без него тебе не обойтись.
     * ВАЖНО! Метод нельзя менять.
     * Он используется в плагине кластеризации (https://gitlab.2gis.ru/WebMaps/jakarta-clustering/-/blob/master/src/clusterer.ts#L323)
     */
    dangerouslyGetRootElement(): HTMLDivElement;
    isShown(): boolean;
    private show;
    private hide;
    private setHtmlOpacity;
    private removeHtml;
    private appendHtml;
    private getMarkerContainer;
    private updatePosition;
    /**
     * Обновление элемента в лейблинге, если поменялся хоть один из его параметров
     */
    private updateLabelBox;
    private getLabelingGroup;
    private checkZoom;
    /**
     * Участвует ли маркер в лейблинге
     */
    private isInvolvedInLabeling;
}
