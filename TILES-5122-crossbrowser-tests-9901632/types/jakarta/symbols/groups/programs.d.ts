import { ShaderProgram } from '../../2gl/ShaderProgram';
import { UniformDefinition } from '../../2gl/ShaderUniform';
export declare type ShaderProgramName = 'diffuse' | 'gradientDiffuse' | 'labelLine' | 'labelPoint' | 'labelPointIdentify' | 'line' | 'pointSprite' | 'pointSpriteIdentify' | 'stripedLine' | 'stripedLineIdentify' | 'vtxColor' | 'vtxColorIdentify' | 'zbmModelIdentify' | 'buildingIdentify' | 'oneWayLine' | 'gltfModel' | 'gltfModelIdentify' | 'zbmModel' | 'simpleLine' | 'road' | 'roadIdentify' | 'entrance' | 'entranceIdentify' | 'circleMarker' | 'rect' | 'rectWithTexture' | 'circleMarkerIdentify' | 'heatmapTexture' | 'heatmap' | 'demMesh' | 'demGround' | 'demElevation' | 'demElevationCopy' | 'demHillshade' | 'demFlatBottom' | 'mesh';
export declare type ShaderProgramsMap = {
    [name in ShaderProgramName]: ShaderProgram;
};
/**
 * Описание юниформы матрицы вьюпорта тайла.
 */
export declare const MVP_MATRIX_UNIFORM: UniformDefinition;
export declare function createShaderPrograms(): ShaderProgramsMap;
/**
 * Предотвращаем лаги в момент показа новых объектов
 * за счет предварительной компиляции шейдеров в момент простоя браузера
 *
 * После компиляции выжидаем какое-то время и лоцируем шейдерные атрибуты и юниформы.
 * Считается, что шейдеры компилируются асинхронно, и тогда локация будет быстрой.
 *
 * Подробнее в статье http://toji.github.io/shader-perf/
 */
export declare function idleShaderProgramsCompile(programs: ShaderProgramsMap, gl: WebGLRenderingContext): void;
