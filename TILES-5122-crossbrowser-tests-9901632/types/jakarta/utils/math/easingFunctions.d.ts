/**
 * Набор easing-функций на все случаи жизни
 *
 * Имеют одинаковую сигнатуру:
 * - t время, прошедшее с начала анимации
 * - b начальное значение анимируемого параметра
 * - с насколько должен измениться параметр в ходе анимации
 * - d продолжительность анимации
 *
 * Взято отсюда: http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
 */
export declare function linear(t: number, b: number, c: number, d: number): number;
export declare function ease(t: number, b: number, c: number, d: number): number;
export declare function easeInQuad(t: number, b: number, c: number, d: number): number;
export declare function easeOutQuad(t: number, b: number, c: number, d: number): number;
export declare function easeInOutQuad(t: number, b: number, c: number, d: number): number;
export declare function easeInCubic(t: number, b: number, c: number, d: number): number;
export declare function easeOutCubic(t: number, b: number, c: number, d: number): number;
export declare function easeInOutCubic(t: number, b: number, c: number, d: number): number;
export declare function easeInQuart(t: number, b: number, c: number, d: number): number;
export declare function easeOutQuart(t: number, b: number, c: number, d: number): number;
export declare function easeInOutQuart(t: number, b: number, c: number, d: number): number;
export declare function easeInQuint(t: number, b: number, c: number, d: number): number;
export declare function easeOutQuint(t: number, b: number, c: number, d: number): number;
export declare function easeInOutQuint(t: number, b: number, c: number, d: number): number;
export declare function easeInSine(t: number, b: number, c: number, d: number): number;
export declare function easeOutSine(t: number, b: number, c: number, d: number): number;
export declare function easeInOutSine(t: number, b: number, c: number, d: number): number;
export declare function easeInExpo(t: number, b: number, c: number, d: number): number;
export declare function easeOutExpo(t: number, b: number, c: number, d: number): number;
export declare function easeInOutExpo(t: number, b: number, c: number, d: number): number;
export declare function easeInCirc(t: number, b: number, c: number, d: number): number;
export declare function easeOutCirc(t: number, b: number, c: number, d: number): number;
export declare function easeInOutCirc(t: number, b: number, c: number, d: number): number;
export declare function easeInElastic(t: number, b: number, c: number, d: number): number;
export declare function easeOutElastic(t: number, b: number, c: number, d: number): number;
export declare function easeInOutElastic(t: number, b: number, c: number, d: number): number;
export declare function easeInBack(t: number, b: number, c: number, d: number, s?: number): number;
export declare function easeOutBack(t: number, b: number, c: number, d: number, s?: number): number;
export declare function easeInOutBack(t: number, b: number, c: number, d: number, s?: number): number;
export declare function easeOutBounce(t: number, b: number, c: number, d: number): number;
export declare function inertia(t: number, b: number, c: number, d: number): number;
