import { MapState } from '../types';
export declare class StillnessUpdater {
    private differ;
    private debouncedSet;
    private stillnessTickerUpdate;
    constructor();
    update(state: MapState): void;
}
