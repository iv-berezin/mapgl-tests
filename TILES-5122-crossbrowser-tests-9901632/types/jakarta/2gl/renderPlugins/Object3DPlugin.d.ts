import { RendererPlugin } from '../RenderPlugin';
/**
 * Плагин - заглушка для {@link Object3D}.
 * Он не делает ничего лишнего, только вызывает метод {@link Object3D#render}.
 * Этот плагин должен всегда рендериться первым и добавляется автоматически.
 */
export declare class Object3DPlugin extends RendererPlugin {
    /**
     * Используется для обозначения типа плагина
     */
    type: number;
    /**
     * Вызывает {@link Object3D#render}
     */
    render(): this;
}
