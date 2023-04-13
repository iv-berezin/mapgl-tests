import { MapState } from '../types';
export declare class Inertia {
    private state;
    private container;
    private zoomDiffer;
    private styleZoomDiffer;
    private centerDiffer;
    private times;
    private positions;
    constructor(state: MapState, containter: HTMLElement);
    destroy(): void;
    update(): void;
    private onMouseUp;
    private onTouchEnd;
    private start;
    private stop;
    private removeOldRecords;
    private rememberTimeAndPosition;
    private getCurrentSpeed;
    private calcDistanceByStartSpeed;
}
