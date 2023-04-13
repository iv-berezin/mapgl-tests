import { MapState } from '../types';
interface KeyInfo {
    /**
     * showCommPoi отвечает только за инжект дополнительных стилей,
     * он не отвечает за загрузку данных коммерческих POI
     */
    showCommPoi: boolean;
    /**
     * Если true, то карта используется под брендом URBI.
     * Влияет на тип лого в копирайте.
     * По умолчанию считаем, что это false.
     */
    urbi: boolean;
}
export declare class TileKeyInfo {
    private request;
    private isLoading;
    constructor(state: MapState);
    getKeyInfo: () => Promise<KeyInfo>;
    isIdle: () => boolean;
}
export {};
