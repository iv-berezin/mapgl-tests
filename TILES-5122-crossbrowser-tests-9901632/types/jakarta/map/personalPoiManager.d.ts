import { MapModules } from './mapModules';
import { PersonalPoi, IdentifyDataChunk, MapState } from '../types';
export declare class PersonalPoiManager {
    private mapState;
    private modules;
    private regionMetadata?;
    private modCache;
    private currentPois;
    private currentIdSet;
    private currentTrafficState;
    private currentSelectedIds;
    private currentModKey;
    private identifyDataChunk?;
    private displayedModKey?;
    private isGenerating;
    constructor(mapState: MapState, modules: MapModules);
    setPersonalPoi(pois: PersonalPoi[]): void;
    redraw(): void;
    getIdentifyDataChunk(): IdentifyDataChunk | undefined;
    isIdle: () => boolean;
    update(): void;
    private generate;
    private show;
    private updateModKey;
}
