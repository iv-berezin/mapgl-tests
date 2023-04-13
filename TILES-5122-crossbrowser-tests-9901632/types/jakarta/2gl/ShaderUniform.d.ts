import { GLContext } from './types';
/**
 * Шейдерная юниформа, используется только {@link ShaderProgram}
 *
 * @param {UniformDefinition} options
 * @ignore
 */
export declare class ShaderUniform {
    name: string;
    type: string;
    location: WebGLUniformLocation | null;
    constructor(options: UniformDefinition);
    getLocation(gl: GLContext, webglProgram: WebGLProgram): this;
    bind(gl: GLContext, value: any): this;
}
/**
 * Описание шейдерной юниформы
 */
export interface UniformDefinition {
    /**
     * Название юниформы
     */
    name: string;
    /**
     * Тип юниформы, может быть: mat[234], [1234][fi], [1234][fi]v
     */
    type: string;
}
