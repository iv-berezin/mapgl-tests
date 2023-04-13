/// <reference types="@2gis/gl-matrix" />
import { MapModules } from './mapModules';
import { LoadedRasterSet } from '../types/styles';
import { IconTransformerParams } from '../dynamicObjects/onlineMarker';
declare type IconTransformer = (params: IconTransformerParams) => string;
/**
 * Загрузка изображений, создание текстуры и хранение в кеше
 * Также, создание rasterSet'а для загруженной картинки
 * Умеет хранить изображения в спрайте.
 *
 * Используется только для маркеров.
 */
export declare class MarkerIconManager {
    private modules;
    private cache;
    private loadingCounter;
    constructor(modules: MapModules);
    getRasterSet(url: string, transformer?: IconTransformer, size?: Vec2, anchor?: Vec2): Promise<LoadedRasterSet | undefined>;
    isIdle: () => boolean;
    private decreaseLoadingCounter;
    /**
     * @param url
     * @param transformer
     * @param size
     * @param offset Положения якоря иконки в пикселях
     */
    private loadIcon;
    private getFromCache;
    private storeInCache;
    private getKey;
    private loadImage;
    private loadImageForTransformer;
}
export {};
