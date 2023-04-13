import { TileAttrs, TileProps } from '../types/styles';
import { HandyStyle, HandyStyleLayer } from '../expressions/types';
import type { StyleManager } from './common';
/**
 * Менеджер стилей, существующий в воркерах.
 * Подробности читай в описании MasterStyleManager.
 * Этот класс работает в режиме read-only, т.е. только принимает данные из главного треда и отдает по запросу тут.
 */
export declare class SlaveStyleManager implements StyleManager {
    /**
     * Мапа, хранящая все стили по ID.
     */
    private metaStyles;
    private layerTrees;
    constructor();
    /**
     * Прокси метод, которые вызывается главным менеджером стилей из основного потока.
     * Добавляет стиль.
     */
    proxySyncStyle(style: HandyStyle): void;
    /**
     * Получение стиля с определенным ID
     * @param id Идентификатор стиля
     */
    getStyle(id: number): HandyStyle | undefined;
    getLayers(styleId: number, tileProps: TileProps, tileAttrs: TileAttrs): HandyStyleLayer[];
}
