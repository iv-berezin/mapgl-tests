import { StyleState, TileCoords } from '../../types';
import { Collector } from '../collector';
import { TrafficTileServerData } from '../../types/traffic';
import { Metatile } from '../../types/styles';
import { HandyStyle } from '../../expressions/types';
export declare function processTrafficTile(collector: Collector, metatile: Metatile, style: HandyStyle, styleState: StyleState, pixelRatio: number, data: TrafficTileServerData, coords: TileCoords, sourceId: number): import("../../types").CollectorOutput;
