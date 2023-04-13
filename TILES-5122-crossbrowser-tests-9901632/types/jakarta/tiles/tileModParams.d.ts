import { StyleState } from '../types';
import { Int64 } from '../utils/structures/int64';
import { IdSet } from '../utils/structures/idSet';
/**
 * Параметры, которые влияют на создание нового мода
 * Если хотя бы один из них меняется, то необходимо проверить текущие моды на актуальность
 */
export declare class TileModParams {
    readonly styleId: number;
    protected selectedIds: Int64[];
    protected styleState: StyleState;
    protected tileRevision: number;
    protected styleRevision: number;
    private tileIds?;
    constructor(selectedIds: Int64[], styleState: StyleState, tileRevision: number, styleId: number, styleRevision: number);
    static equal(a: TileModParams, b: TileModParams): boolean;
    /**
     * Возвращает shallow copy параметров
     */
    clone(): TileModParams;
    stringify(): string;
    getSelectedIds(): Int64[];
    setTileIds(idSet: IdSet): void;
}
