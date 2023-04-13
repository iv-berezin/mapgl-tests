import { MapState } from '../types';
import { MapModules } from '../map/mapModules';
export declare class GltfAnimator {
    private state;
    private modules;
    private zoomDiffer;
    private minStyleZoom;
    private animationState;
    private linkedIds;
    private linkedIdsToModelId;
    private hiddenObjects;
    constructor(state: MapState, modules: MapModules);
    registerModel(modelId: number, linkedIds: string[]): void;
    removeModel(modelId: number): void;
    getModelOpacity(modelId: string | number, minStyleZoom?: number): number;
    getModelOpacityForLinkedObject(objectId: string): number;
    isAnimating(objectId?: string): boolean;
    hasModelFor(objectId: string): boolean;
    update(): void;
    private updateMinZoom;
}
