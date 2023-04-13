/// <reference types="@2gis/gl-matrix" />
import { MapClass } from '../../map';
import { Tetragon } from '../../types';
/**
 * Описание положения текстуры плоской карты.
 * Сделано на манер тайла, что бы проще было понять.
 */
export declare class FlatMapTexture {
    /**
     * Преобразует координаты карты, в текстурные координаты фреймбуфера.
     * Нужен для отрисовки текстуры плоской карты .
     */
    texMatrix: Mat4;
    /**
     * Преобразует координаты карты, в пространство отсечения фреймбуфера.
     * Нужен для отрисовки текстуры плоской карты.
     */
    mvpMatrix: Mat4;
    /** Области видимости текстуры */
    viewport: Tetragon;
    /**
     * Число от 0 до 2. Показывает несколько далеко находится тайл от основания трапеции вьюпорта.
     * При отрисовки текстур с detailLevel > 0 отбрасываются некоторые объекты.
     * См. свойство стилевого слоя `farLimit`.
     */
    detailLevel: number;
    constructor(mvpTileMatrix: Mat4, cameraPosition: Vec3, detailLevel: number);
}
export declare class FlatMapSource {
    textures: FlatMapTexture[];
    private modules;
    private destroyed;
    constructor(map: MapClass);
    /**
     * Обновляет схему текстур плоской карты
     */
    update(): true | undefined;
    destroy(): void;
}
