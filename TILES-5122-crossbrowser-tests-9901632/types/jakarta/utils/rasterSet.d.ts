import { UniqueRasterSet, Raster, LoadedRasterSet } from '../types/styles';
import { Int64 } from './structures/int64';
export declare function createUniqueRasterSet(id: Int64, sizes: number[], regionId: number, iconAnchor: number[], url?: string): UniqueRasterSet;
export declare function createLoadedRasterSet(rasters: Array<Omit<Raster, 'rasterIndex' | 'rasterSetIndex'>>): LoadedRasterSet;
/**
 * Из переданного массива растров выбирает тот, у которого ширина наиболее
 * близка к переданной.
 */
export declare function selectRaster(rasters: Raster[], wantedWidth: number, onlyPacked: boolean): number | undefined;
