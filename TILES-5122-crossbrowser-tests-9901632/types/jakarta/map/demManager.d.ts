/// <reference types="@2gis/gl-matrix" />
import { MapModules } from './mapModules';
import { MeshTileObject } from '../sources/dem/meshSource';
import { Texture } from '../2gl/Texture';
import { HandyInterpolateExpression, HandyStyleLayer } from '../expressions/types';
import { MapState, MetatileGeneratedLabels } from '../types';
import { FlatMapTexture } from '../sources/dem/flatMapSource';
import { SinkName } from '../types/generatedSceneObjects';
/**
 * Индексы текстурных блоков рельефа.
 * Так как текстура рельефа будет подмешиваться в другие шейдерные программы,
 * используем старшие блоки (WebGL гарантирует только 8, но как правило их гораздо больше),
 * что бы избежать пересечения с индексами текстур этих программ.
 */
export declare const DEM_ELEVATION_TEXTURE_INDEX = 4;
export declare const DEM_HILLSHADE_TEXTURE_INDEX = 5;
export declare const DEM_ELEVATION_RAMP_TEXTURE_INDEX = 6;
export declare const DEM_CORRECTED_ELEVATION_TEXTURE_INDEX = 7;
/**
 * Размер тайлов рельефа в пикселях
 */
export declare const DEM_TILE_SIZE = 64;
export declare const DEM_TILE_MIN_ZOOM = 5;
export declare const DEM_TILE_MAX_ZOOM = 12;
/** Максимальная детальность текстуры рельефа */
export declare const DEM_TEXTURE_MAX_ZOOM = 12;
/**
 * Минимальное значение при анимации роста зданий, если включен рельеф.
 * Временный костыль, что бы избежать z-fighting крыш 3d-зданий, в начале анимации роста
 */
export declare const DEM_MIN_BUILDING_HEIGHT = 0.001;
/**
 * Степень приращения при коррекции высоты центра камеры в долях от единицы.
 * Это нужно для плавной анимации изменения высоты центра.
 * Иначе при перемещении по карте камера будет прыгать от малейшей кочки
 */
export declare const DEM_CENTER_ELEVATION_CORRECTION_FACTOR = 0.1;
/**
 * Минимальное приращение при коррекции высоты центра камеры в метрах.
 * Это нужно, что бы анимация коррекции не была бесконечной.
 */
export declare const DEM_CENTER_ELEVATION_MIN_CORRECTION = 0.3;
/**
 * Во сколько раз текстура плоской карты больше карты.
 * Подобрано на глаз.
 */
export declare const DEM_FLAT_MAP_SCALE: number[];
/**
 * Определяет будет ли объект рисоваться на поверхности рельефа.
 */
