import { Int64 } from '../utils/structures/int64';
import { fontNames } from '../constants';
import { Glyph } from '../utils/fonts/glyphs';
export interface TileProps {
    [name: string]: number;
}
export interface TilePropsByIndex {
    [index: number]: string;
}
export interface DefaultProps {
    [name: string]: {
        index: number;
        value: number;
    };
}
/** Словари значений для тайловых свойств (значение -> индекс) */
export interface Dictionaries {
    [prop: string]: {
        [value: string]: number;
    };
}
/** Словари индексов значений для тайловых свойств (индекс -> значение) */
export interface ReverseDictionaries {
    [prop: string]: {
        [valueIndex: number]: string;
    };
}
export declare type TileAttrs = any[];
export declare type FeatureAttrs = any[];
export interface SourceRaster {
    /** Ширина в пикселях изображения, с учетом pixelRatio */
    w: number;
    /** Высота в пикселях изображения, с учетом pixelRatio */
    h: number;
    anchorX: number;
    anchorY: number;
}
export interface SourcePngRasterSet {
    format?: 'png';
    name: string;
    fileName: string;
    rasters: SourceRaster[];
}
export interface SourceSvgRasterSet {
    format: 'svg';
    name: string;
    fileName: string;
    anchorX: number;
    anchorY: number;
}
export declare type SourceRasterSet = SourcePngRasterSet | SourceSvgRasterSet;
export interface SourceMetatile {
    classes?: {
        [name: string]: number;
    };
    objectClasses?: {
        [name: string]: number;
    };
    sublayers?: {
        [name: string]: number;
    };
    version: string;
    zenithVersion: string;
    date: string;
    tileProps: string[];
    defaultProps: {
        [name: string]: number;
    };
    /** Словари значений тайловых свойств */
    enumerationValues: Dictionaries;
}
export interface Raster extends SourceRaster {
    rasterIndex: number;
    rasterSetIndex: number;
    x: number;
    y: number;
    atlasIndex: number;
    isPacked: boolean;
}
export declare const enum RasterSetType {
    Static = 0,
    Unique = 1,
    Loaded = 2
}
export interface StaticRasterSet {
    type: RasterSetType.Static;
    isSvg: boolean;
    index: number;
    key: string;
    name: string;
    fileName: string;
    anchorX: number;
    anchorY: number;
    rasters: Raster[];
}
export interface UniqueRasterSet {
    type: RasterSetType.Unique;
    isSvg: false;
    index: number;
    key: string;
    name: '';
    fileName: string;
    rasters: Raster[];
    id: Int64;
    regionId: number;
    url?: string;
}
export interface LoadedRasterSet {
    type: RasterSetType.Loaded;
    isSvg: false;
    index: number;
    key: string;
    name: '';
    fileName: string;
    rasters: Raster[];
}
export declare type RasterSet = StaticRasterSet | UniqueRasterSet | LoadedRasterSet;
export interface Metatile {
    version: string;
    /** Мапа тайловыйх свойств */
    tileProps: TileProps;
    /**
     * Мапа индексов тайловых свойств.
     * Фактически используется только в processTile для перевод индекса поля в его название.
     * Что бы понять есть ли для этого поля словарь.
     */
    tilePropsByIndex: TilePropsByIndex;
    /** Значения по умолчанию для тайловых свойств */
    defaultProps: DefaultProps;
    /** Словари значений для тайловых свойств */
    dictionaries: Dictionaries;
    /** Словари индексов значений для тайловых свойств */
    reverseDictionaries: ReverseDictionaries;
}
export declare type FontNames = typeof fontNames;
export declare type FontName = typeof fontNames[number];
export interface GlyphData {
    [glyphId: number]: Glyph;
}
