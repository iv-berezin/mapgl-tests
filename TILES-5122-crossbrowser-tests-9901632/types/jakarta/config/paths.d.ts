/**
 * Пути до различных бекендов карты.
 *
 * На данный момент бекенды карты ресолвятся по-разному в зависимости от
 * того куда деплоим. Если деплой идет на бой, то в карту зашиваются
 * боевые бекенды 2gis. В случае деплоя on-premise (selfhosting) в карту
 * зашиваются шаблонные переменные, которые подменяются уже внутри докер образа.
 */
export declare const tileServerPath: string;
export declare const trafficServerPath: string;
export declare const floorsServerPath: string;
export declare const styleServerPath = "https://styles.api.2gis.com";
export declare const defaultFontsPath = "https://mapgl.2gis.com/api/fonts";
export declare const defaultIconsPath = "https://disk.2gis.com/styles/assets/icons";
export declare const defaultLegacyIconsPath = "https://disk.2gis.com/styles/{id}";
export declare const defaultModelsPath = "https://disk.2gis.com/styles/assets/models";
export declare const keyServerPath: string;
export declare const rtlPluginUrl: string;
export declare const rtlPluginHash: string;
export declare const threeJsPath = "https://disk.2gis.com/mapgl-api/threejs";
export declare const dracoDecoderGltfModulePath = "https://mapgl.2gis.com/api/js/plugins/draco_decoder_gltf.js";
