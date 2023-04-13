/// <reference types="@2gis/gl-matrix" />
import { HandlerState, HandlerAction } from '../../types';
import { Handler } from '../handler';
import { MapState } from '../../types';
declare type PitchRotateTypes = 'auxiliary' | 'secondary' | 'keyPrimary';
/**
 * Переходы в PitchRotateMouseDown состояние:
 *  1. Initial -> mousedown при левой кнопке мыши + Ctrl/Meta, правой кнопке мыши
 *     или колесе -> PitchRotateMouseDown;
 *  2. MouseDown -> keydown при Ctrl/Meta -> PitchRotateMouseDown;
 *  3. MouseDrag -> keydown при Ctrl/Meta -> PitchRotateMouseDown;
 */
export declare class PitchRotateMouseDown implements HandlerState {
    private type;
    private mouseDownPoint;
    private handler;
    constructor(type: PitchRotateTypes, mouseDownPoint: Vec2, handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    private processMouseMoveAction;
    private processMouseUpAction;
    private processKeyUpAction;
    private returnToInitialState;
}
/**
 * Переход в MousePitchRotate состояние: PitchRotateMouseDown -> mousemove -> MousePitchRotate;
 */
export declare class MousePitchRotate implements HandlerState {
    private type;
    private mouseDownPoint;
    private mouseMovePoint;
    private handler;
    constructor(type: PitchRotateTypes, mouseDownPoint: Vec2, mouseMovePoint: Vec2, handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    update(mapState: MapState): void;
    private processMouseMoveAction;
    private processMouseUpAction;
    private processKeyUpAction;
    private returnToInitialState;
}
export {};
