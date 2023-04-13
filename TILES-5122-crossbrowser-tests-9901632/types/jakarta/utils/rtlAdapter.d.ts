import { MapModules } from '../map/mapModules';
import { RtlPluginScenario, RtlPluginState } from '../types';
export declare let processRTLTextIfNeeded: (s: string | undefined) => string | undefined;
/**
 * Помечает плагин загруженным, оставляя вместо него заглушку-байпас
 */
export declare let markAsReady: null | (() => void);
/**
 * Флажок rtlAdapterReady нужен для лейблинга. Лейблинг периодически пуллит метод
 * processLabels в нем лучше проверять этот флажок, чтобы убедиться что адаптер готов.
 */
export declare let rtlAdapterReady: boolean;
/**
 * Промис нужен для динамических объектов, которые ничего не пуллят, а генерируются сразу
 * при создании - тут мы дожидаемся промиса.
 */
export declare const rtlAdapterPromise: Promise<void>;
export declare function isRtlPluginRequired(usageScenario: RtlPluginScenario, lang: string): boolean;
export declare function setupMapboxRtlAdapterIfNeeded(rtlPluginState: RtlPluginState, modules: MapModules, lang: string): Promise<unknown>;
export declare const compileRtlPlugin: (this: unknown, pluginSource: string) => void;
