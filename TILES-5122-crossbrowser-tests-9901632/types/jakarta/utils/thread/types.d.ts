export declare const enum ThreadName {
    Main = 0,
    Parser = 1,
    Labeling = 2,
    All = 3
}
export declare const enum MessageType {
    FunctionUse = 0,
    FunctionResult = 1
}
export interface FromMsg<T> {
    to: ThreadName;
    msg: T;
    transferable?: any[];
}
export interface FromToMsg<T> {
    from: ThreadName;
    to: ThreadName;
    msg: T;
    transferable?: any[];
}
export interface WorkerContext {
    postMessage: any;
    addEventListener: (name: 'message', listener: (ev: MessageEvent) => void) => void;
    createImageBitmap?(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
}
interface Message<T extends MessageType, D extends {
    [key: string]: any;
}> {
    type: T;
    data: D;
}
export declare type FunctionUseMsg = Message<MessageType.FunctionUse, {
    id: number;
    name: string;
    args: any[];
}>;
export declare type FunctionResultMsg = Message<MessageType.FunctionResult, {
    id: number;
    result: any;
}>;
export declare type FnRegistryMsg = FunctionUseMsg | FunctionResultMsg;
export {};
