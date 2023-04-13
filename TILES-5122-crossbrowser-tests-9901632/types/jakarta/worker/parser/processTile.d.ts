/**
 * Основной модуль парсера бинарных тайлов.
 * Формат бинарных данных описан здесь: https://confluence.2gis.ru/pages/viewpage.action?pageId=111578304
 *
 * Модуль консолидирует работу по разбору потоков тайла, а также вызывает специализированные генераторы, обычно,
 * передавая в них класс (фактически - тип) текущего объекта и необработанные массивы вершин, получая обратно структуры
 * (meshes), подходящие для объединения и передачи в GL.
 *
 * Управление указателями (indexes[]) внутри потоков (место, откуда будет считываться очередное значение
 * произвольного атрибута или массив данных вершин), осуществляет именно парсер, т.к. эта операция унифицирована для
 * всех типов потоков.
 */
import { IdSet } from '../../utils/structures/idSet';
import { Collector } from '../collector';
import { GenerateTileData } from '../../types/threads';
import { Metatile, TileAttrs } from '../../types/styles';
import { CollectorOutput, TileServerData } from '../../types';
import { HandyStyle } from '../../expressions/types';
import { SlaveStyleManager } from '../../styleManager/slave';
import { FeatureStateIdsMap } from '../../utils/structures/featureStateMap';
/**
 * Main entry point (Parser function)
 */
export declare function processTile(style: HandyStyle, styleManager: SlaveStyleManager, featureStateMap: FeatureStateIdsMap, collector: Collector, inputData: GenerateTileData, serverData: TileServerData, metatile: Metatile, tileAttrs: TileAttrs, hiddenObjectIds: IdSet): CollectorOutput;
