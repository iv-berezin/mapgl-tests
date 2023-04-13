import { MapState } from '../types';
import { HandlerState } from '../types';
import { MapModules } from '../map/mapModules';
export declare class Handler {
    state: HandlerState;
    mapState: MapState;
    container: HTMLElement;
    modules: MapModules;
    dblClickTimer?: number;
    constructor(mapState: MapState, modules: MapModules);
    destroy(): void;
    block(): void;
    unblock(): void;
    private preventDefault;
    private onMouseMove;
    private onTouchStart;
    private switchState;
}
