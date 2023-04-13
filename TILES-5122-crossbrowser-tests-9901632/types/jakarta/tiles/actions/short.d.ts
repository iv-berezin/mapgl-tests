import { GridState } from '../../types/tiles';
import { MapState, StyleState } from '../../types';
import { Int64 } from '../../utils/structures/int64';
import { MapModules } from '../../map/mapModules';
export declare function selectAction(modules: MapModules, mapState: MapState, gridState: GridState, selectedIds: Int64[]): void;
export declare function hoverAction(modules: MapModules, mapState: MapState, gridState: GridState, id?: Int64): void;
export declare function styleStateChangeAction(gridState: GridState, styleState: StyleState): void;
export declare function startStyleUpdatingAction(gridState: GridState, styleId: number, styleRevision: number, isFirstStyleUpdate: boolean): void;
export declare function finishStyleUpdatingAction(gridState: GridState): void;
