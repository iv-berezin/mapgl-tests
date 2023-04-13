import { Buffer } from '../../2gl/Buffer';
import { ShaderProgram } from '../../2gl/ShaderProgram';
import { Vao } from '../../2gl/Vao';
/**
 * Модуль содержит функции, инициализирующие vao
 */
export declare type VaoCreator = (buffer: Buffer, program: ShaderProgram) => Vao;
export declare const area: VaoCreator;
export declare const areaIdentify: VaoCreator;
export declare const road: VaoCreator;
export declare const shiftedLine: VaoCreator;
export declare const roadIdentify: VaoCreator;
export declare const stripedLine: VaoCreator;
export declare const labelPoint: VaoCreator;
export declare const poiText: VaoCreator;
export declare const labelPointIdentify: VaoCreator;
export declare const labelLine: VaoCreator;
export declare const meshFill: VaoCreator;
export declare const building3D: VaoCreator;
export declare const building3DIdentify: VaoCreator;
export declare const wallLine3D: VaoCreator;
export declare const pointSprite: VaoCreator;
export declare const pointSpriteIdentify: VaoCreator;
export declare const oneWayLine: VaoCreator;
export declare const model: VaoCreator;
export declare const simpleLine2D: VaoCreator;
export declare const simpleLine3D: VaoCreator;
export declare const entrance: VaoCreator;
export declare const circleMarker: VaoCreator;
export declare const circleMarkerIdentify: VaoCreator;
export declare const rect: VaoCreator;
export declare const rectWithTexture: VaoCreator;
export declare const heatmap: VaoCreator;
export declare const heatmapTexture: VaoCreator;
export declare const demMesh: VaoCreator;
export declare const demElevation: VaoCreator;
export declare const demFlatBottom: VaoCreator;
/** Создает VAO с координатами точек и текстурными координатами */
export declare const demFullscreenVao: VaoCreator;
export declare const gltfAnchor: VaoCreator;
export declare const gltfInstances: VaoCreator;
