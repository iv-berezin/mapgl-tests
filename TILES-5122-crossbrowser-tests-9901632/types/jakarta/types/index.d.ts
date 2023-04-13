/// <reference types="@2gis/gl-matrix" />
import { DynamicObject, HtmlMarker, Style } from '..';
import { DataTileLayer } from '../tiles/dataTileLayer';
import { Int64 } from '../utils/structures/int64';
import { ObjectAttributeValue } from '../utils/objectAttributes';
import { PreLabel } from '../symbols/generators/preLabeling/common';
import { GeneratorSinkNames } from '../symbols/generators';
import { GeneratingLayerType } from './generatedSceneObjects';
/**
 * Модуль содержит разные описания типов использующихся на проекте.
 */
/**
 * Точка в координатах экрана
 */
export declare type ScreenPoint = Vec2;
/**
 * Географические координаты, представляют собой массив из двух элементов `[longitude, latitude]`
 */
export declare type GeoPoint = Vec2;
export declare type MapPoint = Vec3;
export declare type TilePoint = Vec3;
export interface TileInfo {
    coords: TileCoords;
    offset: Vec2;
    size: number;
}
/**
 * Структура [x, y, zoom, detailZoom], где:
 * - x, y – координаты тайла в системе отсчета zoom-уровня;
 * - detailZoom – указывает для какого зума тайл сгенерируется. У тайла может быть zoom == 15,
 *   а показываться он должен на 17-ом (используется для базовых тайлов).
 */
export declare type TileCoords = [number, number, number, number];
/**
 * Границы задаются двумя точками
 */
export interface Bounds {
    min: Vec2;
    max: Vec2;
}
/**
 * Двумерный размер: ширина + высота
 */
export interface Size2D {
    w: number;
    h: number;
}
/**
 * Границы в географических координатах
 */
