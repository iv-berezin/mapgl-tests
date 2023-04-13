import { Shader } from './Shader';
import { AttributeDefinition, ShaderAttribute } from './ShaderAttribute';
import { ShaderUniform, UniformDefinition } from './ShaderUniform';
import { Buffer } from './Buffer';
import { GLContext } from './types';
import { BufferChannel } from './BufferChannel';
/**
 * Шейдерная программа инициализирует шейдеры, подготавливает и связывает данные с WebGL.
 *
 * @param {Object} options
 * @param {Shader} vertex Вершинный шейдер
 * @param {Shader} fragment Фрагментный шейдер
 * @param {UniformDefinition[]} [options.uniforms=[]] Описание юниформ
 * @param {AttributeDefinition[]} [options.attributes=[]] Описание атрибутов
 */
export declare class ShaderProgram {
    uniforms: Record<string, ShaderUniform>;
    attributes: Record<string, ShaderAttribute>;
    private _vertexShader;
    private _fragmentShader;
    private _webglProgram;
    private _linked;
    private _located;
    private _error;
    constructor(options: {
        vertex: Shader;
        fragment: Shader;
        uniforms?: UniformDefinition[];
        attributes?: AttributeDefinition[];
    });
    /**
     * Инициализирует программу с контекстом WebGl
     * @param gl
     */
    enable(gl: GLContext): this;
    /**
     * Связывает юниформы и атрибуты программы с контекстом WebGl
     *
     * @param gl
     * @param [uniforms] Key-value объект содержащий значения юниформ
     * @param [attributes] Key-value объект содержащий значения атрибутов
     */
    bind(gl: GLContext, uniforms?: Record<string, any>, attributes?: Record<string, Buffer | BufferChannel>): this;
    /**
     * Выключает программу
     * @param gl
     */
    disable(gl: GLContext): this;
    /**
     * Компилирует шейдеры и слинковывает программу.
     * Одна из двух необходимых функций для работы шейдерной программы.
     * @param gl
     */
    link(gl: GLContext): this;
    /**
     * Лоцирует атрибуты и юниформе на основе шейдера.
     * Одна из двух необходимых функций для работы шейдерной программы.
     * @param gl
     */
    locate(gl: GLContext): this;
}
