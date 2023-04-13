import { RenderingSettings } from '../types/symbols';
/**
 * Настройки отрисовки УЗ.
 * Каждый УЗ состоит из синков.
 * Каждый синк состоит из слоев.
 * Каждый слой содержит все настройки как рисовать конкретный объект сцены.
 *
 * Субфазы 3D-объектов (все они имеют одинаковую фазу в стилях):
 * 0. building.fill (zOnly)
 * 1. building.fill (blendEqualDepth)
 * 2. model.fill
 * 3. building.wallStroke
 * 4. building.roofStroke
 * 5. model.stroke
 * 6. floor.wallStroke
 * 7. floor.wallSide
 * 8. floor.roofStroke
 * 9. fence.fill
 * 10. fence.wallStroke
 * 11. fence.roofStroke
 * Субфазы зданий и моделей взяты из Зенита.
 */
export declare function createSymbolList(): RenderingSettings;
