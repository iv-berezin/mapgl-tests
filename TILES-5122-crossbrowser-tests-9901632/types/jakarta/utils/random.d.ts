export declare function createSeededRandom(seed: number): () => number;
/**
 * Возвращает случайное значение в заданном [start, end] интервале на основе
 * рандомизирующей seeded функции.
 */
export declare function getRandomValue(seededRandomFn: (() => number) | undefined, start: number, end: number): number;
