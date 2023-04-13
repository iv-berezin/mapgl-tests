import { Buffer } from './Buffer';
import { BufferChannel } from './BufferChannel';
import { GLContext } from './types';
/**
 * Шейдерный атрибут, используется только {@link ShaderProgram}
 * @param {AttributeDefinition} options Опции создания аттрибута
 */
export declare class ShaderAttribute {
    name: string;
    index: boolean | undefined;
    location: number;
    private _enable;
    constructor(options: AttributeDefinition);
    bindLocation(gl: GLContext, shaderProgram: WebGLProgram): this;
    getLocation(gl: GLContext, shaderProgram: WebGLProgram): this;
    bind(gl: GLContext, buffer: Buffer | BufferChannel): this;
    disable(gl: GLContext): this;
}
/**
 * Описание шейдерного атрибута
 */
export interface AttributeDefinition {
    /**
     * @property name Название атрибута
     */
    name: string;
    /**
     * @property [index] Если атрибут используется для передачи индексов, то true
     */
    index?: boolean;
    /**
     * @property [location] Можно напрямую выставить location атрибуту, чтобы не вызывался getAttributeLocation
     */
    location?: number;
}
