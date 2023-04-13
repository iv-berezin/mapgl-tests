import { Handler } from '../handler';
import { HandlerState, HandlerAction } from '../../types';
import { MapState } from '../../types';
import { InteractionTarget } from '../../types/events';
/**
 * Переходы в TouchDown состояние:
 *  1. Initial -> touchstart -> TouchDown (type: single);
 *  2. Initial -> touchstart с количеством тачей > 1 -> TouchDown (type: multiple);
 *  3. TouchDrag -> touchstart -> TouchDown (type: multiple);
 *  4. TouchZoomRotate -> touchstart -> TouchDown (type: multiple);
 *  5. TouchZoomRotate -> touchend с длиной touches > 1 -> TouchDown (type: multiple);
 *  6. TouchZoomRotate -> touchend с длиной touches = 1 -> TouchDown (type: single);
 *  7. TouchPitch -> touchstart -> TouchDown (type: multiple);
 *  8. TouchPitch -> touchend с длиной touches > 1 -> TouchDown (type: multiple);
 *  9. TouchPitch -> touchend с длиной touches = 1 -> TouchDown (type: single);
 *  10. TouchZoom -> touchstart -> TouchDown (type: multiple);
 */
export declare class TouchDown implements HandlerState {
    private handler;
    private touchStartPoints;
    private needClickOnTouchEnd;
    private pitchWaitingTimer?;
    private toZoomRotate;
    private isTimerStarted;
    private startedInteractionTarget;
    constructor(action: TouchEvent, handler: Handler, needClickOnTouchEnd: boolean);
    processAction(action: HandlerAction): HandlerState;
    getStartedInteractionTarget(): InteractionTarget;
    private processTouchStartAction;
    private processTouchMoveAction;
    private processTouchEndAction;
    private processTouchClickAction;
}
/**
 * Переходы в TouchDrag состояние:
 *  TouchDown (type: single) -> touchmove -> TouchDrag;
 */
export declare class TouchDrag implements HandlerState {
    private handler;
    private touchMovePoint;
    private touchStartPoint;
    constructor(touchMovePoint: number[], touchStartPoint: number[], handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    update(mapState: MapState): void;
    private processTouchStartAction;
    private processTouchMoveAction;
    private processTouchEndAction;
}
/**
 * Переходы в TouchZoom состояние:
 *  TouchDown (type: single) -> touchmove (при условии, что dblClickTimer !== undefined у Handler) -> TouchZoom;
 */
export declare class TouchZoom implements HandlerState {
    private handler;
    private touchMovePointY;
    private touchStartPoint;
    private mapHeight;
    private startZoom;
    constructor(touchMovePoint: number[], touchStartPoint: number[], handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    update(mapState: MapState): void;
    private processTouchStartAction;
    private processTouchMoveAction;
    private processTouchEndAction;
}
