import { Glyph } from './glyphs';
import { GlyphData } from '../../types/styles';
import { TwoKeyMap } from '../structures/twoKeyMap';
import { HandyExpression, HandyStyle, ResolveContext } from '../../expressions/types';
/**
 * Инстанс класса используется для возврата информации
 * о графическом представлении строкового аргумента (ширина строки в пикселях и т.д.)
 */
export declare class TextMetrics {
    glyphs: Glyph[];
    width: number;
    constructor(text: string, glyphs: GlyphData | undefined, letterSpacing: number);
}
export interface FullTextMetrics {
    lines: TextMetrics[];
    /**
     * Ширина самой длинной линии, рассчитанная для базового размера шрифта,
     * см. fonts.baseSize в ./src/fonts
     */
    maxWidth: number;
}
export declare function getTextMetrics(text: string, letterSpacing: number, glyphs: GlyphData | undefined): FullTextMetrics;
/**
 * Вернет true, если все нужные глифы шрифта загружены, иначе false.
 *
 * @param fontName
 * @param ranges
 * @param loadedGlyphs
 * @returns
 */
export declare function allFontGlyphsLoaded(fontName: string, ranges: number[], loadedGlyphs: TwoKeyMap<boolean>): boolean;
export declare function getFontNameWithFallback(fontName: string | HandyExpression<string> | undefined, context: ResolveContext<string>, style: HandyStyle): string | undefined;
export interface FontAtlas {
    glyphData: GlyphData;
    bitmap: ArrayBuffer;
    width: number;
    height: number;
}
export declare function processFont(fontData: ArrayBuffer): FontAtlas;
