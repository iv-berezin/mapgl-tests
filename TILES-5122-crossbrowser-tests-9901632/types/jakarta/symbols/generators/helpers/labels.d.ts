/// <reference types="@2gis/gl-matrix" />
import { Glyph } from '../../../utils/fonts/glyphs';
import { FullTextMetrics } from '../../../utils/fonts';
import { Label } from '../../../worker/labeling/label';
import { PointStyleLayer } from '../../../expressions/types';
import { LabelIndex, PointTextBucket } from '../point';
import { LabelLineRasterBucket } from '../labelLine';
import { OneWayLineRasterBucket } from '../oneWayLine';
export declare function appendScreenLabel(buckets: {
    [range: number]: PointTextBucket;
}, label: Label, anchor: Vec3, textMetrics: FullTextMetrics, layer: PointStyleLayer, labelIndex: LabelIndex): void;
export declare function appendLinearGlyph(bucket: LabelLineRasterBucket, anchor: number[], pen: number[], glyph: Glyph, angle: number, minStyleZoom: number, maxStyleZoom: number): void;
export declare function appendOneWayLine(bucket: OneWayLineRasterBucket, anchor: number[], angle: number): void;
export declare function getVOffset(vAlign: number, fontLineHeight: number, linesCount: number): number;
