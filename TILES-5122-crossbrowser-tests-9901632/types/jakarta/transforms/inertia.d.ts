/// <reference types="@2gis/gl-matrix" />
import { MapState } from '../types';
export declare const set: (state: MapState, startPoint: Vec3, startSpeed: number, direction: Vec3, distance: number) => void;
export declare const stop: (state: MapState) => void;
export declare const update: (state: MapState, container: HTMLElement) => void;
