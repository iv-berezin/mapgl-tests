import { Collector } from '../../worker/collector';
import { GeneratorContext, HandyStyle, RoadPolygonStyleLayer } from '../../expressions/types';
import { TileCoords } from '../../types';
export declare const RoadPolygonGenerator: {
    symbol: "roadPolygon";
    sinks: {};
    generate(collector: Collector, style: HandyStyle, layer: RoadPolygonStyleLayer, ctx: GeneratorContext<any>, tileCoords: TileCoords, vertices: Array<ArrayLike<number>>, dpi: number): void;
};
/**
 * Вычисляет векторы нормали для каждой вершины
 */
export declare function getLineExtenders(px: ArrayLike<number>, py: ArrayLike<number>): number[][][];
