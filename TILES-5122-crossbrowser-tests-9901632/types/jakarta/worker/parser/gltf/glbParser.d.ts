import { RawGlTf } from './types';
/**
 * Класс реализующий парсинг файлов моделей в формате glb.
 * Specification: https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#glb-file-format-specification
 */
export declare class GlbParser {
    private static glbHeaderInts;
    private static glbChunkHeaderInts;
    private static glbMagic;
    private static glbVersion;
    private static jsonChunkType;
    private static binaryChunkType;
    private data;
    constructor(data: ArrayBuffer);
    extractGlbData(): {
        json: RawGlTf.GlTf;
        buffers: ArrayBuffer[];
    };
    private getCheckedGlbInfo;
    private getAllChunkInfos;
    private getChunkInfo;
    private getJsonFromChunk;
    private getBufferFromChunk;
    private checkEquality;
}
