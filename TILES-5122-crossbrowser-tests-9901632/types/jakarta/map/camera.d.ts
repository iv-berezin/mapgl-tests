import { MapPoint, MapState, ScreenPoint, Tetragon } from '../types';
export declare type CameraState = Pick<MapState, 'center' | 'zoom' | 'rotation' | 'size' | 'pitch' | 'padding' | 'viewport'>;
/**
 * Модуль отвечающий за хранение матриц проекций карты и за методы проецирования из пространства карты в проскость экрана.
 *
 * Важно! Этот модуль используется не только как "модуль карты в MapModules",
 * но и как утилитарный компонент для проекцирования координат, который создается внутри других функций. Поэтому он
 * не должен вбирать в себя разную логику, завязанную на цикл работы карты, или иметь сложный конструктор.
 */
export declare class Camera {
    private state;
    /**
     * Позиция камеры в координатах карты. Из этой точки камера смотрит в центр карты (center в MapState).
     */
    readonly position: number[];
    /**
     * Матрица проекции из пространства карты (из мап-поинтов) в пространство WebGL.
     * Также ее можно называть матрицей перспективы.
     */
    readonly projectionMatrix: number[];
    /**
     * Матрица положения камеры в пространстве карты (в мап-поинтах).
     * Включает в себя матрицу трансформации, масштаба и поворотов.
     */
    readonly viewMatrix: number[];
    /**
     * Матрица полученная умножением матрицы проекции на матрицу положения камеры.
     * Используется для проецирования вектора из координат карты в координаты экрана.
     */
    readonly viewProjectionMatrix: number[];
    /**
     * Обратная матрица к матрицу полученной входе умножения матриц проекции на матрицу положения камеры.
     * Используется для проецирования вектора из координат экрана в координаты карты.
     */
    readonly viewProjectionMatrixInverse: number[];
    /**
     * Оффсет от верха экрана в пикселях, указывающий позицию линии горизонта.
     */
    private horizonPixelOffset;
    constructor(state: CameraState);
    /**
     * Метод нужен для обновления стейта, если модуль используется в воркере.
     */
    setState(state: CameraState): void;
    /**
     * Метод вызывается каждый раз при обновлении renderLoop карты в главном треде.
     * Обновляет матрицы камеры согласно текущему стейту карты.
     */
    update(): void;
    /**
     * Проецирует координаты карты в координаты экрана и кладет результат в первый аргумент.
     * В отличие от метода Camera#project используется в нагруженных участках кода,
     * когда создание каждый раз нового результируещго вектора вызовет большой оверхед.
     *
     * @param resultScreenPoint Вектор, в который поместятся полученные координаты экрана.
     * @param mapPoint Координаты карты для проецирования.
     */
    putProject(resultScreenPoint: ScreenPoint, mapPoint: MapPoint): void;
    /**
     * Проецирует координаты карты в координаты экрана.
     * В отличие от метода Camera#unproject каждый раз создает новый результирующий вектор.
     */
    project(mapPoint: MapPoint): number[];
    /**
     * Проецирует координаты экрана в координаты карты.
     */
    unproject(screenPoint: ScreenPoint): number[];
    /** Возвращает вершины вьюпорта в системе координат карты. */
    getViewportVertices(): Tetragon;
    getHorizonPixelOffset(): number;
    /**
     * Вычисляет позицию камеры из текущего стейта карты.
     */
    private updatePosition;
    private updateViewMatrix;
    private updateProjectionMatrix;
    private correctViewAndSize;
    private updateHorizonPixelOffset;
}
