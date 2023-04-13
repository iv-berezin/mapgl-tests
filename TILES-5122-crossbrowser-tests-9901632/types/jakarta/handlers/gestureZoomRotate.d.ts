import { MapClass } from '../map';
import { MapState } from '../types';
/**
 * Обработка события жестов на маках в Safari
 * Статья в помощь https://medium.com/@auchenberg/detecting-multi-touch-trackpad-gestures-in-javascript-a2505babb10e
 */
export declare class GestureZoomRotate {
    private screenPoint;
    private isGestureStart;
    private startZoom;
    private gestureZoom;
    private startRotation;
    private gestureRotation;
    private state;
    private container;
    private map;
    /**
     * если вращение превысило touchRotationThreshold
     */
    private rotationDetected;
    constructor(state: MapState, containter: HTMLElement, map: MapClass);
    destroy(): void;
    update(): void;
    private onGestureStart;
    private onGestureEnd;
    private onGestureChange;
}
declare global {
    interface GestureEvent extends MouseEvent {
        scale: number;
        rotation: number;
    }
    interface HTMLElementEventMap {
        gesturestart: GestureEvent;
        gestureend: GestureEvent;
        gesturechange: GestureEvent;
    }
}
