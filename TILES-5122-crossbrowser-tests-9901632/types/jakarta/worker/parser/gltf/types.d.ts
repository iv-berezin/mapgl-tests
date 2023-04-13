/// <reference types="@2gis/gl-matrix" />
import * as RawGlTf from './specTypes';
export { RawGlTf };
export declare type Gltf = Required<Omit<RawGlTf.GlTf, 'nodes' | 'buffers' | 'images'>> & {
    path: string;
    nodes: GltfNode[];
    buffers: GltfBuffer[];
    images: GltfImage[];
};
export declare type GltfNode = Omit<RawGlTf.Node, 'rotation' | 'matrix' | 'scale' | 'translation'> & {
    rotation: Vec4;
    matrix?: Mat4;
    scale: Vec3;
    translation: Vec3;
};
export declare type GltfBuffer = RawGlTf.Buffer & {
    buffer?: ArrayBuffer;
};
export declare type GltfBufferView = RawGlTf.BufferView;
export declare type GltfImage = RawGlTf.Image & {
    image?: ImageBitmap;
};
export declare type GltfMesh = RawGlTf.Mesh;
export declare type GltfMeshPrimitive = RawGlTf.MeshPrimitive;
export declare type DracoDecoderModule = any;
export declare type DracoDecoder = any;
export declare type DracoDecoderBuffer = any;
export declare type DracoExtension = any;
export declare type DracoMesh = any;
export declare type DracoAttributes = any;
export declare type DracoAttribute = any;
