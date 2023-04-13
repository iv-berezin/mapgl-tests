import { LineSolidBucket } from '../line';
import { ShiftedLineSolidBucket } from '../shiftedLine';
/**
 * Генерит геометрию линии с утолщением, наконечниками и сочленениями.
 *
 * Используются сочленения двух видов:
 * 1. Для углов меньше 90° используется miter-сочленение. Для этого сочленения не
 *    требуется генерить дополнительных треугольников, что значительно снижает
 *    количество вершин в сцене и нагрузку на видеокарту.
 * 2. Для углов 90° и больше, а также для наконечников линии генерится треугольник,
 *    который в шейдере превращается в полукруг.
 */
export declare function generateSimpleLoftedLine(bucket: LineSolidBucket | ShiftedLineSolidBucket, px: ArrayLike<number>, py: ArrayLike<number>, count: number, generateStartJoint: boolean, generateFinishJoint: boolean, id: number, sx?: ArrayLike<number>, sy?: ArrayLike<number>): void;
