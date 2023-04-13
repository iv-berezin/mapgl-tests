import { IdentifierResponse } from '../map/identifier';
import { MapModules } from '../map/mapModules';
import { SourceStorage } from '../map/sourceStorage';
import { DynamicObjectEventTable } from '../types/dynamicObjects';
import { MapEventTable, EventTarget } from '../types/events';
export declare function createMouseEventTarget(sourceStorage: SourceStorage, search?: IdentifierResponse): EventTarget | undefined;
declare type EventType = keyof DynamicObjectEventTable | keyof MapEventTable;
export declare function emitToLayers(eventType: EventType, search: IdentifierResponse | undefined, originalEvent: MouseEvent | TouchEvent, point: number[], modules: MapModules): void;
export {};
