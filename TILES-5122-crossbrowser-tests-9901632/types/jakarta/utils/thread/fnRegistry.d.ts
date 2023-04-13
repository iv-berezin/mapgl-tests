import { Connector } from './connector';
import { ThreadName } from './types';
declare type ArgumentTypes<T> = T extends (...args: infer U) => any ? U : never;
declare type StripPromise<T> = T extends Promise<infer X> ? X : T;
/**
 * Этот класс упрощает общением между воркерами, позволяя вызывать функции в одном треде из другого.
 *
 * Для работы нужно:
 * 1. Зарегистрировать функцию в воркере, в котором она будет выполняться `fnRegistry.set('generateTile', (tile) => { ... })`
 * 2. Получить "ссылку" на эту функцию в воркере, из которого она будет вызываться `const generateTile = fnRegistry.get(threadName, 'generateTile')`
 *
 * Особенности:
 * - Полученная "ссылка" в воркере вызова не является ссылкой на настоящую функцию, это функция-обёртка скрывающая внутри пересылку данных между воркерами.
 * - Все функции становится асинхронными
 * - После вычисления функции из нее можно вернуть также данные как transferable, указав их в поле transferable
 * - Передать данные как transferable при вызове фунции нельзя (сделать легко, но сложно придумать интерфейс)
 * - ⚠ Может случится цикличный вызов, если одна функция из FnRegistry будет вызывать другую
 */
export declare class FnRegistry {
    private connector;
    private functions;
    private functionIdCounter;
    private pendingFunctions;
    constructor(connector: Connector);
    /**
     * Регистрирует функцию, после чего она сможет вызываться из другого треда
     * @param name Названия функции
     * @param fn Функция
     */
    set(name: string, fn: (...args: any[]) => any): void;
    /**
     * Возвращает функцию, при вызове которой, будет исполняться код в другом треде
     * @param threadName Название треда, в котором будет исполняться функция
     * @param functionName Название функции
     * @returns Промис содержащий результат выполнения функции
     */
    get<T extends (...args: any[]) => any>(threadName: ThreadName, functionName: string): (...args: ArgumentTypes<T>) => Promise<StripPromise<ReturnType<T>>>;
    private onMessage;
    /**
     * Из другого треда пришла команда на исполнение функции в текущем треде
     */
    private onFunctionUse;
    /**
     * Отправляем результат исполнения функции обратно
     */
    private sendFunctionResult;
    /**
     * Пришел результат исполнения функции в другом треде
     */
    private onFunctionResult;
}
export {};
