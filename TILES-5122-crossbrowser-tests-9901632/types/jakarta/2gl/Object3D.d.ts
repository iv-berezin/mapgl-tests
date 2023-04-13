/// <reference types="@2gis/gl-matrix" />
import { RendererPlugin } from './RenderPlugin';
/**
 * Базовый класс для 3D объектов.
 */
export declare class Object3D {
    /**
     * Каждый Object3D может включать в себя другие объекты.
     * Позиция, поворот и масштаб дочерних объектов будет зависеть от родителя.
     */
    children: Object3D[];
    /**
     * Родитель, т.е. объект в котором данный Object3D будет дочерним
     */
    parent: Object3D | null;
    /**
     * Будет ли объект отображаться на сцене, если нет, то все дочерние объекты тоже не будут отображаться.
     */
    visible: boolean;
    /**
     * Масштаб объекта
     */
    scale: Vec3;
    /**
     * Позиция объекта в локальной системе координат относительно родителя
     */
    position: Vec3;
    /**
     * Отвечает за поворот объекта
     */
    quaternion: Quat;
    /**
     * Матрица определяющая поворот, масштаб и позицию объекта в локальной системе координат
     * относительно родителя.
     */
    localMatrix: Mat4;
    /**
     * Матрица определяющая поворот, масштаб и позицию объекта в глобальной системе координат.
     */
    worldMatrix: Mat4;
    /**
     * Если true, то worldMatrix будет обновлена перед рендерингом
     */
    worldMatrixNeedsUpdate: boolean;
    /**
     * Используется для обозначения типа объекта
     */
    type: number;
    /**
     * Добавляет дочерний объект
     * @param object Дочерний объект
     */
    add(object: Object3D): this;
    /**
     * Убирает дочерний объект
     * @param object Дочерний объект
     */
    remove(object: Object3D): this;
    /**
     * Вызывается рендером для подготовки и отрисовки объекта.
     */
    render(): this;
    /**
     * Обновляет локальную матрицу объекта. Необходимо использовать каждый раз после изменения position, scale
     * и quaternion.
     * */
    updateLocalMatrix(): this;
    /**
     * Обновляет глобальную матрицу объекта.
     * */
    updateWorldMatrix(): this;
    /**
     * Возвращает позицию объекта относительно глобальных координат.
     */
    getWorldPosition(): Vec3;
    /**
     * Вызывает переданный callback для себя и для каждого дочернего класса.
     */
    traverse(callback: (obj: Object3D) => void): this;
    /**
     * Работает также как и {@link Object3D#traverse}, но только для объектов с visible = true
     */
    traverseVisible(callback: (obj: Object3D) => void): this;
    /**
     * Вызывается на этапе рендеринга, чтобы определить к какому типу рендера принадлежит объект.
     */
    typifyForRender(renderPlugins: Record<string, RendererPlugin>): this;
}
