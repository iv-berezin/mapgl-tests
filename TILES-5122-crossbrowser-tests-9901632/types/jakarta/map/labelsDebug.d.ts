import { MapState } from '../types';
import { MapModules } from './mapModules';
export interface LabelsDebugOptions {
    dead?: boolean;
    alive?: boolean;
    unused?: boolean;
    commercialDead?: boolean;
    commercialAlive?: boolean;
}
/**
 * Модуль с реализацией методов для визуальной отладки лейблинга
 * (отображене выживших, выженных лейблов и poi)
 * Отладку можно включить в демке карты в меню "Labeling"
 * или с помощью метода карты `showLabelsDebug`
 */
export declare class LabelsDebug {
    private mapState;
    private modules;
    private options;
    private canvas?;
    private ctx?;
    private viewportDiffer;
    private sizeDiffer;
    constructor(mapState: MapState, modules: MapModules);
    update(): void;
    isEnabled(): boolean;
    show(options?: LabelsDebugOptions): void;
    hide(): void;
    /**
     * Функция для отрисовки границ, видимых в данный момент, лейблов
     * @param labelsBuffer Information about currently visible labels (x, y, w, h, type, labelingGroup) * n
     */
    drawLabels(labelsBuffer: ArrayBuffer): void;
    private clear;
    private createCanvas;
    private updateSize;
}
