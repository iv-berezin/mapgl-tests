import { UrlType } from '../../types';
import { MapClass } from '../../map';
import { BinaryFeatureStateMap, FeatureStateMap, Source, SourceAttributes } from '../types';
import { ZenithSourceOptions } from './core';
export declare class ZenithSource implements Source {
    private options;
    type: "zenith";
    /**
     * mapglApiSource - прокси для типизированного в mapgl-api источника.
     * Необходимо для возможности вернуть в событиях источник созданный в mapgl-api
     */
    mapglApiSource: any;
    private id;
    private state;
    private modules;
    private zenithSource;
    private tileLayer;
    constructor(map: MapClass, options: ZenithSourceOptions, mapglApiSource?: any);
    getId(): number;
    getAttributes(): SourceAttributes;
    setAttributes(attributes: SourceAttributes): void;
    getUrl(urlType: UrlType, options: {
        [key: string]: string | undefined;
    }): string;
    destroy(): void;
    setFeatureStateMap(featureStateMap: FeatureStateMap): void;
    setFeatureStateMapBinary(featureStateMap: BinaryFeatureStateMap): void;
    isIdentifiedAsDefault(): boolean;
}
