/// <reference types="@2gis/gl-matrix" />
import { Padding } from '../types';
export declare function concatPaddings(padding1: Padding, padding2: Padding): Padding;
export declare function positivePadding(padding: Padding): Padding;
export declare function sizeClampPadding(padding: Padding, size: Vec2): Padding;
export declare function normalizePadding(padding: Padding, size: Vec2): Padding;
