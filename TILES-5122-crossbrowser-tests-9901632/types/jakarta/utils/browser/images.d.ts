/// <reference types="@2gis/gl-matrix" />
export declare function svgToImage(svg: string, width: number, height: number): Promise<HTMLImageElement>;
export declare function bufferToImage(buffer: ArrayBuffer | Uint8Array): Promise<HTMLImageElement>;
export declare function resizeImage(image: HTMLImageElement, size: Vec2): HTMLImageElement | HTMLCanvasElement;
/**
 * Конвертирует PNG буфер в `ImageBitmap`.
 */
export declare function bufferToImageBitmap(buffer: ArrayBuffer): Promise<ImageBitmap | undefined>;
/**
 * Распаковывает PNG буфер в ImageData.
 * Используется для получения RGBA буфера `(4 bytes * width * height)` из изображения.
 */
export declare function bufferToImageData(buffer: ArrayBuffer): Promise<ImageData | undefined>;
