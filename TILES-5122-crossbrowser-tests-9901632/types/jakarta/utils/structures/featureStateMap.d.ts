import { FeatureState } from '../../sources/types';
import { TwoKeyMap } from './twoKeyMap';
export declare class FeatureStateIdsMap extends TwoKeyMap<FeatureState> {
    featureAttrs: Set<string>;
    clearAttrs: boolean;
    constructor(featureStateIdsMap?: FeatureStateIdsMap);
    set(hi: number, lo: number, data: FeatureState): void;
}
