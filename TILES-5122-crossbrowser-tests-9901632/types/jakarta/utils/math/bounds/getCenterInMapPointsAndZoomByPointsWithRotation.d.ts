/// <reference types="@2gis/gl-matrix" />
/**
 * Вычисляет центр и зум карты так, чтобы все точки points могли быть полностью вписаны в экран размера mapSize с учетом поворота карты degRotation в градусах.
 * ВНИМАНИЕ! Рассчитанный зум может быть как -Infinity, когда один из размеров mapSize равен 0, так и Infinity, когда баунд содержит лишь одну точку.
 */
export declare function getCenterInMapPointsAndZoomByPointsWithRotation(points: number[][], degRotation: number, mapSize: number[]): {
    center: Vec3;
    zoom: number;
} | undefined;
