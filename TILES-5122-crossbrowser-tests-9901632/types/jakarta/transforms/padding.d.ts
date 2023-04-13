import { MapState, Padding } from '../types';
import { Renderer } from '../map/renderer';
import { PaddingAnimationOptions } from '../types';
export declare const set: (state: MapState, renderer: Renderer, padding: Padding, options?: PaddingAnimationOptions) => void;
export declare const update: (state: MapState, renderer: Renderer) => void;
