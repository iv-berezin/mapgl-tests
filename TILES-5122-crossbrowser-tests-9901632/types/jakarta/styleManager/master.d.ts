import { MapModules } from '../map/mapModules';
import { HandyCustomLayer, HandyStyle, HandyStyleLayer } from '../expressions/types';
import { MapState, StyleOptions } from '../types';
import { StyleManager } from './common';
import { Style, StyleCustomLayer, StyleIconConfig, StyleLayer, StyleModelConfig, TerrainStyle } from '../types/publicStyles';
import { CustomSceneObject } from '../types/symbols';
/** Тип функции хука, которая сработает на удаление слоя */
export declare type RemoveLayerHook = (state: MapState) => void;
/**
 * Объект, связанный с конкретным кастомным стилевым слоем юзера.
 * Необходим, т.к. в HandyStyle мы не можем хранить функции.
 */
export interface CustomLayerData {
    renderFunction: StyleCustomLayer['render'];
    sceneObject: CustomSceneObject;
    layer: HandyCustomLayer;
}
/**
 * Индекс первого установленного пользователем
 * стиля карты.
 *
 * Начинаем с 1, т.к. 0 забит под Dynamic Style
 */
export declare const FIRST_LOADED_STYLE_ID = 1;
/**
 * Менеджер стилей, существующий в главном треде.
 *
 * Отвечает за хранение стилей карты. Создает их, присваивая идентификаторы, а также отдает по запросам.
 *
 * Поскольку всё ещё существуют "старые" стили, которые приходят вместе с тайлами в metatile.json, то менеджер стилей
 * сохраняет информацию о связи метатайлов и таких стилей. Генерация данных в воркер парсере получает стили по старой схеме с metatileHash,
 * однако, если в карте появляется кастомный стиль, то этот стиль должен становиться единственно верным. И тогда метод, отдающий ранее стили
 * по metatileHash, начинает не смотря не на что отдавать единый кастомный стиль.
 *
 * В других тредах менеджер стилей представлен в виде отдельного класса SlaveStyleManager. В основном треде является главным
 * по отношению к другим и только он может менять информацию, в воркерах работает только в режиме чтения. Любая измененная информация
 * в главном треде, должна тут же отправляться в другие треды.
 *
 * Кастомные стили ID используют счетчик indexCounter при добавление каждого нового стиля счетчик увеличивается на +1
 * Динамический стиль ID = 0 (константа DYNAMIC_STYLE_ID)
 */
export declare class MasterStyleManager implements StyleManager {
    private modules;
    private styleIndex;
    /**
     * Мапа, хранящая все стили в handy-формате по внутреннему ID.
     */
    private handyStylesMap;
    private waitingStyleRequests;
    /**
     * Мапа, хранящая функции по `innerID` стилевых слоев, которые
     * должны быть вызваны при удалении этих стилевых слоев.
     */
    private onRemoveLayerHooks;
    private customLayers;
    constructor(modules: MapModules);
    /**
     * Подготавливает и сохраняет стиль для работы в карте.
     * @param sourceStyle Исходный объект стилей, который задается снаружи.
     */
    createStyle(sourceStyle: Style, options: Required<StyleOptions>, showCommPoi: boolean, sourceStyleId?: string): HandyStyle;
    /**
     * Добавляет слой в стиль карты.
     * Бросит исключение, если добавить не вышло.
     *
     * @param publicLayer Слой для вставки в публичном формате.
     * @param beforeId id слоя в стиле перед которым нужно вставить слой, если не указан то будет в самом верху по порядку рендеринга
     */
    addLayer(publicLayer: StyleLayer, beforeId?: string): void;
    /** Устанавливает стиль отображения рельефа  */
    setTerrainStyle(style: TerrainStyle): void;
    /**
     * Добавляет пользовательскую иконку в стиль карты.
     * Если иконка существует в стиле или мапе иконок, то она не добавляется и выводится ошибка.
     * Возвращает true, если иконка была добавлена, иначе - false.
     */
    addIcon(name: string, config: StyleIconConfig): boolean;
    /**
     * Удаляет иконку из стиля.
     * Иконка удаляется не только из мапы, но и ее растер сеты полностью.
     * Возвращает true, если иконка была удалена, иначе - false.
     */
    removeIcon(name: string): boolean;
    addModel(name: string, config: StyleModelConfig): boolean;
    /**
     * Удаляет слой из стиля карты.
     * Бросит исключение, если удалить не вышло.
     *
     * @param layerId id слоя который необходимо удалить.
     */
    removeLayer(layerId: string): void;
    /**
     * Костыльный метод, который позволяет захардкодить стиль для динамических объектов.
     */
    setDynamicStyle(style: HandyStyle): void;
    /**
     * Получение handy-стиля по внутреннему ID.
     *
     * @param handyStyleId Внутренний идентификатор стиля
     */
    getStyle(handyStyleId: number): HandyStyle | undefined;
    /**
     * Возвращает handy-стилевой слой
     * @param handyStyleId Внутренний идентификатор стиля
     * @param handyLayerId Внутренний идентификатор слоя
     */
    getStyleLayer(handyStyleId: number, handyLayerId: number): HandyStyleLayer | undefined;
    /**
     * Возвращает ревизию стиля по его ID. Если стиля нет, вернёт просто 0.
     * Функция является скорее хелпером для упрощения кода.
     */
    getStyleRevision(handyStyleId: number): number;
    /**
     * Устанавливает идентификаторы фреймбуферов назначения стилевого слоя
     */
    setFramebufferId(handyStyleId: number, handyLayerId: number, framebufferId: HandyStyleLayer['framebufferId']): void;
    /**
     * Возвращает идентификаторы фреймбуферов назначения стилевого слоя
     */
    getFramebufferId(handyStyleId: number, handyLayerId: number): {
        elevation?: number | undefined;
        anchor?: number | undefined;
        mesh?: number | undefined;
        raster?: number | undefined;
        fill?: number | undefined;
        solid?: number | undefined;
        stroke?: number | undefined;
        sideStroke?: number | undefined;
        topStroke?: number | undefined;
        text?: number | undefined;
        sideFill?: number | undefined;
        topFill?: number | undefined;
        framebuffer?: number | undefined;
        hillshade?: number | undefined;
        flatBottom?: number | undefined;
        instances?: number | undefined;
        ground?: number | undefined;
    } | undefined;
    waitForStyle(handyStyleId: number): Promise<HandyStyle>;
    addRemoveLayerHook(layerId: number, fn: RemoveLayerHook): void;
    getRemoveLayerHook(layerId: number): RemoveLayerHook | undefined;
    clearRemoveLayerHook(layerId: number): void;
    callCustomLayerRender(layerId: number): void;
    getCustomSceneObjects(): CustomSceneObject[];
    /**
     * Инициализируем слой текущего стиля карты.
     * Под инициализацией понимается создание дополнительных сущностей
     * и выделение дополнительных ресурсов,
     * необходимых для корректной работы стилевого слоя.
     * В случае успешного выделения ресурсов,
     * функция инициализации обязана вернуть функцию (хук),
     * освобождающую выделенные ресурсы.
     */
    private initHandyLayer;
    private initCustomLayer;
}
