import { MainConnector } from '../utils/thread/connector';
import { FnRegistry } from '../utils/thread/fnRegistry';
import { ClassRegistry } from '../utils/thread/classRegistry';
declare function createParserFunctions(fnRegistry: FnRegistry, classRegistry: ClassRegistry): {
    setMetatile: (hash: number, metatile: import("../types/styles").Metatile) => Promise<void>;
    generateFloor: (floorId: string, regionId: number, pixelRatio: number, floorIndex: number, selectedIds: import("../utils/structures/int64").Int64[], styleId: number, styleState: import("../types").StyleState, sourceId: number, mobileSdkMode: boolean) => Promise<import("../types/threads").ProcessFloorResponse>;
    loadFloor: (floorId: string, floorsUrl: string) => Promise<import("../types/threads").LoadFloorSuccessResponse | import("../types/threads").LoadFloorErrorResponse>;
    appendHiddenObjectIds: (ids: import("../utils/structures/int64").Int64[]) => Promise<void>;
    prepareAtlas: (url: string) => Promise<import("../types/threads").PrepareAtlasResponse>;
    packRasters: (dimensions: Uint16Array) => Promise<import("../types/threads").PackRastersResponse>;
    fetchTrafficTile: (data: {
        coords: import("..").TileCoords;
        tileServer: string;
        tileProtocol: string;
        regionIds: number[];
        timestamp: number;
    }) => Promise<void>;
    deleteTrafficTile: (key: string) => Promise<void>;
    abortTrafficTileRequest: (key: string) => Promise<void>;
    generateTrafficTile: (args_0: {
        coords: import("..").TileCoords;
        pixelRatio: number;
        styleState: import("../types").StyleState;
        styleId: number;
        sourceId: number;
    }) => Promise<import("../types/threads").ProcessTileResponse>;
    generatePersonalPoi: (pois: import("..").PersonalPoi[], regionId: number, metatileHash: number, pixelRatio: number, selectedIds: import("../utils/structures/int64").Int64[], styleId: number, styleState: import("../types").StyleState, sourceId: number) => Promise<import("../types/threads").ProcessPersonalPoiResponse | undefined>;
    syncStyle: (style: import("../expressions/types").HandyStyle) => Promise<void>;
    loadModel: (styleId: number, modelIndex: number) => Promise<import("../worker/parser/gltf/types").Gltf | undefined>;
    GeoJsonSource: any;
    ZenithSource: any;
};
declare function createLabelingFunctions(fnRegistry: FnRegistry): {
    setCommercialPoiRandomSeed: (seed: number) => Promise<void>;
    appendFont: (name: string, glyphData: import("../types/styles").GlyphData) => Promise<void>;
    markFontAsLoaded: (name: string, range: number) => Promise<void>;
    addNewRasterSets: (styleId: number, newRasterSets: import("../types/styles").RasterSet[]) => Promise<void>;
    updatePackingInfo: (styleId: number, packedRasters: Uint16Array) => Promise<void>;
    syncStyle: (style: import("../expressions/types").HandyStyle) => Promise<void>;
    loadRtlPlugin: (pluginSource: string) => Promise<void>;
    markRtlPluginLoaded: () => Promise<void>;
};
export declare class Workers {
    parser: ReturnType<typeof createParserFunctions>;
    labeling: ReturnType<typeof createLabelingFunctions>;
    connector: MainConnector;
    fnRegistry: FnRegistry;
    classRegistry: ClassRegistry;
    private parserWorker;
    private labelingWorker;
    constructor();
    destroy(): void;
}
export {};
