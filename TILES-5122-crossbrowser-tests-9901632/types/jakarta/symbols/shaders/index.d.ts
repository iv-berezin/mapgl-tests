import { vertexMap, fragmentMap } from './buildMap';
import { Shader } from '../../2gl/Shader';
export declare function getVertex(name: keyof typeof vertexMap): Shader;
export declare function getFragment(name: keyof typeof fragmentMap): Shader;
