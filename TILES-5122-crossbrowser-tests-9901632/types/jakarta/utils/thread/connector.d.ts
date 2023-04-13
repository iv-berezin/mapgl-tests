import { FromToMsg, WorkerContext, ThreadName } from './types';
import { Evented } from '../structures/evented';
interface ConnectorEventTable {
    message: FromToMsg<any>;
}
/**
 * Представляет собой обертку над интерфейсом общения воркеров.
 * Умеет:
 * - Отсылать сообщение в конкретный тред `Connector#sendTo`
 * - Отсылать сообщения всем тредам `Connector#sendAll`
 * - Оповещать о пришедших сообщениях `Connector#on('message', ...)`
 * Причем, из воркера парсера можно отправлять сообщения напрямую в воркер лейблинга и наоборот.
 * Под капотом все сообщения по-прежнему разруливаются в главном треде, но об этом теперь можно не париться.
 *
 * Имплементация Connector для главного треда и воркеров немного различается:
 * - Для главного треда написан `MainConnector`, который имеет еще метод `addWorker`
 * - Для воркеров — `WorkerConnector`
 */
export interface Connector extends Evented<ConnectorEventTable> {
    send: <T>(threadName: ThreadName, data: T, transferable?: any[]) => void;
    broadcast: <T>(data: T) => void;
}
/**
 * Обертка над воркерами в главном треде.
 * Кроме приема и отправки сообщений, может еще пересылать сообщения предназначенные другим воркерам.
 */
export declare class MainConnector extends Evented<ConnectorEventTable> implements Connector {
    private workers;
    constructor();
    addWorker(workerName: ThreadName, worker: Worker): void;
    /**
     * Отправка данных в конкретный тред
     */
    send<T>(threadName: ThreadName, data: T, transferable?: any[]): void;
    /**
     * Отправка данных во все существующие треды
     */
    broadcast<T>(data: T): void;
    private routeMessage;
}
/**
 * Обертка над интерфейсом отправки сообщений из воркера
 */
export declare class WorkerConnector extends Evented<ConnectorEventTable> implements Connector {
    private worker;
    constructor(worker: WorkerContext);
    /**
     * Отправка данных в конкретный тред
     */
    send<T>(to: ThreadName, data: T, transferable?: any[]): void;
    /**
     * Отправка данных во все существующие треды
     */
    broadcast<T>(data: T): void;
}
export {};
