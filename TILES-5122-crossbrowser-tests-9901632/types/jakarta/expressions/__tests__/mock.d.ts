import { HandyGroupLayer, HandyStyleLayer, HandyStyle } from '../types';
import { RasterSet, StaticRasterSet } from '../../types/styles';
export declare function mockLayer({ id, innerId, type, style, }?: {
    id?: string;
    innerId?: number;
    renderIndex?: number;
    type?: HandyStyleLayer['type'];
    style?: any;
}): HandyStyleLayer;
export declare function mockGroup({ id, innerId, renderIndex, layers, }?: {
    id?: string;
    innerId?: number;
    renderIndex?: number;
    layers?: HandyStyleLayer[];
}): HandyGroupLayer;
export declare function mockStaticRasterSet({ name, key, index, }: {
    name: string;
    key: string;
    index: number;
}): StaticRasterSet;
export declare function mockStyle({ id, layers, groups, rasterSets, }?: {
    id?: number;
    layers?: HandyStyleLayer[];
    /**
     * Подслои группы нужно обязательно заспредить в желаемое место в массиве layers, иначе их не будет.
     * Такой подход позволяет явно манипулировать составом слоев в стиле при написании тестов.
     */
    groups?: HandyGroupLayer[];
    rasterSets?: RasterSet[];
}): HandyStyle;
