/**
 * Строит дерево стилевых слоев на основе атрибутов данных в стилевых
 * выражениях. Это помогает оптимизировать поиск нужных стилевых слоев
 * для объектов данных по фильтрам.
 *
 * Более подробная дока - docs/filter_expressions.md
 */
import { TileAttrs, TileProps } from '../types/styles';
import { HandyStyleLayer } from './types';
interface TreeNode {
    key: string;
    novalue: TreeNode | null;
    children: {
        [key: string]: TreeNode;
    };
    leafs: HandyStyleLayer[];
}
/**
 * На основе анализа выражений в фильтрах, организует стилевые слои
 * в дерево, для их последующей быстрой выборки.
 */
export declare class LayerTree {
    private keyStat;
    private layers;
    private orderedKeys;
    private tree;
    private treeNodesCount;
    private traverseIterations;
    private traverseCount;
    constructor();
    /**
     * Добавляет слои в дерево.
     *
     * @param layers - стилевые слои
     */
    addLayers(layers: HandyStyleLayer[]): void;
    /**
     * Получает подходящие объекту стилевые слои.
     *
     * @param tileProps - тайловые пропсы объекта
     * @param tileAttrs - тайловые атрибуты объекта
     */
    getLayers(tileProps: TileProps, tileAttrs: TileAttrs): HandyStyleLayer[];
    /**
     * Возвращает статистику по работе дерева.
     *
     * Вспомогательная функция, удобная для оценки производительности.
     */
    stat(): {
        tree: TreeNode | null;
        treeNodes: number;
        layers: number;
        keyStat: {
            [name: string]: number;
        };
        itersPerTraverse: number;
    };
    private statLayerKeys;
    private getOrderedKeys;
    private buildTree;
    private makeTreeNode;
}
export {};
