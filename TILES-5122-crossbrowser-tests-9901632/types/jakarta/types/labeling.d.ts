/// <reference types="@2gis/gl-matrix" />
import { Label } from '../worker/labeling/label';
export declare const enum LabelPointType {
    Common = 0,
    Commercial = 1,
    CommercialCity = 2,
    Landmark = 3
}
export declare const enum LabelGeometryType {
    Point = 0,
    Line = 1
}
export declare const enum LabelSource {
    Tile = 0,
    Floor = 1,
    DynamicObject = 2,
    PersonalPoi = 3
}
export declare const enum BBoxType {
    Dead = 0,
    Alive = 1,
    Unused = 2,
    CommercialAlive = 3,
    CommercialDead = 4
}
export declare const enum LabelingElementType {
    Text = 0,
    Icon = 1,
    PoiText = 2,
    PoiText2 = 3,
    OneWayLine = 4,
    LineText = 5,
    Box = 6
}
export declare type LabelStorage = Map<string, Label[]>;
export interface LabelBoxData {
    id: number;
    width: number;
    height: number;
    position: Vec3;
    offset: Vec2;
    labelingGroup: string;
    parentPoiId?: string;
}
export declare type LabelBoxStorage = Map<string, LabelBoxData>;
export interface SourceLabelingGroupConfig {
    groups: string[];
    table: boolean[][];
}
export interface LabelingGroupConfig {
    table: LabelingGroupTable;
    indexToGroup: string[];
    groupToIndex: {
        [name: string]: number;
    };
}
export interface LabelingGroupTable {
    [group: string]: {
        [group: string]: boolean;
    };
}
/**
 * Объект использующийся для передачи данных лейблов из TileLayer в воркер лейблинга
 */
export interface ProcessTileLayerLabels {
    sourceId: number;
    /**
     * Сообщает лейблингу, нужно ли анимировать все лейблы данного сорса.
     * Анимация отключиться не только у лейблов, ключи которые будут переданные в этом объекте,
     * но и у старых лейблов, которые должны будут скрыться.
     * Лейблы не анимируются, если происходит процесс обновление данных в источнике после вызова `source.setData()`.
     */
    animate: boolean;
    /**
     * Список ключей тайл модов, лейблы которого должны в данный момент показываться на карте.
     */
    labelsKeys: string[];
}
