/// <reference types="@2gis/gl-matrix" />
import { MapState, StyleState } from '../types';
import { Collector } from '../worker/collector';
import { LineStyleLayer } from '../expressions/types';
/**
 * Вспомогательная функция для дебага буферов в которых смешаны данные через stride, offset.
 * Возвращает данные такими, какими они будут использоваться в шейдерах.
 * Удобнее всего использовать эту функцию в spreader при аллокации объектов в gpuStorage.
 */
export declare function getChannelArray(channelBuffer: any, arrayBuffer: ArrayBuffer): (number | TypedArray)[] | undefined;
/**
 * Вспомогательная функция для отрисовки identity сцены
 */
export declare function drawIdentifyScene(buffer: Uint8Array, frameBufferSize: Vec2, state: MapState): void;
export declare function drawIdentifyMouse(point: Vec2, frameBufferSize: Vec2, state: MapState): void;
export declare function generateTileBounds(collector: Collector, layer: LineStyleLayer, state: StyleState): void;
