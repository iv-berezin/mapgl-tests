import { GLContext } from './types';
/**
 * Шейдер компилирует код и хранит его в видеокарте.
 * Один шейдер может быть использован для нескольких программ.
 *
 * @param type Тип шейдера: или vertex, или fragment
 * @param code Код шейдера написанный на языке GLSL.
 * Можно передать несколько строк в виде массива, тогда перед компиляцией строки сложатся.
 * @param definitions Список #define попадающих в код шейдера
 */
export declare class Shader {
    static Vertex: number;
    static Fragment: number;
    /**
     * Тип шейдера
     * @type {Shader.Vertex | Shader.Fragment}
     */
    type: number;
    /**
     * Код шейдера
     */
    private _code;
    private _shader;
    constructor(type: string, code: string | string[], definitions?: Array<{
        value?: string;
        type: string;
    }>);
    /**
     * Возвращает webgl шейдер для связывания с программой.
     * Если шейдер используюется первый раз, то компилирует его.
     */
    get(gl: GLContext): WebGLShader | null;
    /**
     * Удаляет шейдер из видеокарты
     * @param gl Контекст WebGl
     */
    remove(gl: GLContext): void;
    /**
     * Возвращает текстовый код шейдера
     */
    getCode(): string;
    /**
     * Компилирует данный шейдер
     * @param gl Контекст WebGL
     */
    private _compile;
}
