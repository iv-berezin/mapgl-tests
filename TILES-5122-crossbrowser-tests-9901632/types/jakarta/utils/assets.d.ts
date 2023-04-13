import { HandyStyle } from '../expressions/types';
import { StyleOptions } from '../types';
export declare function getFontUrl(name: string, range: number, style: HandyStyle): string;
export declare function getIconUrl(name: string, style: HandyStyle, subdomain: string): string;
export declare function getUrlForIconMapIcon(name: string, style: HandyStyle, subdomain: string): string;
export declare function getModelUrl(name: string, style: HandyStyle): string;
export declare function applyStyleOptions(style: HandyStyle, options: Required<StyleOptions>): void;
export declare function getStyleUrl(options: Required<StyleOptions>): string;
export declare function injectStyleId(str: string, id: string): string;
/**
 * Проверяет, является ли строка абсолютным URL. То есть, начинается
 * ли она с http://, https:// или c //
 *
 * @param url - проверяемая строка
 */
export declare function isAbsoluteUrl(url: string): boolean;
export declare function joinUrl(...components: string[]): string;
