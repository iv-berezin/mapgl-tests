/**
 * Получает utf-8 строку из переданного буфера
 */
export declare function bufferToString(bytes: Uint8Array): string;
/**
 * Из переданного строки получает буфер
 * Взято из https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
 *
 * WARN: В данный момент функция нигде не используется, но оставлена на будущее, вдруг пригодится.
 */
export declare function stringToBuffer(str: string): Uint8Array;
export declare function wrapText(str: string, maxLength: number): string;
export declare function getRange(charCode: number): number;
export declare function getRanges(labels: Array<string | undefined>): number[];
