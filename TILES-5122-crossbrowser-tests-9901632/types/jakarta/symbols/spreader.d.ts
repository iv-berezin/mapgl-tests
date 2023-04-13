import { TileObject } from '../tiles/tileObject';
import { Renderer } from '../map/renderer';
import { SpreaderResult } from '../types/symbols';
import { GeneratedObjectBatch } from '../types';
/**
 * Создает из данных генераторов объекты сцены.
 */
export declare function spreader(renderer: Renderer, data: Array<GeneratedObjectBatch<any, any>>, tile: TileObject): SpreaderResult;
