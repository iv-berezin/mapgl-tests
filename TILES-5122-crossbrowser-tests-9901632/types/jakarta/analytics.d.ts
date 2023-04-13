export declare function initGoogleAnalytics(): void;
export declare function trackEvent(event: {
    eventCategory?: string;
    eventAction: string;
    eventLabel: string;
    eventValue?: number;
}, debugObj?: any): void;
