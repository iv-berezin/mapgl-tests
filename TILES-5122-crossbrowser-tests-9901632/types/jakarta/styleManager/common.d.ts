import { HandyStyle } from '../expressions/types';
/**
 * Интерфейс стайл менеджера, который является одинаковым как в главном треде, так и в воркерах
 */
export interface StyleManager {
    /**
     * Получение стиля с определенным ID
     * @param id Идентификатор стиля
     */
    getStyle(id: number): HandyStyle | undefined;
}
