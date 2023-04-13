/// <reference types="@2gis/gl-matrix" />
import { Handler } from '../handler';
import { MapState } from '../../types';
import { HandlerState, HandlerAction } from '../../types';
/**
 * Переходы в MouseDown состояние:
 *  1. Initial -> mousedown при левой кнопке мыши -> MouseDown;
 *  2. PitchRotateMouseDown -> keyup при Ctrl/Meta + нажата левая кнопка мыши -> MouseDown;
 *  3. MousePitchRotate -> keyup при Ctrl/Meta + нажата левая кнопка мыши -> MouseDown;
 */
export declare class MouseDown implements HandlerState {
    private handler;
    private mouseDownPoint;
    private dragStartPoint;
    private toInitialOnMouseUp;
    private isTimerStarted;
    constructor(mouseDownPoint: Vec2, handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    private processMouseUpAction;
    private processMouseMoveAction;
    private processMouseClickAction;
    private processKeyDownAction;
}
/**
 * Переход в MouseDrag состояние:
 * MouseDown -> mousemove при нажатой левой кнопке мыши + разница между mousedown и mousemove точками
 * выше порогового значения dragThreshold -> MouseDrag;
 */
export declare class MouseDrag implements HandlerState {
    private handler;
    private mouseMovePoint;
    private dragStartPoint;
    constructor(mouseMovePoint: Vec2, dragStartPoint: Vec2, handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    update(mapState: MapState): void;
    private processMouseMoveAction;
    private processMouseUpAction;
    private processKeyDownAction;
    private returnToInitialState;
}
