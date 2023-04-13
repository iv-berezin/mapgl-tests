import { MapClass } from '../map';
import { MapPoint, LngLatBounds } from '../types';
import { DynamicObject } from '..';
import { InterpolateExpression } from '../types/publicStyles';
export interface RasterOptions {
    bounds: LngLatBounds;
    image: {
        url: string;
    };
    minZoom?: number;
    maxZoom?: number;
    zIndex?: number;
    opacity?: number | InterpolateExpression;
}
export declare class Raster extends DynamicObject<Raster> {
    private points;
    private textureIndex?;
    private options;
    private styleLayer?;
    private layerId?;
    constructor(map: MapClass, options: RasterOptions);
    destroy(): void;
    updateImage(options: {
        url?: string;
        bounds?: LngLatBounds;
    }): Promise<void>;
    private generate;
    private clean;
}
export declare function geoBoundsToMapRectangle(geoBounds: LngLatBounds): MapPoint[];
