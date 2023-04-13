/// <reference types="@2gis/gl-matrix" />
import { Collector } from '../../worker/collector';
import { TileCoords, TileInfo, LabelingState } from '../../types';
import { BucketType, GeneratorSink } from '../../types/generators';
import { AnchorWorld, LabelingTileElement } from '../../worker/labeling/elements/labelingTile';
import { Label } from '../../worker/labeling/label';
import { IdSet } from '../../utils/structures/idSet';
import { GeneratorContext, HandyStyle, HandyStyleLayer } from '../../expressions/types';
import { Camera } from '../../map/camera';
import { GeneratingLayerType, SinkName } from '../../types/generatedSceneObjects';
import { Metatile } from '../../types/styles';
/**
 * Безопасно наполняет коллектор данными через генератор.
 * Если в процессе генерации коллектор был переполнен,
 * то расширяет его и запускает генератор заново.
 */
export declare function generateSafely<T extends any[]>({ collector, generator, args, }: {
    collector: Collector;
    generator: (collector: Collector, ...args: T) => void;
    args: T;
}): void;
/**
 * Типообразующий объект для генераторов.
 * Задает соответствие стилевых слоев и генераторов.
 * Написал новый генератор? - добавь его сюда, иначе остальные типы не увидят его.
 */
export declare const generatorsByStyleLayer: {
    arrow: {
        symbol: "arrow";
        sinks: {
            stroke: {
                stride: number;
                binder: (bucket: import("./arrow").ArrowStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, count: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    isLongArrow: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate: (collector: Collector, styleId: number, layer: import("../../expressions/types").ArrowStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[]) => void;
    };
    line: {
        symbol: "line";
        sinks: {
            solid: {
                stride: number;
                binder: (bucket: import("./line").LineSolidBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").LineStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[]): void;
    };
    polygon: {
        symbol: "polygon";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./polygon").PolygonFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: number | import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<{
                    styleId: number;
                    layerId: number;
                    hiddenObjectId: string | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                }>;
            };
            stroke: {
                stride: number;
                binder: (bucket: import("./polygon").PolygonStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: number | import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<{
                    styleId: number;
                    layerId: number;
                    hiddenObjectId: string | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                }>;
            };
        };
        generate(collector: Collector, style: HandyStyle, layer: import("../../expressions/types").PolygonStyleLayer | import("../../expressions/types").RoadPolygonStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[], dpi: number, hiddenObjectIds?: IdSet | undefined, floorId?: import("../../utils/structures/int64").Int64 | undefined): void;
    };
    roadPolygon: {
        symbol: "roadPolygon";
        sinks: {};
        generate(collector: Collector, style: HandyStyle, layer: import("../../expressions/types").RoadPolygonStyleLayer, ctx: GeneratorContext<any>, tileCoords: TileCoords, vertices: ArrayLike<number>[], dpi: number): void;
    };
    labelLine: {
        symbol: "labelLine";
        sinks: {
            raster: {
                stride: number;
                binder: (bucket: import("./labelLine").LabelLineRasterBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (label: Label, animDirection: number, range: number, fontIndex: number) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    animDirection: number;
                    range: number;
                    fontIndex: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        processElement(style: HandyStyle, collector: Collector, element: LabelingTileElement, animDirection: number, _pixelRatio: number, state: LabelingState, tileInfo: TileInfo): void;
        getLabelingInfo(): void;
    };
    lineExtrusion: {
        symbol: "lineExtrusion";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./lineExtrusion").LineExtrusionFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<import("../../utils/objectAttributes").ObjectAttributes>;
            };
            topStroke: {
                stride: number;
                binder: (bucket: import("./lineExtrusion").LineExtrusionTopStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<import("../../utils/objectAttributes").ObjectAttributes>;
            };
            sideStroke: {
                stride: number;
                binder: (bucket: import("./lineExtrusion").LineExtrusionSideStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<import("../../utils/objectAttributes").ObjectAttributes>;
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").LineExtrusionStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[]): void;
    };
    polygonExtrusion: {
        symbol: "polygonExtrusion";
        sinks: {
            sideFill: {
                stride: number;
                binder: (bucket: import("./polygonExtrusion").PolygonExtrusionFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<{
                    styleId: number;
                    layerId: number;
                    hiddenObjectId: string | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                }>;
            };
            topFill: {
                stride: number;
                binder: (bucket: import("./polygonExtrusion").PolygonExtrusionFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<{
                    styleId: number;
                    layerId: number;
                    hiddenObjectId: string | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                }>;
            };
            sideStroke: {
                stride: number;
                binder: (bucket: import("./polygonExtrusion").PolygonExtrusionSideStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<{
                    styleId: number;
                    layerId: number;
                    hiddenObjectId: string | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                }>;
            };
            topStroke: {
                stride: number;
                binder: (bucket: import("./polygonExtrusion").PolygonExtrusionTopStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: import("../../types/generators").AttributesUnpacker<{
                    styleId: number;
                    layerId: number;
                    hiddenObjectId: string | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                }>;
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").PolygonExtrusionStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[], generateContours: boolean, hiddenObjectIds?: IdSet | undefined, demPosition?: Vec2 | undefined, floorId?: import("../../utils/structures/int64").Int64 | undefined): void;
    };
    oneWayLine: {
        symbol: "oneWayLine";
        sinks: {
            raster: {
                stride: number;
                binder: (bucket: import("./oneWayLine").OneWayLineRasterBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (label: Label, animDirection: number) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    animDirection: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        processElement(_metaStyle: HandyStyle, collector: Collector, element: LabelingTileElement, animDirection: number, _pixelRatio: number, _state: LabelingState, tileInfo: TileInfo): void;
        getLabelingInfo(): void;
    };
    dashedLine: {
        symbol: "dashedLine";
        sinks: {
            stroke: {
                stride: number;
                binder: (bucket: import("./dashedLine").DashedLineStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").DashedLineStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[]): void;
    };
    shiftedLine: {
        symbol: "shiftedLine";
        sinks: {
            solid: {
                stride: number;
                binder: (bucket: import("./shiftedLine").ShiftedLineSolidBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").ShiftedLineStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[]): void;
    };
    circle: {
        symbol: "circle";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./circleMarker").CircleMarkerFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").CircleStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[]): void;
    };
    buildingModel: {
        symbol: "buildingModel";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./buildingModel").ModelFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, texture: number, matrix: number[], id: number | import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    texture: number;
                    id: string | undefined;
                    matrix: number[];
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            stroke: {
                stride: number;
                binder: (bucket: import("./buildingModel").ModelStrokeBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, matrix: number[], id: number | import("../../utils/structures/int64").Int64, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    id: string | undefined;
                    matrix: number[];
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        processSubmesh(styleId: number, layer: import("../../expressions/types").BuildingModelStyleLayer, ctx: GeneratorContext<any>, collector: Collector, vertices: Uint16Array, indices: Uint16Array, drawMode: number, textureIndex: number, matrix: number[]): void;
        processOuterEdge(styleId: number, layer: import("../../expressions/types").BuildingModelStyleLayer, ctx: GeneratorContext<any>, collector: Collector, vertices: Uint16Array, indices: Uint16Array, matrix: number[]): void;
    };
    gltfModel: {
        symbol: "gltfModel";
        sinks: {
            anchor: {
                stride: number;
                binder: (bucket: import("../../worker/collector/bucket").Bucket<{
                    position: Uint16Array;
                    localID: Uint32Array;
                }>, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>, mapPointCenter: Vec2): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    name: import("../../utils/objectAttributes").ObjectAttributeValue;
                    modelSrc: import("../../utils/objectAttributes").ObjectAttributeValue;
                    buildingId: import("../../utils/objectAttributes").ObjectAttributeValue;
                    lngLat: import("../../utils/objectAttributes").ObjectAttributeValue;
                    lngLatDirection: import("../../utils/objectAttributes").ObjectAttributeValue;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            instances: {
                stride: number;
                binder: (bucket: import("../../worker/collector/bucket").Bucket<{
                    position: Uint16Array;
                    offset: Float32Array;
                    scale: Float32Array;
                    rotate: Float32Array;
                    localID: Uint32Array;
                }>, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, modelId: number, linkedIds: string[], dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    modelId: import("../../utils/objectAttributes").ObjectAttributeValue;
                    linkedIds: import("../../utils/objectAttributes").ObjectAttributeValue;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            fill: {
                stride: number;
                binder: (_bucket: import("../../worker/collector/bucket").Bucket<any>, _buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, style: HandyStyle, layer: import("../../expressions/types").GltfModelStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[], tileCoords: TileCoords): void;
        generateInstanced(collector: Collector, style: HandyStyle, layer: import("../../expressions/types").GltfModelStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[], tileCoords: TileCoords, modelsPath?: string | undefined): void;
    };
    point: {
        symbol: "point";
        sinks: {
            raster: {
                stride: number;
                binder: (bucket: import("./point").PointRasterBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (label: Label, animDirection: number, atlasIndex: number) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    animDirection: number;
                    atlasIndex: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            text: {
                stride: number;
                binder: (bucket: import("./point").PointTextBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (label: Label, animDirection: number, range: number, offsets: Vec2, labelIndex: import("./point").LabelIndex, fontIndex: number) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    animDirection: number;
                    range: number;
                    offsetX: number;
                    offsetY: number;
                    labelIndex: import("./point").LabelIndex;
                    fontIndex: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        processElement(style: HandyStyle, collector: Collector, element: LabelingTileElement, animDirection: number, pixelRatio: number, state: LabelingState, tileInfo: TileInfo): void;
        getLabelingInfo(label: Label, anchorWorld: AnchorWorld, style: HandyStyle, state: LabelingState, camera: Camera, pixelRatio: number): void;
    };
    raster: {
        symbol: "raster";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./rectWithTexture").RasterFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, textureIndex: number): number[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    textureIndex: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, vertices: ArrayLike<number>[], styleId: number, layer: import("../../expressions/types").RasterStyleLayer, textureIndex: number): void;
    };
    heatmap: {
        symbol: "heatmap";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./heatmap").HeatmapFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, textureIndex: number, rampTextureIndex: number) => number[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    textureIndex: number;
                    rampTextureIndex: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            framebuffer: {
                stride: number;
                binder: (bucket: import("./heatmap").HeatmapFramebufferBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number) => number[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").HeatmapStyleLayer, vertices: ArrayLike<number>[], ctx: GeneratorContext<any>): void;
        generateTexture(collector: Collector, styleId: number, layer: import("../../expressions/types").HeatmapStyleLayer, textureIndex: number, rampTextureIndex: number): void;
    };
    dem: {
        symbol: "dem";
        sinks: {
            mesh: {
                stride: number;
                binder: (_bucket: import("../../worker/collector/bucket").Bucket<{}>, _buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number): number[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            ground: {
                stride: number;
                binder: (_bucket: import("../../worker/collector/bucket").Bucket<{}>, _buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number): number[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            elevation: {
                stride: number;
                binder: (_bucket: import("../../worker/collector/bucket").Bucket<{}>, _buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, textureIndex: number): number[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    textureIndex: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            hillshade: {
                stride: number;
                binder: (_bucket: import("../../worker/collector/bucket").Bucket<{}>, _buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number): number[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            flatBottom: {
                stride: number;
                binder: (bucket: import("./dem").FlatBottomBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes(styleId: number, layerId: number, matrix?: number[] | undefined): (number | number[])[];
                unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                    styleId: number;
                    layerId: number;
                    matrix: number[] | undefined;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generateElevation(_collector: Collector, vertices: number[][], styleId: number, layerId: number, textureIndex: number): import("../../types").GeneratedObjectBatch<"dem", "elevation">;
        generateHillshade(_collector: Collector, vertices: number[][], styleId: number, layerId: number): import("../../types").GeneratedObjectBatch<"dem", "hillshade">;
        generateFloorsBottomFill(collector: Collector, styleId: number, vertices: ArrayLike<number>[], extenders: number[][], centroid: number[], matrix?: number[] | undefined): void;
    };
    mesh: {
        symbol: "mesh";
        sinks: {
            fill: {
                stride: number;
                binder: (bucket: import("./mesh").MeshFillBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
            raster: {
                stride: number;
                binder: (bucket: import("./mesh").MeshTextureBucket, buffer: ArrayBuffer) => void;
                packObjectAttributes: (styleId: number, layerId: number, textureIndex: number, dataKeys: import("../../expressions/types").HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
                unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                    styleId: number;
                    layerId: number;
                    textureIndex: import("../../utils/objectAttributes").ObjectAttributeValue;
                    tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
                };
            };
        };
        generate(collector: Collector, styleId: number, layer: import("../../expressions/types").MeshStyleLayer, ctx: GeneratorContext<any>, vertices: ArrayLike<number>[], tileCoords: TileCoords, demPosition?: number[] | undefined): void;
    };
};
/**
 * Основная мапа типов генераторов.
 * Задает соответствие стилевых слоев и типов генераторов.
 */
export declare type Generators = typeof generatorsByStyleLayer;
/**
 * Возвращает имена синков генератора для указанного стилевого слоя
 */
export declare type GeneratorSinkNames<T extends GeneratingLayerType> = keyof Generators[T]['sinks'];
/**
 * Возвращает тип бакета, согласно указанному стилевому слою и синку его генератора
 */
export declare type GeneratorBucketType<T extends GeneratingLayerType, S extends GeneratorSinkNames<T>> = Generators[T]['sinks'][S] extends GeneratorSink<any, any, any> ? BucketType<Generators[T]['sinks'][S]> : never;
/**
 * Возвращает stride в данных для прохода sink генератора символа symbol
 */
export declare function stride(layer: GeneratingLayerType, sink: SinkName): number;
export declare function generateHandyLayers(collector: Collector, style: HandyStyle, layers: HandyStyleLayer[], ctx: GeneratorContext<any>, metatile: Metatile, detailLevel: number | undefined, sourceId: number, tileCoords: TileCoords, dpi: number, vertices: Array<ArrayLike<number>>, hiddenObjectIds: IdSet, generateForAdditionalState?: boolean, modelsPath?: string): void;
/**
 * Обработка элемента лейблинга в генераторе лейблинга
 */
export declare function processElement(style: HandyStyle, layer: HandyStyleLayer, collector: Collector, element: LabelingTileElement, animDirection: number, pixelRatio: number, state: LabelingState, tileInfo: TileInfo): void;
/**
 * Возвращает скопленную информацию о лейблинге в генераторе лейблинга
 */
export declare function getLabelingInfo(label: Label, anchorWorld: AnchorWorld, style: HandyStyle, layer: HandyStyleLayer, state: LabelingState, camera: Camera, pixelRatio: number): void;
