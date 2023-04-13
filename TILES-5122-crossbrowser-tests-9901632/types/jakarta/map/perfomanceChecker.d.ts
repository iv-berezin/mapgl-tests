import { Evented } from '../utils/structures/evented';
import { MapState } from '../types';
interface EventTable {
    performancecaveat: undefined;
    fps: number;
}
/**
 * Компонент замеряет скорость работы девайса пользователя засчет замера времени отрисовки кадров.
 * Если скорость оказывается недостаточной, то бросает событие performancecaveat.
 *
 * Работы разделена на два режима - до 10 секунд и после:
 * Первый режим работы:
 * - Замеряются все кадры
 * - Если пользователь закрывает вкладку, то шлётся событие в гугл аналитику
 * Второй:
 * - Замеряются только кадры, когда происходит отрисовка, если карта неподвижна, то замеров нет;
 * - Проверки идут постоянно с некоторым периодом, после каждой проверки период удваивается.
 */
export declare class PerformanceChecker extends Evented<EventTable> {
    private startRenderTime;
    private catchNextUpdate;
    private durations;
    private earlyTimes;
    private countToCheck;
    private mayCountMetrics;
    private mapState;
    constructor(mapState: MapState);
    update(): void;
    getEarlyFps(): number | undefined;
    private check;
}
export {};
