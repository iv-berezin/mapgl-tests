import { MapState } from '../types';
declare type Options = NoAnimationOptions | AnimationOptions;
interface NoAnimationOptions {
    animate: false;
    to: number;
}
interface AnimationOptions {
    animate: true;
    easing: string;
    from: number;
    to: number;
    duration: number;
}
export declare const set: (state: MapState, buildingHeights: Map<number, number>, options: Options, styleZoom: number) => void;
export declare const update: (state: MapState, buildingHeights: Map<number, number>, styleZoom: number) => void;
export {};
