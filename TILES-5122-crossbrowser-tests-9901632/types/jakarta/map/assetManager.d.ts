import { MapState, TileServerMetadata } from '../types';
import { Texture } from '../2gl/Texture';
import { MapModules } from './mapModules';
import { Metatile, SourceMetatile, RasterSet, GlyphData } from '../types/styles';
import { GltfModel } from '../symbols/gltfSpreader';
export declare type LoadFontFunction = (name: string, range: number) => void;
export declare class AssetManager {
    textures: Texture[];
    metatileLoader: (url: string, metatileHash: number, regionId: number) => void;
    visibleBuildingIds: Set<string>;
    private fontTextures;
    private fontGlyphs;
    private requestFontRanges;
    private pendingFontRanges;
    private loadedFontRanges;
    private state;
    private modules;
    private requestedMetatiles;
    /**
     * Хранилище метатайлов по их хэшам.
     * Зарезервированные значения хэшей:
     * -1 - для метатайла динамических объектов;
     * -2 - для метатайла пробок;
     * -3 - для синхронизируемого метатайла;
     * -4 - для метатайла geojson данных.
     */
    private metatiles;
    private loadedRasters;
    private failedRasters;
    private requestedRasters;
    private requestedSvgs;
    private projectMetatileMetadata?;
    private disableIconCache;
    private models;
    constructor(state: MapState, modules: MapModules);
    loadMetatile(url: string, metatileHash: number, regionId: number): void;
    /**
     * Используется для добавления статичных метатайлов
     */
    setMetatile(metatileHash: number, regionId: number, sourceMetatile: SourceMetatile): void;
    /**
     * Используется для добавления метатайлов, которые уже подготовленны для работы в карте
     * Например, для динамического метатайла
     */
    setPreparedMetatile(metatileHash: number, metatile: Metatile): void;
    prepareRasters(styleId: number, packedRasters: Uint16Array, loadedImages?: Array<HTMLImageElement | HTMLCanvasElement>): void;
    loadRasters(rasters: Float64Array): void;
    removeRasterSet(rasterSet: RasterSet, styleId: number): void;
    getMetatile(metatileHash: number): Metatile | undefined;
    getProjectMetadata(): TileServerMetadata | undefined;
    getFontGlyphs(fontName: string): GlyphData;
    getFontTextureByName(fontName: string, range: number): Texture | undefined;
    isIdle(): boolean;
    /**
     * Использовать только в тестах!
     */
    dangerouslySetMetatiles(metatiles: {
        [metatileHash: number]: Metatile;
    }): void;
    /**
     * Использовать только в тестах!
     */
    dangerouslySetRasters(loadedRasters: {
        [metatileHash: number]: Set<number>;
    }, failedRasters: {
        [metatileHash: number]: Set<number>;
    }): void;
    loadFont: LoadFontFunction;
    addModel(index: number): void;
    getModel(index: number): GltfModel | undefined;
    invalidateUsedModels(): void;
    /**
     * Получает уникальный ключ модели.
     *
     * Для моделей из стилей мы используем пару [styleId,index].
     *
     * Для моделей из данных - просто index, уникальность индекса в
     * этом случае обеспечивается в коллекторе парсера.
     */
    private getModelUniqueKey;
    private createLoadFontRequest;
    private prepareFontAtlas;
    private loadPng;
    private loadSvg;
}
