import { Gltf, RawGlTf } from './types';
export declare const emptyJsonGltf: RawGlTf.GlTf;
export declare function fetchGltf(url: string): Promise<Gltf>;
