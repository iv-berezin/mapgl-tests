/// <reference types="@2gis/gl-matrix" />
import { SourceAttributes, SourceCore } from '../types';
import { MapState, TileServerMetadata, TileCoords, Bounds } from '../../types';
import { MapModules } from '../../map/mapModules';
import { TileGeneratedData } from '../../types/threads';
import { Int64 } from '../../utils/structures/int64';
import { GeneratedTileOptions } from '../../types/tiles';
export interface DemTileSourceOptions {
    /**
     * Функция возвращающая url для тайла по его координатам.
     */
    url: (x: number, y: number, zoom: number) => string;
    /**
     * Минимальный зум для которого есть данные тайлов
     */
    minZoom?: number;
    /**
     * Максимальный зум для которого есть данные тайлов
     */
    maxZoom?: number;
}
interface DemElevationTileSource {
    data?: Float32Array;
    minZ: number;
    maxZ: number;
    bounds: Bounds;
}
export interface DemElevationTile extends rbush.BBox, DemElevationTileSource {
    key: string;
    /** Размер ячейки растра в мап поинтах */
    cellSize: number;
}
export declare class DemElevationSource implements SourceCore {
    id: number;
    private modules;
    private options;
    type: 'dem';
    private attributes;
    private tiles;
    private textureIndices;
    private readonly url;
    private readonly tileLoader;
    private tree;
    private minElevation;
    /**
     * Номер ревизии набора тайлов. Нужен что бы лишний раз
     * не запрашивать данные о высоте в конкретной точке
     */
    private revision;
    constructor(id: number, modules: MapModules, options: DemTileSourceOptions);
    abortTileFetch(tileCoords: TileCoords): void;
    deleteTile(tileCoords: TileCoords): void;
    fetchTile(tileCoords: TileCoords): Promise<TileServerMetadata[] | undefined>;
    generateTile(_mapState: MapState, tileCoords: TileCoords, _styleId: number, _selectedIds: Int64[], _devicePixelRatio: number, _generatedTileOptions?: GeneratedTileOptions): Promise<{
        results: TileGeneratedData[];
        transferable: (ArrayBuffer | ImageBitmap)[];
    }>;
    /** Распаковывает бинарный тайл высот рельефа во Float32Array с высотой в метрах */
    tileDataToFloat32Array(tileData: ArrayBuffer, coords: TileCoords): DemElevationTileSource;
    getAttributes(): SourceAttributes;
    setAttributes(attributes: SourceAttributes): void;
    getId(): number;
    destroy(): void;
    /** Возвращает интерполированное значение высоты в заданной точке */
    getElevation(point: Vec2): number | undefined;
    /** Возвращает самый подходящий тайл с высотными данными для данной точки */
    getElevationTile(point: Vec2): DemElevationTile | undefined;
    getMinElevation(): number | undefined;
    /** Обновляет минимальную высоту сорса во вьюпорте карты */
    updateMinElevation(): void;
    /**
     * Возвращает номер ревизии набора тайлов
     */
    getRevision(): number;
    /**
     * Увеличивает номер ревизии набора тайлов.
     * Должен быть вызван при добавлении\удалении тайла.
     */
    private updateRevision;
}
export {};
