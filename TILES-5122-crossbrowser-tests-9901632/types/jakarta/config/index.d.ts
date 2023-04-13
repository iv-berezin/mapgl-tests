import { UrlType } from '../types';
export declare const MAP_DEFAULTS: {
    minZoom: number;
    maxZoom: number;
};
export declare const tiles: {
    protocol: string;
    server: string;
    subdomains: string;
    tileSet: string;
    tileKey: string;
    appId: string;
    cacheRatio: number;
    maxUniverseZoom: number;
    maxRegionalZoom: number;
    maxDetailLevel: number;
};
export declare const commercialPoi: {
    minZoom: number;
    maxZoom: number;
    tileSet: string;
    rasterSizes: number[];
};
export declare const modelCacheSize = 100;
export declare const loadModelsInfoStyleZoom = 13.5;
export declare const atlasSize: number[];
export declare const urls: {
    [key in UrlType]: string;
};
export declare const traffic: {
    protocol: string;
    host: string;
    url: string;
    timestampUrl: string;
    updateInterval: number;
    minZoom: number;
    maxZoom: number;
    maxDetailLevel: number;
};
export declare const fonts: {
    defaultUrl: string;
    gamma: number;
    baseSize: number;
    baseLineHeight: number;
    bomCharCode: number;
};
export declare const icons: {
    defaultUrl: string;
    legacyIconsUrl: string;
    nameTemplate: string;
};
export declare const styles: {
    url: string;
    path: string;
};
export declare const events: {
    doubleClickTime: number;
    dragThreshold: number;
    pitchWaitingTime: number;
    pitchThreshold: number;
};
export declare const analytics: {
    gaCode: string;
    gaName: string;
};
export declare const workerResetDebounceTime = 3000;
export declare const houseHover: {
    inAnimationTime: number;
    inAnimationType: string;
    outAnimationTime: number;
    outAnimationType: string;
};
export declare const tileAnimation: {
    time: number;
    type: string;
};
export declare const buildingAnimation: {
    minStyleZoom: number;
    duration: number;
    easing: string;
};
export declare const entranceAnimation: {
    bounceType: string;
    bounceTime: number;
    growType: string;
    growTime: number;
    stagger: number;
};
export declare const identify: {
    pixelDensity: number;
    sceneOpacity: number;
    cacheDebounceTime: number;
    pickDistance: number;
};
export declare const labeling: {
    interval: number;
    animationTime: number;
    animationType: string;
    tileMultiplier: number;
    axisAngleToleranceDeg: number;
    axisCheckDistancePx: number;
    commercialMargins: {
        default: {
            topBottom: number;
            leftRight: number;
        };
        city: {
            topBottom: number;
            leftRight: number;
        };
    };
    lineLabelsHidePitchDeg: number;
    maxLabelLength: number;
};
export declare const render: {
    alwaysRerender: boolean;
    autoResizeInterval: number;
};
export declare const defaultLang = "en";
export declare const zoom: {
    mouseDelta: number;
    macTouchDelta: number;
    animDuration: number;
    throttleDelay: number;
    mouseRotateDelta: number;
    mousePitchDelta: number;
    mobilePinchDelta: number;
    mobileTapDelta: number;
};
export declare const inertia: {
    duration: number;
    maxSpeed: number;
    minSpeed: number;
    nonLinearity: number;
};
export declare const camera: {
    fov: number;
    near: number;
    far: number;
    /** Минимальная высота экрана, используемая для расчётов FOV и высоты камеры */
    minCalculationScreenHeight: number;
    /**
     * Ограничение видимости вьюпорта в долях высоты экрана,
     * за пределами которого начинаем грузить тайлы меньших зумов
     */
    viewportLimitRatio: number;
    /**
     * Ограничение дистации от ближнего основания трапеции вьюпорта до линии условного горизонта в долях
     * высоты экрана для избежания больших значений при проецировании точки с экрана в карту при перспективе.
     */
    perspectiveDistanceLimitRatio: number;
};
export declare const floors: {
    enabled: boolean;
    url: string;
    displayStyleZoom: number;
    wallHeight: number;
    islandHeight: number;
    wallMinBrightness: number;
    wallMaxBrightness: number;
    viewportPadding: number;
};
export declare const fences: {
    lightIntensity: number;
};
export declare const performanceCheck: {
    fpsCaveat: number;
};
export declare const commercialCitySublayers: string[];
export declare const commercialSublayers: string[];
export declare const personalSublayers: string[];
export declare const landmarkPoiSublayers: string[];
export declare const landmarkRasterSizes: number[];
export declare const defaultMarkerIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgMzAgNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4yICg1NzUxOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+PHRpdGxlPlBhZ2UgMSBDb3B5PC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjUwJSIgeDI9IjUwJSIgeTI9IjAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+PHN0b3Agc3RvcC1jb2xvcj0iIzFCODlFRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiMzMTk4RUMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSJSZWNvdmVyeS0wMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzOS4wMDAwMDAsIC00MjUuMDAwMDAwKSI+PGcgaWQ9IlBhZ2UtMS1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MzkuMDAwMDAwLCA0MjUuMDAwMDAwKSI+PGVsbGlwc2UgaWQ9Ik92YWwtMyIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wMzYzODA1OTciIGN4PSIxNSIgY3k9IjQ1LjUiIHJ4PSIzIiByeT0iMS41Ij48L2VsbGlwc2U+PGVsbGlwc2UgaWQ9Ik92YWwtMy1Db3B5IiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwLjAzNjM4MDU5NyIgY3g9IjE1IiBjeT0iNDUuNSIgcng9IjQuNSIgcnk9IjIuNSI+PC9lbGxpcHNlPjxwYXRoIGQ9Ik0xNSw0NS44ODM2MzUzIEwxNS44ODIzNTI5LDQ1Ljg4MzYzNTMgQzE1Ljg4MjM1MjksMjkuMjE3NzUyOSAyMC43NzY3NjQ3LDIzLjc5NzQ1ODggMjcuOTg3MzUyOSwyMy43OTc0NTg4IEwyOC4zMjk3MDU5LDIzLjc5NzQ1ODggQzI5LjA3Nzk0MTIsMjEuNTkwNjk0MSAzMCwxNy45OTE1NzY1IDMwLDE1LjAwMDQgQzMwLDcuMTQzOTI5NDEgMjMuNzY3OTQxMiwwLjAwMDQgMTUsMC4wMDA0IEM2LjIzMjA1ODgyLDAuMDAwNCAwLDcuMTQzOTI5NDEgMCwxNS4wMDA0IEMwLDE3Ljk5MTU3NjUgMC45MjIwNTg4MjQsMjEuNTkwNjk0MSAxLjY3MDI5NDEyLDIzLjc5NzQ1ODggTDIuMDEyNjQ3MDYsMjMuNzk3NDU4OCBDOS4yMjQxMTc2NSwyMy43OTc0NTg4IDE0LjExNzY0NzEsMjkuMjE3NzUyOSAxNC4xMTc2NDcxLDQ1Ljg4MzYzNTMgTDE1LDQ1Ljg4MzYzNTMgWiIgaWQ9IkZpbGwtMSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==";
export declare const defaultMarkerAnchor: number[];
