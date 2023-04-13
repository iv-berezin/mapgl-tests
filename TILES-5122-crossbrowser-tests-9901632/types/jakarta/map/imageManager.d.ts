/// <reference types="@2gis/gl-matrix" />
import { MapModules } from './mapModules';
import { Texture } from '../2gl/Texture';
import { MapState } from '../types';
/**
 * Хранилище текстур изображений.
 *
 * Сейчас генерирует новую текстуру для каждого уникального изображения. Уникальность
 * изображения устанавливается по ключу, состоящему из url изображения и исходных размеров,
 * если они переданы, см. в ф-ю getImageKey ниже.
 *
 * Такой подход сложно назвать оптимальным.
 *
 * В дальнейшем стоит запилить здесь атласы, по аналогии с тем как сделано ImageCache + AssetManager,
 * только понятнее и точно без массивов RasterSet[].
 */
export declare class ImageManager {
    private state;
    private modules;
    private textureKeys;
    private texturesMap;
    private loadingCounter;
    constructor(state: MapState, modules: MapModules);
    /**
     * Сохраняет текустуру из уже скачанного ArrayBuffer, масштабирует его до размеров size
     * с учетом pixelRatio (по умолчанию window.devicePixelRatio),
     * загружает в GPU текстуру с полями IMAGE_PADDING и возвращает Promise с индексом текстуры
     */
    addTexture(textureArrayBuffer: ArrayBuffer, options?: {
        size?: Vec2;
        pixelRatio?: number;
        imagePadding?: number;
    }): Promise<number | undefined>;
    /**
     * Добавляет заранее подготовленную текстуру.
     */
    addPreparedTexture(texture: Texture): number;
    /**
     * Обновляет заранее подготовленную текстуру.
     * Удаляет предыдущую текстуру из GPU.
     */
    updatePreparedTexture(imageKeyIndex: number, texture: Texture): void;
    /**
     * Скачивает изображение url, масштабирует его до размеров size
     * с учетом pixelRatio (по умолчанию window.devicePixelRatio),
     * загружает в GPU текстуру с полями IMAGE_PADDING и возвращает Promise с индексом текстуры
     */
    loadTexture(url: string, options?: {
        size?: Vec2;
        pixelRatio?: number;
        imagePadding?: number;
        skipAtlasSizeChecking?: boolean;
    }): Promise<number | undefined>;
    getTexture(imageKeyIndex: number): Texture | undefined;
    destroy(): void;
    deleteTexture(imageKeyIndex: number): boolean;
    isIdle: () => boolean;
    private decreaseLoadingCounter;
    private storeTexture;
    private loadImage;
}
