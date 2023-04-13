export declare type InterpolateExpression<T extends number | string> = [
    'interpolate',
    [
        'linear'
    ] | ['exponential', number],
    [
        'zoom'
    ],
    ...T[]
];
/**
 * Stub type representing the style layer.
 *
 * Real style layer types will appear a little bit later.
 */
export declare type Layer = any;
export declare type Style = any;
/**
 * Style options - paths to icons and fonts.
 */
export interface StyleOptions {
    /**
     * The url to the styles.
     */
    stylePath?: string;
    /**
     * The url to the icons.
     */
    iconsPath: string;
    /**
     * @hidden
     */
    iconsPathForMap?: string;
    /**
     * The url to the fonts.
     */
    fontsPath: string;
    /**
     * The url to the models.
     */
    modelsPath: string;
}
/**
 * Config of an original user icon.
 */
export interface StyleIconConfig {
    /**
     * URL to an icon. It can be:
     *  - absolute: //external.domain/some_path/some_icon.svg
     *  - as a template: //{appHost}/some_path/some_icon.svg
     */
    url: string;
}
