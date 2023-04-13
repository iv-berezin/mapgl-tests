import { StyleColor, StyleGradient } from './types';
export declare function isColorString(color: any): color is string;
export declare function isStyleColor(color: any): color is StyleColor;
export declare function isStyleGradient(color: any): color is StyleGradient;
/**
 * Представляет цвет в формате StyleColor.
 * Поддерживает форматы:
 * - #ff0
 * - #ffff00
 * - hsl(100, 50%, 50%)
 * - hsla(100, 50%, 50%, 1)
 * - rgb(255, 255, 0)
 * - rgba(255, 255, 0, 1)
 */
export declare function handyColor(color: string): StyleColor;
