/// <reference types="@2gis/gl-matrix" />
import { MapState, AnimationOptions } from '../types';
declare const defaultStartOptions: {
    easing: string;
    forceFinalValue: boolean;
    renderAfterUpdate: boolean;
};
export declare function get(tickerName: string, state: MapState): any;
export declare function start(name: string, options: AnimationOptions & Partial<typeof defaultStartOptions>, state: MapState, from: number | Vec3, to: number | Vec3, duration: number, attributes?: any): void;
export declare function stop(name: string, state: MapState): void;
export declare function exist(name: string, state: MapState): boolean;
export declare function getElapsedTime(name: string, state: MapState): number;
export interface TickerOptions {
    step?: (state: MapState, value: any, attributes: any) => void;
    complete?: (state: MapState) => void;
}
export declare function update(name: string, options: TickerOptions, state: MapState): void;
export {};
