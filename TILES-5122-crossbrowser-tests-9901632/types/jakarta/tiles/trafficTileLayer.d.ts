import { MapModules } from '../map/mapModules';
import { MapState } from '../types';
export declare class TrafficTileLayer {
    private mapState;
    private modules;
    private gridState;
    private viewportDiffer;
    private enabled;
    /**
     * Временная метка, с которой должны запрашиваться все тайлы
     * Берется случайно из первого региона из мета данных, поскольку в теории все timestamp в регионах должны быть одинаковыми
     */
    private timestamp?;
    private isMetaLoading;
    /**
     * Время последнего обновления мета данных (метки и бальности)
     */
    private lastUpdateTime;
    private regionIds;
    /**
     * Флаг сигнализирующий, что пробки были только что включены
     */
    private justEnabled;
    private id;
    constructor(mapState: MapState, modules: MapModules);
    show(): void;
    hide(): void;
    isEnabled(): boolean;
    destroy(): void;
    redraw(): void;
    activateStyleUpdating(): void;
    finishStyleUpdating(): void;
    update(): void;
    viewportTilesReady(): boolean;
    /**
     * Запрашивает тайлы пробок.
     *
     * Эта функция обязательно должна выполниться, т.к. перед ней тайлам ставится параметр `needFetch` в `false`.
     * Именно поэтому в нее передается `timestamp` аргументом, иначе если внутри написать:
     * ```js
     * if (this.timestamp === undefined) {
     *     return;
     * }
     * ```
     * то в будущем можно накосячить и функция не выполнится.
     */
    private fetch;
    private abortFetch;
    private generate;
    private clearTiles;
    private fetchMeta;
}
