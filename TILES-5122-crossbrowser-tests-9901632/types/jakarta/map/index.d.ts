/// <reference types="@2gis/gl-matrix" />
import { Evented } from '../utils/structures/evented';
import { MapCore } from './core';
import { GeoPoint, MapState, MapOptions, Viewport, PersonalPoi, CenterAnimationOptions, ViewportAnimationOptions, ZoomAnimationOptions, RotationAnimationOptions, PitchAnimationOptions, LngLatBounds, Padding, AnimationOptions, PaddingAnimationOptions, StyleState, InputStyle, SupportedSimpleOpts } from '../types';
import { MapEventTable } from '../types/events';
import './index.css';
import { MapModules } from './mapModules';
import { Style, StyleIconConfig, StyleLayer, StyleModelConfig } from '../types/publicStyles';
import { StyleOptions } from '../types';
import { LabelsDebugOptions } from './labelsDebug';
import { DefaultSource } from '../sources/defaultSource';
/**
 * Внешний интерфейс карты, который доступен снаружи.
 * Внутренние модули карты не должны использовать этот компонент, исключение — отправка событий.
 */
export declare class MapClass extends Evented<MapEventTable> {
    state: MapState;
    modules: MapModules;
    core: MapCore;
    private values;
    private performanceChecker;
    private currentPendingStyle?;
    constructor(container: HTMLElement, options?: Partial<MapOptions>);
    setCenter(center: GeoPoint, options?: CenterAnimationOptions): MapClass;
    setZoom(zoom: number, options?: ZoomAnimationOptions): MapClass;
    setStyleZoom(styleZoom: number, options?: ZoomAnimationOptions): MapClass;
    setMinZoom(zoom: number, options?: ZoomAnimationOptions): MapClass;
    setMaxZoom(zoom: number, options?: ZoomAnimationOptions): MapClass;
    setRotation(rotation: number, options?: RotationAnimationOptions): MapClass;
    setPitch(pitch: number, options?: PitchAnimationOptions): MapClass;
    setMinPitch(pitch: number, options?: PitchAnimationOptions): MapClass;
    setMaxPitch(pitch: number, options?: PitchAnimationOptions): MapClass;
    setViewport(viewport: Partial<Viewport>, options?: ViewportAnimationOptions): MapClass;
    setMaxBounds(bounds: LngLatBounds): MapClass;
    setPadding(padding: Partial<Padding>, options?: PaddingAnimationOptions): MapClass;
    getPadding(): Padding;
    getCenter(): number[];
    getZoom(): number;
    getStyleZoom(): number;
    getMinZoom(): number;
    getMaxZoom(): number;
    getRotation(): number;
    getPitch(): number;
    getViewport(): Viewport;
    getSize(): number[];
    /**
     * Возвращает прямоугольные границы вьюпорта карты в географических координатах.
     *
     * В идеале мы должны возвращать класс LngLatBounds, но чтобы не дублировать этот
     * простой класс дважды, создадим его только в MapGL.
     */
    getBounds(): {
        southWest: number[];
        northEast: number[];
    };
    /**
     * Вернет дефолтный источник карты.
     */
    getDefaultSource(): DefaultSource;
    /**
     * Returns WebGLRenderingContext of the map canvas.
     */
    getWebGLContext(): import("../2gl/types").GLContext;
    /**
     * Returns HTMLCanvasElement of the map.
     */
    getCanvas(): HTMLCanvasElement;
    enableRuler(): void;
    setRulerPoints(points: GeoPoint[]): void;
    disableRuler(): void;
    showTraffic(): void;
    hideTraffic(): void;
    setPersonalPoi(pois: PersonalPoi[]): void;
    setSelectedIds(ids?: string[]): MapClass;
    /**
     * Проецирует долготу и широту в координаты экрана
     */
    project(lngLat: number[]): number[];
    /**
     * Проецирует координаты экрана в долготу и широту
     */
    unproject(point: number[]): number[];
    getCameraProjectionMatrix(): number[];
    getCameraViewMatrix(): number[];
    getCameraViewProjectionMatrix(): number[];
    invalidateSize(): MapClass;
    destroy(): void;
    refresh(): MapClass;
    changeFloorNumber(floorId: string, floorIndex: number): MapClass;
    /**
     * Добавляет слой в текущий стиль карты.
     */
    addLayer(layer: StyleLayer, beforeId?: string): this;
    /**
     * Удаляет слой из текущего стиля карты.
     */
    removeLayer(layerId: string): this;
    setStyle(mapglStyle: InputStyle, options?: StyleOptions): Promise<string | Style>;
    addIcon(name: string, config: StyleIconConfig): this;
    removeIcon(name: string): this;
    addModel(name: string, config: StyleModelConfig): this;
    /**
     * Выключает единственно верный кастомный стиль карты и заставляет объекты из тайлов снова использовать свои стили.
     * Запускает перегенрацию карту.
     */
    useOldStyles(options?: StyleOptions): this;
    waitForGpuToFinishDrawing(): MapClass;
    setLang(lang: string): void;
    showLabelsDebug(options?: LabelsDebugOptions): void;
    hideLabelsDebug(): void;
    getContainer(): HTMLDivElement;
    /**
     * В MapGL SDK этот метод называется getContainer
     * Сделали так, потому что текущий getContainer возвращает не тот контейнер, который требуется
     * При этом, getContainer из Jakarta уже используется в Jakarta-clusterer.
     * Чтобы не ломать обратную совместимость решили временно создать отдельный метод,
     * который возвращает именно внешний контейнер, который пользователь использует для инициализации карты
     * getContainer в Jakarta будет работать как и раньше
     */
    getExternalContainer(): HTMLElement;
    fitBounds({ northEast, southWest }: LngLatBounds, options?: {
        padding?: Partial<Padding>;
        considerRotation?: boolean;
        skipMapPadding?: boolean;
        animation?: AnimationOptions;
        maxZoom?: number;
    }): MapClass;
    update(): void;
    isIdle(): boolean;
    isReady(): boolean;
    setAutoHoverMode(value: boolean): void;
    setStyleState(newState: StyleState): void;
    getStyleState(): StyleState;
    patchStyleState(newState: StyleState): void;
    setOption(option: SupportedSimpleOpts, value: any): void;
    getOption(option: SupportedSimpleOpts): boolean | undefined;
    /**
     * Возвращает географические координаты поверхности рельефа
     * в заданной точке экрана.
     */
    getGroundPoint(screenPoint: Vec2): number[] | undefined;
    /**
     * Устанавливает кастомный стиль в карте, а также делает его единственно верным для генерации объектов из тайлов.
     * Запускает перегенерацию карты.
     *
     * Стиль скачивается с нашего сервера, затем применяется в карте
     */
    private setCustomStyleById;
    private setCustomStyleFromUrl;
    private setCustomStyleDirectly;
    /**
     * Устанавливает кастомный стиль в карте, а также делает его единственно верным для генерации объектов из тайлов.
     * Запускает перегенерацию карты.
     */
    private setCustomStyle;
    /**
     * WARNING: Работает только с number или vec2
     */
    private copyFromStateToValues;
    /**
     * WARNING: Работает только с number или vec2
     */
    private cloneFromStateToValues;
    /**
     * WARNING: Работает только с number или vec2
     */
    private copyFromValuesToValues;
    private areEqual;
    private fetchStyleById;
}
