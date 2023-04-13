import { FnRegistry } from './fnRegistry';
import { ThreadName } from './types';
/**
 * Этот класс упрощает общением между воркерами, позволяя создавать классы
 * и вызывать его методы из одного треда в другом.
 *
 * Для работы нужно:
 * 1. Зарегистрировать класс в воркере, в котором он будет существовать `classRegistry.set('Source', Source)`
 * 2. Получить "ссылку" на этот класс в другом воркере:
 * ```
 * const Source = classRegistry.set('Source, Source).get(threadName);
 * const source = new Source();
 * source.fetchTile(tileCoords);
 * ````
 *
 * Особенности:
 * - Под капотом использует FnRegistry, поэтому обладает всеми его особенностями
 * - В класс может пробрасываться дополнительный объект scope — он может пригодится,
 *     т.к. настоящий класс в воркере создается автоматически, и чтобы к нему в этом воркере обращаться,
 *     он должен сам себя поместить в какой-то скоуп.
 * - При наследовании класса методы родителя не пробрасываются в другой воркер
 * - Подписан на вызов метода .destroy() в наследованном классе — при вызове метода
 *     удаляет связь на экземпляр класса из регистра.
 */
export declare class ClassRegistry {
    private fnRegistry;
    private classes;
    private idCounter;
    constructor(fnRegistry: FnRegistry);
    /**
     * Регистриует класс, после чего его можно будет создавать и вызывать его методы из другого треда.
     * Возвращает абстракцию с единственным методом get для получения ссылки на класс из другого воркера.
     *
     * @param name Название класса
     * @param ClassConstructor Конструктор класса
     * @param scope Дополнительный скоуп, в который класс может поместить себя, чтобы к нему можно было получить доступ
     */
    set(name: string, ClassConstructor: any, scope?: any): {
        get: (threadName: ThreadName) => any;
    };
    private onClassCreate;
    private onMethodUse;
}
