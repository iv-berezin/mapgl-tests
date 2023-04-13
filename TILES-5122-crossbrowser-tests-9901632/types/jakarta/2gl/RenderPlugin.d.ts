import { Object3D } from './Object3D';
/**
 * Родительский класс для плагинов рендера.
 * Для того, чтобы добавить плагин к рендеру, его нужно создать и вызывать {@link Renderer#addPlugin}.
 * На этапе рендринга каждый объект сам добавляется к нужному плагину для отрисовки,
 * ориентируясь на поле type плагина.
 *
 * После отрисовки всех объектов список объектов в плагине очищается.
 */
export declare class RendererPlugin {
    /**
     * Используется для обозначения типа плагина
     */
    type: number;
    protected _objects: Object3D[];
    /**
     * Рисует сцену с помощью этого плагина
     */
    render(): this;
    /**
     * Добавляет объект к плагину на этапе рендеринга
     * @param {Object3D} object
     */
    addObject(object: Object3D): this;
    hasObjects(): boolean;
}
