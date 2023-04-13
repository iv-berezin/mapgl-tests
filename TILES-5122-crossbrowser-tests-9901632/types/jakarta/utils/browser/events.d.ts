/**
 * Возвращает координаты мыши относительно верхнего левого угла container
 * за вычетом ширины границ.
 */
export declare function getMousePosition(container: HTMLElement, clientX: number, clientY: number): number[];
export declare function getTouchPositions(touches: TouchList, container: HTMLElement): number[][];
export declare function isMultiTouchEvent(event: TouchEvent): boolean;
