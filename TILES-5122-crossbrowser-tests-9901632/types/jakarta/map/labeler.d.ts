import { MapModules } from './mapModules';
import { LabelBoxData, LabelSource } from '../types/labeling';
import { MapState, MetatileGeneratedLabels } from '../types';
/**
 * Модуль отвечает за процесс лейблинга.
 * Если компонент карты хочет участвовать в лейблинге, он должен обращаться к этому классу.
 */
export declare class Labeler {
    private state;
    private modules;
    private throttledUpdateLabeling;
    private labelTile?;
    /**
     * true, если в данный момент воркер рассчитывает лейблинг
     */
    private isLabelingInProgress;
    private skipHysteresisInNextLabeling;
    /**
     * Ключи лейблов, которые всегда участвуют в генерализации
     */
    private alwaysActiveLabelKeys;
    private worker;
    private survivedLabelBoxes;
    private prevSurvivedCommPoiIds;
    private useThrottleUpdate;
    private demKeys;
    private viewportDiffer;
    constructor(state: MapState, modules: MapModules);
    disableThrottleUpdateOnce(): void;
    update(): void;
    isIdle(): boolean;
    setLabelingInterval(interval: number): void;
    /**
     * Добавление лейблов, которые всегда участвуют в генерализации
     */
    addLabels(key: string, source: LabelSource, labels: MetatileGeneratedLabels[]): void;
    /**
     * Добавление лейблов из тайлов.
     * В отличие от метода `addLabels` эти лейблы могут не участвовать в генерализации.
     * Их участие зависит от показанных модов `TileLayer`.
     */
    addTileLabels(key: string, source: LabelSource, labels: MetatileGeneratedLabels[]): void;
    /**
     * Добавляет лейбл-пустышку в процесс генерализации
     */
    addLabelBox(key: string, box: LabelBoxData): void;
    removeLabels(key: string): void;
    isLabelBoxSurvived(id: number): boolean;
    clearPreviousLabels(): void;
    /**
     * Сбрасывает гистерезис и вызывает новый лейблинг
     */
    resetHysteresis(): void;
    private generateLabelingTile;
    private processSurvivedCommPoiIds;
    private enrichWithElevation;
}
