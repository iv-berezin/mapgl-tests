import { Handler } from '../handler';
import { HandlerState, HandlerAction } from '../../types';
import { MapState } from '../../types';
declare abstract class TouchPitchZoomRotate implements HandlerState {
    protected handler: Handler;
    protected touchStartPoints: number[][];
    protected touchMovePoints: number[][];
    constructor(touchMovePoints: number[][], touchStartPoints: number[][], handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    private processTouchStartAction;
    private processTouchMoveAction;
    private processTouchEndAction;
    protected abstract update(mapState: MapState): void;
}
/**
 * Переходы в TouchZoomRotate состояние:
 *  1. TouchDown (type: multiple) -> touchmove, если скалярное произведение векторов, полученных из start и move точек, меньше 0 -> TouchZoomRotate;
 *  2. TouchDown (type: multiple) -> touchmove, если скалярное произведение векторов, полученных из start и move точек, равно 0, и ни один из этих
 *     векторов не является нулевым вектором -> TouchZoomRotate;
 *  3. TouchDown (type: multiple) -> touchmove, по истечении таймера ожидания возможного перехода в TouchPitch, когда скалярное произведение векторов,
 *     полученных из start и move точек, равно 0, и хотя бы один из этих векторов является нулевым вектором -> TouchZoomRotate;
 */
export declare class TouchZoomRotate extends TouchPitchZoomRotate {
    /**
     * первоначальный угол из touchstart
     */
    private startPxAngle;
    /**
     * если вращение превысило touchRotationThreshold
     */
    private rotationDetected;
    constructor(touchMovePoints: number[][], touchStartPoints: number[][], handler: Handler);
    update(mapState: MapState): void;
}
/**
 * Переходы в TouchPitch состояние:
 *  TouchDown (type: multiple) -> touchmove, если скалярное произведение векторов, полученных из start и move точек, больше 0 -> TouchPitch;
 */
export declare class TouchPitch extends TouchPitchZoomRotate {
    constructor(touchMovePoints: number[][], touchStartPoints: number[][], handler: Handler);
    update(mapState: MapState): void;
}
export {};
