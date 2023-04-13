import { MapClass } from '../map';
import { GeoPoint } from '../types';
import { DynamicObject } from '..';
export declare type IconTransformerParams = {
    type: 'raster';
    source: HTMLImageElement;
} | {
    type: 'vector';
    source: string;
} | {
    type: 'unknown';
};
export interface OnlineMarkerIcon {
    url: string;
    transformer?: (params: IconTransformerParams) => string;
    size: number[];
    anchor: number[];
}
export interface OnlineMarkerOptions {
    coordinates: GeoPoint;
    zIndex: number;
    icon: OnlineMarkerIcon;
}
/**
 * Маркер, который используется только для Онлайна
 * - Если хочешь добавить что-то в него не для онлайна, не делай этого!
 * - Если видишь, что тут есть что-то, что не используется онлайном, то выпили это!
 */
export declare class OnlineMarker extends DynamicObject<OnlineMarker> {
    private position;
    private isDestroyed;
    private zIndex;
    private labelKey;
    constructor(map: MapClass, options: OnlineMarkerOptions);
    destroy(): void;
    setIcon({ url, transformer, size, anchor }: OnlineMarkerIcon): void;
    private removeIcon;
}
