/**
 * A class that implements a mechanism for measuring the duration of a set of GL commands on a GPU
 * based on TIME_ELAPSED_EXT queries from EXT_disjoint_timer_query extension for WebGL.
 *
 * Details: https://jira.2gis.ru/browse/TILES-2332
 *
 * Docs:
 * - https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query
 * - https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query/
 * - https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_disjoint_timer_query.txt
 */
export declare class DisjointTimerQueries {
    private gl;
    private ext;
    private queries;
    constructor(gl: WebGLRenderingContext);
    /**
     * Adds and starts a new timer query.
     */
    addTimer(): void;
    /**
     * Ends current timer query.
     */
    stopTimer(): void;
    /**
     * Trying to get the first timer query, and if it available,
     * returns timer value in nanoseconds and deletes timer query.
     */
    tryToGetFirstTimerValue(): number | undefined;
}
