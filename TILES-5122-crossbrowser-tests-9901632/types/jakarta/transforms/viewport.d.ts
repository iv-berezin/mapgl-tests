import { MapState, Viewport } from '../types';
import { Renderer } from '../map/renderer';
import { ViewportAnimationOptions } from '../types';
export declare const set: (state: MapState, container: HTMLElement, renderer: Renderer, viewport: Partial<Viewport>, options?: ViewportAnimationOptions) => void;
export declare const update: (state: MapState, container: HTMLElement, renderer: Renderer) => void;