export declare function isReliefAwareObject(symbol: HandyStyleLayer['type'], sink: SinkName): boolean;
/** Модуль для управления отображением карты с учетом рельефа местности */
export declare class DemManager {
    /**
     * Матрица вида текстуры высот рельефа.
     * Переводит координаты экрана в координаты текстуры.
     */
    readonly demTextureMatrix: Float64Array;
    /**
     * Переводит координаты пространства отсечения
     * корректирующей текстуры, в координаты текстуры рельефа.
     * Нужна, что бы сходить в текстуру рельефа за высотой
     * при рендеренге плоских оснований.
     */
    readonly demCorrectedFbVpToDemTex: Float32Array;
    /**
     * Матрица для пересчета из координат текстуры рельефа
     * к координатам корректирующей текстуры.
     */
    readonly demTexToCorrectedTex: Float32Array;
    /**
     * Матрица для пересчета из координат корректирующей текстуры
     * к координатам текстуры рельефа
     */
    readonly correctedTexToDemTex: Float32Array;
    /**
     * Флаг показывает, что на сцене появились объекты, корректирующие рельеф
     * и нужно использовать корректирующую текстуру в рельефе.
     * Очищается после отрисовки текстуры рельефа и устанавливается в `true`
     * когда на сцене есть объекты плоских оснований.
     */
    isDemCorrectionEnabled: boolean;
    /** На сколько текстура рельефа больше корректирующей текстуры */
    demCorrectedScale: number;
    /**
     * Матрица вида фреймбуфера высот рельефа.
     * Переводит координаты карты в пространство отсечения фреймбуфера.
     */
    private readonly demFbVpMatrix;
    /**
     * Матрица вида корректирующего фреймбуфера высот рельефа.
     * Переводит координаты карты в пространство отсечения корректирующего фреймбуфера.
     * Нужна для рендеринга плоских оснований в корректирующую текстуру.
     */
    private readonly demCorrectedFbVpMatrix;
    /** Id фреймбуфера высот */
    private demFramebufferId;
    /**
     * Id корректирующего фреймбуфера высот, в котором сделаны плоскими основания моделей/этажей.
     * Размер корректирующей текстуры начиная с 13 зума отличается от текстуры рельефа,
     * что бы всегда соответствовать текущему зуму.
     * Логика работает так:
     * 1. На сцене появляются модели/этажи, для них генерятся плоские основания.
     *    Для этих объектов в качестве фреймбуфера назначения указан этот фб.
     * 2. Перед отрисовкой фреймбуфера срабатывается хук `onRenderStart`,
     *    внутри которого мы копируем текстуру рельефа в корректирующую текстуру.
     * 3. Отрисовываем плоские основания в этот фреймбуфер, но вместо цвета
     *    рендерим высоту в центре здания, которую взяли из текстуры рельефа.
     */
    private correctedDemFramebufferId;
    /** Id фреймбуфера плоской карты */
    private flatFramebufferId;
    /** Id identify-фреймбуфера плоской карты */
    private identifyFlatFramebufferId;
    /** Id опорной текстуры рельефа */
    private hillshadeRampTextureId;
    /** Id фреймбуффера хиллшейда */
    private hillshadeFramebufferId;
    /** Id фреймбуфера земли */
    private groundFramebufferId;
    /** Буфер координат поверхности земли в рельефе */
    private groundBuffer;
    /**
     * Показывает обновлен ли буфер земли.
     * Выставляется в `false` при смене вьюпорта
     * или ревизии тайлов
     */
    private isGroundBufferValid;
    private modules;
    private enabled;
    /**
     * Сорсы растровых тайлов с высотой.
     *
     * Расположены в этом массиве по мере нарастания точности сорсов - сначала самые
     * грубые, в конце самые точные.
     */
    private sources;
    /**
     * Хранилище ревизий источников данных.
     * Нужно для сравнения с актуальными ревизиями сорсов,
     * что бы понимать когда загружаются/отгружаются
     * тайлы высот рельефа.
     */
    private sourcesRevision;
    /** Тайловые слои растровых тайлов с высотой */
    private tileLayers;
    private meshSource?;
    private flatMapSource?;
    private differ;
    private lastStyleId;
    private meshMaxZoom?;
    private hillshadeVao?;
    private hillshadeTile?;
    /**
     * Буфер координат для отрисовки и заливки текстурой
     * квадрата на всю область пространства отсечения webgl
     */
    private fullscreenBuffer?;
    private copyDemVao?;
    private copyDemProgram;
    /**
     * Определяет поддержку расширений для рельефа.
     * Инициализируется при первом вызове метода `enable`
     */
    private isTerrainSupported?;
    /**
     * Номер ревизии набора тайлов в сорсах.
     * Меняется каждый раз когда изменяется набор тайлов в любом из сорсов.
     */
    private tilesRevision;
    constructor(modules: MapModules);
    /**
     * Включает режим отрисовки карты с учетом рельефа.
     * Вызывается автоматически при установке стиля, если в стиле включен рельеф.
     */
    enable(): void;
    onStyleChange(): void;
    /**
     * Выключает режим отрисовки карты с учетом рельефа.
     * Вызывается автоматически при установке нового стиля, если в стиле выключен рельеф.
     */
    disable(): void;
    update(): void;
    isEnabled(): boolean;
    getDemFramebufferId(): number;
    getCorrectedDemFramebufferId(): number;
    getFlatFramebufferId(): number;
    getIdentifyFlatFramebufferId(): number;
    getHillshadeFramebufferId(): number;
    getHillshadeRampTextureId(): number;
    /** Возвращает значение высоты в заданной точке в метрах меркатора */
    getElevation(pnt: Vec2): number | undefined;
    getLabelsDemKey(labelChunks: MetatileGeneratedLabels[]): string | undefined;
    /**
     * Добавляем к лейблам данные высот. Мутирует изначальную коллекцию лейблов.
     *
     * @param labelChunks - лейблы для обогащения, сгруппированные по чанкам
     * @returns void
     */
    enrichWithElevation(labelChunks: MetatileGeneratedLabels[]): void;
    /** Возвращает минимальное значение высоты в текущем вьюпорте */
    getMinElevation(): number | undefined;
    /** Обновляет значение минимальной высоты для всех сорсов в текущем вьюпорте */
    updateMinElevation(): void;
    getMeshTiles(): MeshTileObject[];
    getGroundTiles(): MeshTileObject[];
    getFlatMapTextures(): FlatMapTexture[];
    /** Отключаем биндинги текстур рельефа, что бы WebGl не ругался на зацикленные ссылки */
    clearTextureBindings(): void;
    setMeshMaxZoom(maxZoom?: number): void;
    /** Возвращает значение вертикального масштаба рельефа в стиле */
    getVerticalScale(): number;
    /** Возвращает номер ревизии набора тайлов */
    getTilesRevision(): number;
    /**
     * Возвращает географические координаты поверхности земли (меша) рельефа
     * в заданной точке экрана.
     */
    getGroundPoint(screenPoint: Vec2): number[] | undefined;
    private updateRampTextureId;
    private updateGround;
    /**
     * Добавляет тайловые сорсы с высотами и тругольниками, если они еще не добавлены.
     * TODO DEM: вынести урлы в конфиг
     */
    private addDefaultSources;
    /**
     * Проверяет и при необходимости обновляет ревизию тайлов.
     * Возвращает `true` если есть изменения.
     */
    private updateTilesRevision;
    private addElevationSource;
    /**
     * Рассчитывает размер текстуры рельефа в тайлах.
     * Размер вьюпорта ограничивает `viewportLimitRatio` в конфиге.
     * В этой функции мы гарантируем, что текстура рельефа будет покрывать весь вьюпорт.
     * Текстура должна накрывать окружность, диаметром равным размеру вьюпорту.
     * В полноэкранном режиме portrait (1920 высота вьюпорта) размеры текстуры будут такими:
     *  ----------------------------------------------
     * | viewportLimitRatio | размер текстуры рельефа |
     * |----------------------------------------------|
     * |        2           |       1408*1408         |
     * |----------------------------------------------|
     * |        3           |       2048*2048         |
     * |----------------------------------------------|
     * |        4           |       2752*2752         |
     * |----------------------------------------------|
     * |        5           |       3456*3456         |
     * |----------------------------------------------|
     * |        6           |       4096*4096         |
     *  ----------------------------------------------
     */
    private getDemTextureSize;
    private createGroundFramebuffer;
    private createDemFramebuffer;
    private createCorrectedDemFramebuffer;
    private createHillshadeFramebuffer;
    private createFlatFramebuffer;
    private createFlatIdentifyFramebuffer;
    /** Обновляем матрицы текстуры рельефа и корректирующей текстуры */
    private updateDemFramebufferMatrix;
    private validateGroundBufferSize;
}
/**
 * Готовит опорную текстуру хиллшейда на основе interpolate-выражения
 */
export declare function getRampTexture(mapState: MapState, expr: HandyInterpolateExpression<any>, textureWidth: number): Texture;
