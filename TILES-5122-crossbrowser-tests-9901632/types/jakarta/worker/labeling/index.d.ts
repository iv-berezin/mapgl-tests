import { labeling as labelingConfig } from '../../config';
import { ProcessLabelsResponse } from '../../types/threads';
import { LabelSource, LabelBoxData, ProcessTileLayerLabels } from '../../types/labeling';
import { GlyphData } from '../../types/styles';
import { MetatileGeneratedLabels, LabelingState, TileInfo, StyleState } from '../../types';
import { WorkerContext } from '../../utils/thread/types';
export declare type SetCommercialPoiRandomSeed = (seed: number) => void;
export declare type AppendLabels = (key: string, source: LabelSource, array: MetatileGeneratedLabels[], styleState: StyleState, styleZoom: number) => void;
export declare type AppendLabelBox = (key: string, data: LabelBoxData) => void;
export declare type RemoveLabels = (key: string) => void;
export declare type ProcessLabels = (
/**
 * Лейблы, которые попадают в лейблинг из разных TileLayer-ов
 */
tileLayerLabels: ProcessTileLayerLabels[], 
/**
 * Ключи лейблов, которые попадают в лейблинг иначе
 */
otherLabelKeys: string[], state: LabelingState, tileInfo: TileInfo, pixelRatio: number, hiddenIds: string[], commercialMargins: typeof labelingConfig.commercialMargins, skipHysteresis: boolean) => ProcessLabelsResponse;
export declare type AppendFont = (name: string, glyphData: GlyphData) => void;
export declare type MarkFontAsLoaded = (name: string, range: number) => void;
export declare type UpdatePackingInfo = (styleId: number, packedRasters: Uint16Array) => void;
export declare type ClearPreviousLabels = () => void;
export declare type LoadRtlPlugin = (pluginSource: string) => Promise<void>;
export declare type MarkRtlPluginLoaded = () => void;
export declare type LoadFontRanges = (name: string, ranges: number[]) => void;
export default function labeling(context: WorkerContext): void;
