/**
 * Common options for map animations. Used by methods such as setCenter, setZoom, etc.
 */
export interface AnimationOptions {
    /**
     * Determines if the transform should be animated.
     */
    animate?: boolean;
    /**
     * Duration of the animation in milliseconds.
     */
    duration?: number;
    /**
     * Easing function to be used with the animation.
     */
    easing?: Easing;
}
/**
 * Animation options for zoom.
 */
export interface ZoomAnimationOptions extends AnimationOptions {
    /**
     * Intermediate zoom values will be calculated using camera's height.
     *
     * - false (default): zoom values will be calculated using provided easing function.
     * - true: intermediate camera height calculated then converted into zoom.
     *
     * Initial and final zoom values are same for both modes, only timing function changes.
     *
     * true value is useful for simultaneous animation of map's center and zoom.
     * In that case camera will fly in a straight line.
     *
     * Example:
     * map.setCenter([82.920412, 55.030111], {easing: 'easeOutCubic', duration: 800});
     * map.setZoom(18, {easing: 'easeOutCubic', useHeightForAnimation: true, duration: 800});
     */
    useHeightForAnimation?: boolean;
}
/**
 * Options for map rotation animations.
 */
export interface RotationAnimationOptions extends AnimationOptions {
    /**
     * If enabled, the desired rotation will be normalized to (–180°; 180°], and
     * the direction of the rotation will be chosen so that the map makes less
     * than half a turn. `normalize: false` is useful for animating one of more
     * full turns of the map. Enabled by default.
     */
    normalize?: boolean;
}
/**
 * A set of easing functions (https://easings.net/en).
 */
export declare type Easing = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeOutBounce';
