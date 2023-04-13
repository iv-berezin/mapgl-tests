/**
 * Модуль, распаковывающий sdf-шрифт из protobuf. Взят из mapbox-gl.
 */
declare class FontStack {
    name: string;
    range: string;
    glyphs: {
        [id: number]: Glyph;
    };
    constructor();
}
/**
 * Класс, хранящий данные глифа
 */
export declare class Glyph {
    id: number;
    range: number;
    bitmap: any;
    top: number;
    left: number;
    advance: number;
    x: number;
    y: number;
    width: number;
    height: number;
    texTop: number;
    texLeft: number;
    texRight: number;
    texBottom: number;
    constructor();
}
export declare class Glyphs {
    stacks: FontStack[];
    constructor(pbf: any, end?: any);
}
export {};