export interface LngLatBounds {
    southWest: number[];
    northEast: number[];
}
export declare type Tetragon = [Vec3, Vec3, Vec3, Vec3];
export interface PersonalPoi {
    id: string;
    point: number[];
    classId: number;
    humanReadableClassId: string | undefined;
    name?: string;
}
export interface IdentifyIds {
    startIndex: number;
    endIndex: number;
    idBuffer: ArrayBuffer;
    floorIdBuffer: ArrayBuffer;
    phaseBuffer: ArrayBuffer;
    sublayerBuffer: ArrayBuffer;
    styleIdBuffer: ArrayBuffer;
    layerIdBuffer: ArrayBuffer;
    instanceIdBuffer: ArrayBuffer;
    objectClassBuffer: ArrayBuffer;
    /**
     * Содержит центры точечных POI для их передачи в события мыши.
     * Для всех других объектов содержит `INVALID_IDENTIFY_CENTER_COORD`.
     */
    centerBuffer: ArrayBuffer;
    /**
     * Мапа строковых значений, которые не могут быть представлены числами.
     *
     * ВНИМАНИЕ:Это мапа должна иметь минимальное количество элементов,
     * добавлять что-то новое с осторожностью! Поскольку она будет передаваться между тредами,
     * а передачи строковых значений происходит медленно.
     *
     * На данный момент строковые значения появляются только в кейсе с персоналазированными POI, а их бывает только меньше 10.
     */
    strings: {
        [index: number]: {
            objectClass: string;
        } | undefined;
    };
}
export interface IdentifyDataChunk {
    ids: IdentifyIds;
    metatileHash: number;
    dynamicObjectId?: number;
    sourceId?: number;
    tileKey?: string;
}
export interface Viewport {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface Stats {
    tileCount: number;
    dynamicTileCount: number;
    drawCount: number;
    vertexCount: number;
}
/**
 * Стейт или глобальные переменнаые стиля.
 */
export interface StyleState {
    [key: string]: number | string | boolean | number[] | string[] | undefined;
}
export interface SourceAttrs {
    [key: string]: boolean | string | number;
}
export interface MapState {
    time: number;
    /** Точка в координатах карты, куда смотрит и вокруг которой вращается камера. */
    center: Vec3;
    zoom: number;
    styleZoom: number;
    /**
     * Тип зума, который мы сохраняем во время перемещения центра карты.
     * Выбирается в зависимости от того, какой тип зума выставил пользователь карте.
     */
    zoomTypePreserving: 'zoom' | 'styleZoom';
    minZoom: number;
    maxZoom: number;
    maxBounds: Bounds;
    rotation: number;
    /**
     * Ограничение поворота карты при малых углах вращения для multitouch.
     * Задается в радианах.
     */
    touchRotationThreshold: number;
    pitch: number;
    minPitch: number;
    maxPitch: number;
    /**
     * Размер вьюпорта карты в логических пикселях.
     * Считается как размер canvas карты минус размеры отступов, указанных во `viewport`
     */
    size: Vec2;
    /**
     * Массив ID выделенных объектов на карте.
     * Важно! Массив должен быть всегда отсортирован, чтобы ключи модов не зависили от порядка.
     */
    selectedIds: Int64[];
    hiddenObjectIds: Set<string>;
    tickers: any;
    stillness: number;
    needRerender: boolean;
    userHasInteracted: boolean;
    /** Отступы вюпорта карты внутри canvas в логических пикселях */
    viewport: Viewport;
    padding: Padding;
    collectStats: boolean;
    stats: Stats;
    labelingOpacity: number;
    needLabeling: boolean;
    tileServer: string;
    tileSet: string;
    tileProtocol: string;
    tileKey: string;
    commercialTileSet: string;
    /**
     * ID нативного мобильного приложения использующего наше SDK
     */
    appId: string;
    /**
     * Уникальный ID сессии пользователя
     * Нужен для отслеживания количества показов SDK на сервере
     * Вне SDK должен быть равен undefined
     */
    sessionId?: string;
    /**
     * Статический ID сессии пользователя
     * Если задан то переопределяет sessionId при запросах за тайлами данных
     * Позволяет кэшировать данные тайлов браузером, нужен для Онлайна
     */
    tileSessionId?: string;
    subdomains: string[];
    floorsEnabled: boolean;
    floorsUrl: string;
    trafficServer: string;
    trafficProtocol: string;
    identifyPickDistance: number;
    lang: string;
    /**
     * Переопределяет заданный в тайлсервере дефолтный язык для сегментов, который приходит из экспорта
     * Подробнее в https://jira.2gis.ru/browse/TILES-2318
     */
    tileServerDefaultLang?: string;
    disableHoverStyles: boolean;
    disableRotationByUserInteraction: boolean;
    disablePitchByUserInteraction: boolean;
    disableDragging: boolean;
    performanceCaveatEmitted: boolean;
    keepCenterWhileUserZoomRotate: boolean;
    /**
     * id-регионов, тайлы которых показаны сейчас
     * или были показаны ранее в текущей сессии
     */
    shownRegionIds: Set<number>;
    preserveDrawingBuffer: boolean;
    defaultBackgroundColor: string;
    handyStyleId: number;
    styleState: StyleState;
    disableIconCache: boolean;
    rtlPlugin: RtlPluginState;
    /**
     * Включает специальный режим совместимости нашей карты с MobileSDK.
     * Важно, что завязываться на этот флаг стоит только в крайнем случае, когда других вариантов убрать различия между картами нет или они слишком сложные.
     */
    mobileSdkMode: boolean;
    /**
     * Маркер, показывающий, что отрисовка карты сейчас идет с учетом рельефа.
     * Нужен, что бы тайловые слои обновлялись при включении/выключении рельефа.
     * Значение устанавливается в каждом renderLoop.
     */
    demMode: boolean;
    /**
     * Координаты вершин вьюпорта на плоскости карты,
     * скорректированные с учетом требований `viewportLimitRatio`.
     * Используются для определения области, для которой нужно запрашивать тайлы.
     * Обновляется в каждом `renderLoop` карты.
     * Порядок: [слева снизу, справа снизу, справа сверху, слева сверху].
     */
    readonly tilesBounds: Tetragon;
    /**
     * Координаты вершин вьюпорта на плоскости карты,
     * скорректированные с учетом высоты камеры над рельефом
     * и минимальной высотой местности в окрестностях камеры.
     * Используются для определения области, для которой нужно запрашивать тайлы меньших зумов.
     * Обновляется в каждом `renderLoop` карты.
     * Порядок: [слева снизу, справа снизу, справа сверху, слева сверху].
     */
    readonly demTilesBounds: Tetragon;
    /**
     * Высота над уровнем моря в центре карты в метрах.
     * Еси рельеф выключен - равно `undefined`.
     * Обновляется в каждом `renderLoop` карты.
     */
    elevation?: number;
    /**
     * Коэффициент высоты рельефа. Он вычисляется каждый кадр, и используется
     * в нескольких местах, так что лучше держать его здесь, для кеширования.
     */
    elevationScale: number;
    /**
     * Минимальная высота над уровнем моря в центре карты.
     * Если рельеф выключен - равно `undefined`.
     * Обновляется в каждом `renderLoop` карты.
     */
    minElevation?: number;
    /**
     * Нужно ли отключить анимацию изменения высоты
     * над уровнем моря в центре карты. Используется в тестах
     */
    skipElevationAnimation?: boolean;
    /** Метрики производительности */
    metrics: OnlinePerformanceMetrics;
    metricsSent: boolean;
    /**
     * Ожидаются ли какие-то визуальные изменения карты после очередного цикла рендеринга.
     * Флаг используется для корректной работы метода isReady.
     */
    shouldIsReadyWaitForUpdates: boolean;
    /**
     * Seed для генерации случайной составляющей приоритета Commercial POI.
     * Если не задан, то используется Math.random
     */
    commercialPoiRandomSeed?: number;
    webglVersion?: WebGLVersion;
    /**
     * Настройки three.js
     */
    threeJs: ThreeJsState;
    /**
     * Следит за изменением размера root-контейнера и ресайзит карту при необходимости.
     * Это происходит не каждый кадр, а с интервалом autoResizeInterval
     */
    enableTrackResize: boolean;
    /**
     * Интервал, с которым происходит проверка на авто-ресайз
     */
    autoResizeInterval: number;
    showDefaultTileBounds: boolean;
    /**
     * Абсолютный путь до моделей в дефолтном источнике. Используется, когда в url моделей относительный путь
     */
    defaultSourceModelsRootUrl?: string;
}
interface ThreeJsState {
    active: boolean;
    path: string;
}
export declare type RtlPluginScenario = 'always-on' | 'always-off' | 'depends-on-language';
export interface RtlPluginState {
    scenario: RtlPluginScenario;
    loadFailed: boolean;
    /**
     * URL, по которому скачивается плагин для поддержки RTL текста
     * По умолчанию задается через конфиг карты,
     * но в крайних кейсах может быть задан через опции карты (для онлайна).
     */
    url: string;
    /**
     * Хэш плагина, который браузер сам сравнивает с хэшом загруженного скрипта.
     * Нужен, чтобы работал SRI.
     */
    hash: string;
}
export interface LabelingState {
    center: Vec3;
    elevation?: number;
    zoom: number;
    styleZoom: number;
    rotation: number;
    size: Vec2;
    buildingHeight: number;
    pitch: number;
    viewport: Viewport;
    padding: Padding;
    styleState: StyleState;
    tilesBounds: Tetragon;
    debugLabels: boolean;
}
export declare type WorkerName = 'main' | 'parser' | 'labeling';
export declare type TilePurpose = 'terrain' | 'traffic' | 'raster' | 'data' | 'labeling' | 'model' | 'dynamicObject' | 'hover' | 'floor' | 'geojson' | 'dem';
export interface GeneratedObjectDescriptor {
    drawMode: number;
    rangeEnd: number;
    rangeStart: number;
    attributes: ObjectAttributeValue[];
}
export interface GeneratedObjectBatch<T extends GeneratingLayerType, S extends GeneratorSinkNames<T>> {
    symbol: T;
    sink: S;
    buffer: ArrayBuffer;
    generatedObjects: GeneratedObjectDescriptor[];
}
export interface MetatileGeneratedLabels {
    metatileHash: number;
    styleId: number;
    labels: PreLabel[];
}
export interface CollectorOutput {
    data: Array<GeneratedObjectBatch<any, any>>;
    labels: PreLabel[];
    geoIds: Uint32Array;
    floorHidingMap: {
        [lo: number]: {
            [hi: number]: number[];
        };
    };
    identifyIds: IdentifyIds;
    packedRasters?: Uint16Array;
    rastersToLoad: Float64Array;
    modelsToLoad: Int32Array;
    transferable: Array<ArrayBuffer | ImageBitmap>;
}
export interface TileRequest {
    tiles: Array<{
        x: number;
        y: number;
        zoom: number;
    }>;
}
export interface TileResponse {
    tileGroups: Array<{
        x: number;
        y: number;
        zoom: number;
        tiles: Array<{
            regionId: number;
            hash: Uint8Array;
            data: Uint8Array;
        }>;
    }>;
}
export interface TileServerMetadata {
    regionId: number;
    metatileHash: number;
}
export declare type TileServerData = TileServerMetadata & {
    data: Uint8Array;
};
export interface NonAbortedFetchTileResolve {
    metadata: TileServerMetadata[];
    invalidTileKey: boolean;
}
/**
 * Исходная модель пришедшая с сервера
 */
export interface SourceModel {
    /**
     * 64-битный ID модели.
     * Предполагаем, что он уникальный для всех моделей, иначе код моделей работать не будет.
     */
    id: string;
    fileName: string;
    offset: Vec2;
    matrix: Mat4;
    bound: Bounds;
    minZoom: number;
    maxZoom: number;
    textureCount: number;
    texturesLoaded: boolean;
}
export declare type UrlType = 'tiles' | 'metatile' | 'modelInfo' | 'model' | 'convertData' | 'dynamicPoi';
export interface AnimationOptions {
    animate?: boolean;
    duration?: number;
    easing?: string;
    /**
     * Анимацию нескольких объектов можно запускать последовательно
     * если указать одинаковый идентификатор анимационной группы,
     * анимация таких объектов будет идти очередью по принципу FIFO.
     * Пока не закончился предыдущий тикер следующий не запустится.
     */
    animationGroup?: string;
}
export declare type ZoomAnimationOptions = AnimationOptions & {
    zoomPoint?: ScreenPoint;
    useHeightForAnimation?: boolean;
    blockBuildingAnimation?: boolean;
};
export declare type RotationAnimationOptions = AnimationOptions & {
    normalize?: boolean;
};
export declare type PitchAnimationOptions = AnimationOptions;
export declare type CenterAnimationOptions = AnimationOptions;
export declare type ViewportAnimationOptions = AnimationOptions;
export declare type PaddingAnimationOptions = AnimationOptions;
export declare const supportedSimpleOptsList: readonly ["disableDragging", "enableTrackResize"];
export declare type SupportedSimpleOpts = typeof supportedSimpleOptsList[number];
export interface MapOptions {
    center: Vec2;
    zoom: number;
    styleZoom?: number;
    minZoom: number;
    maxZoom: number;
    maxBounds?: LngLatBounds;
    rotation: number;
    /**
     * Ограничение поворота карты при малых углах вращения для multitouch.
     * Задается в градусах.
     */
    touchRotationThreshold: number;
    pitch: number;
    minPitch: number;
    maxPitch: number;
    viewport: Viewport;
    padding: Padding;
    tileServer: string;
    tileSet: string;
    tileProtocol: string;
    commercialTileSet: string;
    subdomains: string;
    key: string;
    appId: string;
    /**
     * Уникальный ID сессии пользователя
     * Нужен для отслеживания количества показов SDK на сервере
     * Вне SDK должен быть равен undefined
     */
    sessionId?: string;
    /**
     * Статический ID сессии пользователя
     * Если задан то переопределяет sessionId при запросах за тайлами данных
     * Позволяет кэшировать данные тайлов браузером, нужен для Онлайна
     */
    tileSessionId?: string;
    floorsEnabled: boolean;
    floorsUrl: string;
    collectStats: boolean;
    sendAnalytics: boolean;
    trafficServer: string;
    trafficProtocol: string;
    lang: string;
    /**
     * Переопределяет заданный в тайлсервере дефолтный язык для сегментов, который приходит из экспорта
     * Подробнее в https://jira.2gis.ru/browse/TILES-2318
     */
    tileServerDefaultLang?: string;
    disableHoverStyles: boolean;
    disableZoomOnScroll: boolean;
    disableDragging: boolean;
    enableTrackResize: boolean;
    keepCenterWhileUserZoomRotate?: boolean;
    disableRotationByUserInteraction: boolean;
    disablePitchByUserInteraction: boolean;
    preserveDrawingBuffer?: boolean;
    defaultBackgroundColor: string;
    /**
     * Стиль карты. Принимает ID, URL или объект стиля.
     */
    style: InputStyle;
    /**
     * Стилевые опции - пути до ассетов стиля.
     */
    styleOptions: Partial<StyleOptions>;
    /**
     * Стейт стиля карты. По умолчанию равен {}.
     */
    styleState: StyleState;
    disableIconCache: boolean;
    /**
     * Подключить ли RTL-плагин
     *
     * Значение по умолчанию - 'depends-on-languge'. Плагин будет подключаться
     * при выборе языка 'ar'
     */
    useRtlTextPlugin?: RtlPluginScenario;
    /**
     * Скрытая опция задания URL для RTL-плагина.
     * В обычном режиме и для on-premise берется из конфига.
     */
    rtlPluginUrl?: string;
    /**
     * Скрытая опция задания URL хэша RTL-плагина.
     * В обычном режиме и для on-premise берется из конфига.
     */
    rtlPluginHash?: string;
    /**
     * Нужно ли отключить анимацию изменения высоты
     * над уровнем моря в центре карты. Используется в тестах
     */
    skipElevationAnimation?: boolean;
    /**
     * Включает специальный режим совместимости нашей карты с MobileSDK.
     * Важно, что завязываться на этот флаг стоит только в крайнем случае, когда других вариантов убрать различия между картами нет или они слишком сложные.
     */
    mobileSdkMode: boolean;
    commercialPoiRandomSeed?: number;
    webglVersion?: WebGLVersion;
    /**
     * Подключить ли three.js
     */
    useThreeJs?: boolean;
    /**
     * Путь до скриптов three.js
     */
    threeJsPath?: string;
    showDefaultTileBounds?: boolean;
    defaultSourceModelsRootUrl?: string;
}
/**
 * Стилевые опции - пути до ассетов стиля
 *
 * Поэтому вопросу может быть полезна дока
 * https://confluence.2gis.ru/pages/viewpage.action?pageId=396827787
 */
export interface StyleOptions {
    /**
     * Базовая часть URL до стиля
     */
    rootUrl?: string;
    /**
     * Конечный путь до стиля, обычно style.json
     */
    stylePath?: string;
    /**
     * Путь до иконок
     */
    iconsPath?: string;
    /**
     * Старый путь до иконок
     */
    iconsPathForMap?: string;
    /**
     * Путь до шрифтов
     */
    fontsPath?: string;
    /**
     * Шаблон имени иконки. Нужен для того, чтобы указывать какой вариант
     * имени мы используем - {name} для загрузки иконок с бекенда стилей
     * или {name}.svg - для загрузки иконок в остальных случаях.
     *
     * TODO Этот параметр станет не нужен и должен быть выпилен, когда мы
     * полностью перейдем на иконочную мапу и проведем миграцию иконок.
     */
    iconNameTemplate?: string;
    /**
     * Путь до моделей
     */
    modelsPath?: string;
}
export declare type InputStyle = Style | string;
export declare type DynamicLayer = DynamicObject | HtmlMarker | DataTileLayer<any>;
export interface HandlerState {
    processAction: (action: HandlerAction) => HandlerState;
}
export declare type HandlerAction = MouseEvent | KeyboardEvent | TouchEvent;
/**
 * Padding in pixels from the different sides of the map canvas.
 */
export interface Padding {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
/**
 * Онлайн-метрики производительности.
 *
 * Данные метрики измеряют время наступления значимых для пользователя событий:
 * первой отрисовки, появления контента, интерактивности. Метрики чтобы быть значимыми,
 * должны собираться с большого количества устройств и статистически обрабатываться.
 */
export interface OnlinePerformanceMetrics {
    /**
     * Время запуска конструктора карты, в мс от момента открытия страницы
     */
    start: number;
    /**
     * Время инита карты, в мс относительно события start
     */
    init: number;
    /**
     * Время первой отрисовки (когда нарисовался фон), в мс относительно события start
     */
    firstdraw: number;
    /**
     * Время первой отрисовки, содержащей хоть какие-нибудь объекты, в мс относительно события start
     */
    firstcontent: number;
    /**
     * Время первого непустого лейблинга, в мс относительно события start
     */
    firstlabeling: number;
    /**
     * Время начала работы identify-сцены, в мс относительно события start
     */
    interactive: number;
    /**
     * Время первого события ready, в мс относительно события start
     */
    ready: number;
}
export declare type WebGLVersion = 1 | 2;
/** Конфиг отрисовки WebGL */
export interface WebglState {
    /**
     * Активирует запись Z координаты в буфер глубины.
     * `gl.depthMask(false)`
     */
    depthMask: boolean;
    /**
     * Активирует тест буфера глубины.
     * `gl.enable(gl.DEPTH_TEST)`
     */
    depthTest: boolean;
    /**
     * Определяет функцию тестирования глубины.
     * `gl.depthFunc(func)`
     */
    depthFunc: number;
    /**
     * Включает отбрасывание одной из граней треугольников
     * `gl.enable(gl.CULL_FACE)`
     */
    cullFace: boolean;
    /**
     * Определяет какую сторону треугольника отбрасывать
     * если включен cullFace.
     * `gl.cullFace(mode)`
     */
    cullFaceMode: number;
    /** Активирует смешивание цветов. `gl.enable(gl.BLEND)` */
    blend: boolean;
    /**
     * Определяет функцию смешивания цветов
     * если включен blend.
     * `gl.blendFunc(sfactor, dfactor)`
     */
    blendFunc: {
        sfactor: number;
        dfactor: number;
    };
    /**
     * Определяет какие компоненты цвета
     * будут записаны в текстуру при отрисовке.
     * `gl.colorMask(red, green, blue, alpha)`
     */
    colorMask: [boolean, boolean, boolean, boolean];
    /**
     * Активирует добавление смещения к значениям глубины.
     * `gl.enable(gl.POLYGON_OFFSET_FILL)`
     */
    polygonOffsetFill: boolean;
    /**
     * Задает величину смещения к значениям глубины если включен polygonOffsetFill.
     * `gl.polygonOffset(factor, units)`
     */
    polygonOffset: {
        factor: number;
        units: number;
    };
    /**
     * Функция для установки свойств отрисовки в обход конфига.
     * Ручка для быстрого прототипирования.
     */
    customStateBinder?: (gl: WebGLRenderingContext) => void;
}
export {};
