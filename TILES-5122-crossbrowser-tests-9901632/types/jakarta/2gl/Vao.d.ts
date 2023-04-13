import { Buffer } from './Buffer';
import { BufferChannel } from './BufferChannel';
import { ShaderProgram } from './ShaderProgram';
import { GLContext } from './types';
/**
 * Обертка над vertex array object.
 * https://developer.mozilla.org/ru/docs/Web/API/OES_vertex_array_object
 *
 * Для использования необходимо включить расширение renderer.addExtension('OES_vertex_array_object')
 *
 */
export declare class Vao {
    indicesBuffer: Buffer | null;
    private _vao;
    private _attributes;
    private _shaderProgram;
    /**
     * WebGL экстеншен, в котором был инициализирован буфер.
     */
    private _vaoExt;
    private _gl;
    /**
     * @param shaderProgram Шейдерная программа, каждый Vao привязан к одной шейдерной программе.
     * @param attributes Key-value объект содержащий данные атрибутов.
     * @param indicesBuffer Буффер индексов.
     */
    constructor(shaderProgram: ShaderProgram, attributes?: Record<string, Buffer | BufferChannel>, indicesBuffer?: Buffer | null);
    /**
     * Связывает vao с контекстом WebGL.
     *
     * @param state Стейт рендера
     */
    bind(state: {
        gl: GLContext;
        extensions: {
            OES_vertex_array_object?: OES_vertex_array_object;
            ANGLE_instanced_arrays?: ANGLE_instanced_arrays;
        };
    }): this;
    /**
     * Отвязывает vao от контекста WebGL.
     * ВНИМАНИЕ: Этот метод нужно вызывать всегда, перед тем как будет использоваться
     * стандартный подход для связывания атрибутов через {@link ShaderProgram#bind}.
     */
    unbind(): this;
    setAttribute(name: string, buffer: Buffer): void;
    /**
     * Удаляет vao.
     */
    remove(): this;
    /**
     * Возвращает GL-тип индексного буфера или null
     * @param {WebGLRenderingContext | WebGL2RenderingContext} gl Gl-контекст
     * @returns {number | null} GL-тип индексного буфера
     */
    getElementsGLType(gl: GLContext): number | null;
    private _bind;
    private _prepare;
    private _glCreateVertexArray;
    private _glBindVertexArray;
    private _glDeleteVertexArray;
    private _isWebGL2;
}
