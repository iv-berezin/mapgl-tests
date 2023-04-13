/// <reference types="@2gis/gl-matrix" />
import { MapState, CenterAnimationOptions } from '../types';
export declare const set: (state: MapState, center: Vec3, options?: CenterAnimationOptions) => void;
export declare const stop: (state: MapState) => void;
export declare const update: (state: MapState) => void;
