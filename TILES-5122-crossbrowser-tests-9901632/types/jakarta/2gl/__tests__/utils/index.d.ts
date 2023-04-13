/// <reference types="@2gis/gl-matrix" />
import { MockGLContext } from './GlContext';
import * as sinon from 'sinon';
export declare function slice(typedArray: TypedArray | number[]): any[];
export declare function round(value: number, sign?: number): number;
export declare function flatten(array: any[]): any;
export declare function spyGL(gl: MockGLContext, methodName: keyof MockGLContext): sinon.SinonSpy<any[], any>;
