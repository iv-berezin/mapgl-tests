/**
 * Класс для проверки на изменения полей объекта.
 *
 * При создании передаются описание каждого из полей объекта, изменения которых будут проверяться.
 * Например, сравнение центра, зума и ширины вьюпорта в стейте:
 * [
 *   {path: 'center', type: 'vec2'},
 *   {path: 'zoom', type: 'number'},
 *   {path: ['size', 0], type: 'number'}
 * ]
 */
interface InitDef {
    path: string | [string, number];
    type: 'vec2' | 'number' | 'string' | 'padding' | 'boolean';
}
export declare class Differ {
    private defs;
    constructor(defs: InitDef[]);
    /**
     * Метод сравнивает новый объект с предыдущим на основе переданных при инициализации полей.
     */
    check(obj: any): boolean;
}
export {};
