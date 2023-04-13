import { BaseTile } from '../tile';
import { TileCoords } from '../../types';
export interface DataTile extends BaseTile {
    type: 'data';
}
/**
 *
 * @param type
 * @param coords
 */
export declare function createDataTile(coords: TileCoords): DataTile;
