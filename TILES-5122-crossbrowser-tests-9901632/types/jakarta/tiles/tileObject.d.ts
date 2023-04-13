/// <reference types="@2gis/gl-matrix" />
import { TileCoords, GeneratedObjectBatch, TilePurpose, MapState, Bounds } from '../types';
import { Renderer } from '../map/renderer';
import { DynamicObject } from '../dynamicObjects/base/dynamicObject';
import { Buffer } from '../2gl/Buffer';
import { SceneObject } from '../types/generatedSceneObjects';
import { MapModules } from '../map/mapModules';
export declare abstract class TileObjectBase {
    coords: TileCoords;
    identifyChildren: SceneObject[];
    children: SceneObject[];
    /**
     * Матрица вьюпорта тайла.
     * Преобразует координаты тайла в пространство отсечения WebGL карты.
     * Получается в результате умножения матрицы вьюпорта карты на матрицу тайла,
     * непосредственно перед отрисовкой объектов сцены.
     */
    mvpMatrix: Float32Array;
    demMatrix: Float32Array;
    zoomLevel: number;
    detailLevel: number;
    size: number;
    purpose: TilePurpose;
    readiness: number;
    dynamicObject?: DynamicObject;
    readonly bounds: Bounds;
    /**
     * Матрица тайла.
     * Преобразует координаты тайла в координаты карты.
     * В общем случае описывает следующее:
     * - положение левого нижнего угла тайла в координатах карты
     * - горизонтальный масштаб тайла в координатах карты
     * - вертикальный масштаб тайла (он фиксированный для всех тайлов независимо от зума)
     */
    modelMatrix: Mat4;
    protected needsInstancingExpand: boolean;
    protected buffers: Buffer[];
    protected tickerName: string;
    protected onClean?: () => void;
    constructor(purpose: TilePurpose, coords: TileCoords);
    updateMvpMatrix(vpMatrix: Mat4, demMatrix: Mat4 | undefined): void;
    clean(state: MapState): void;
    updateTicker(state: MapState): void;
    startTicker(state: MapState, type: string, time: number, from: number, to: number): void;
    tickerFinished(state: MapState): boolean;
    abstract setTileCoords(coords: TileCoords): void;
    abstract tryToExpandInstancedObjects(state: MapState, modules: MapModules): void;
}
export declare class TileObject extends TileObjectBase {
    constructor(purpose: TilePurpose, data: Array<GeneratedObjectBatch<any, any>>, renderer: Renderer, coords?: TileCoords, dynamicObject?: DynamicObject, needsInstancing?: boolean);
    setTileCoords(coords: TileCoords): void;
    tryToExpandInstancedObjects(_state: MapState, modules: MapModules): void;
}
