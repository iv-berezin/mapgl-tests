import { BaseTile } from '../tile';
export interface BaseGridState<Tile extends BaseTile> {
    type: 'data' | 'raster' | 'geojson';
    minZoomLevel: number;
    maxZoomLevel: number;
    minDetailLevel: number;
    maxDetailLevel: number;
    /** Хранит округленный в меньшую сторону текущий зум, который показываем в данный момент */
    zoomLevel: number;
    /**
     * Объект, хранящий ключи тайлов, попадающих в данный момент во вьюпорт
     */
    viewportTiles: string[];
    /**
     * Объект, хранящий все данные о тайлах
     */
    tiles: {
        [key: string]: Tile;
    };
}
export declare function createGridState(type: 'data' | 'raster' | 'geojson', styleZoom: number, minZoom: number, maxZoom: number, minDetailLevel: number, maxDetailLevel: number): {
    type: "data" | "raster" | "geojson";
    maxDetailLevel: number;
    minDetailLevel: number;
    maxZoomLevel: number;
    minZoomLevel: number;
    zoomLevel: number;
    tiles: {};
    viewportTiles: never[];
};
export declare function resetGridState(dataGridState: BaseGridState<BaseTile>): void;
