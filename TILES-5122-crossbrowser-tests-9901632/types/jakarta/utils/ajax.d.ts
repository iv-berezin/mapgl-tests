export declare type AjaxCallback<T> = (err: {
    status: number;
    message: string;
} | undefined, data: T) => void;
export interface AjaxOptions {
    url: string;
    headers?: {
        [key: string]: string;
    };
}
export declare function getArrayBuffer(opts: AjaxOptions, callback: AjaxCallback<ArrayBuffer>): XMLHttpRequest;
export declare function getJson(opts: AjaxOptions, callback: AjaxCallback<any>): XMLHttpRequest;
