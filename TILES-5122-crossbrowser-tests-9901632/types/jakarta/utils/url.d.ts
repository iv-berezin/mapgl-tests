import { UrlType } from '../types';
export declare function template(temp: string, values: {
    [key: string]: string;
}): string;
export declare function removeUndefinedQueryParameters(url: string): string;
export declare function getUrl(type: UrlType, values: {
    [key: string]: string | undefined;
    host: string;
    subdomain: string;
    tileSet: string;
    protocol: string;
}): string;
/**
 * Получает из шаблонной строки нормальный URL,
 * подменяя литералы в {} на переданные значения.
 * @param templateUrl Шаблонная строка.
 * @param values Мапа значений, ключи которой в шаблоне нужна заменить на значения.
 */
export declare function getUrlFromTemplate(templateUrl: string, values: {
    [key: string]: string;
}): string;
export declare function getSubdomainFromString(subdomains: string[], text: string): string;
