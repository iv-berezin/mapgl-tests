import { GridState } from '../../types/tiles';
import { Int64 } from '../../utils/structures/int64';
export declare function commercialModelChangeAction(gridState: GridState, diffIds: Int64[]): void;
export declare const testHandles: {
    commercialModelChangeAction: typeof commercialModelChangeAction;
};
