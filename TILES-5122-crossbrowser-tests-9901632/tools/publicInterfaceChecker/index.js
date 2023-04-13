"use strict";
/**
 * # publicInterfaceChecker
 *
 * Цель утилиты - поиск методов публичного API, на которых нет тестов.
 *
 * Верхнеуровневая логика работы:
 * 1. В тестах перед тест-кейсами добавляются лейблы,
 *    представляющие собой комментарии вида:
 *     *
 *     * @test_class SomeClass
 *     * @test_method doSomething
 *     *
 * 2. Аллюр проходит по этим тестам и собирает
 *    массив объектов из лейблов
 * 3. Во время сборки documentalist создает похожее
 *    на AST дерево документации в виде JSON
 * 4. Мы берем полученный список лейблов и JSON документалиста,
 *    матчим их друг с другом, находя методы, которые
 *    еще не были покрыты тестами
 *
 * Низкоуровневая логика работы:
 * 1. Подготавливаем дерево документалиста, получаем
 *    очень большой объект.
 * 2  Убираем из лейблов ненужные нам лейблы
 * 3. Матчим лейблы на дерево документалиста в matcher.
 *    У сматченных узлов дерева, то есть у которых были найдены
 *    тесты на основе переданных лейблов, устанавливаем
 *    флаг hasMatchedTest
 * 4. Передаем обработанное дерерво в reporter и подсчитываем
 *    покрытие
 * 5. Создаем артефакты, содержащие информацию о покрытии
 *    и несматченных лейблов. Отправляем в stdout процент покрытия
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const process_1 = tslib_1.__importDefault(require("process"));
const matcher_1 = require("./matcher");
const reporter_1 = require("./reporter");
function getFileContent(fileName) {
    try {
        return fs_1.default.readFileSync(fileName).toString('utf8');
    }
    catch (e) {
        console.error(`File not found ${fileName}`);
        process_1.default.exit(1);
    }
}
if (process_1.default.argv.length !== 4) {
    console.error('Usage: node index.js doc.json labels.json');
    process_1.default.exit(1);
}
/**
 * Подготовка входных данных
 */
let docReportRaw = getFileContent(process_1.default.argv[2]);
let allureLabelsRaw = getFileContent(process_1.default.argv[3]);
const docObjects = JSON.parse(docReportRaw);
docReportRaw = null;
delete docObjects.nav;
delete docObjects.pages;
let labelObjects = JSON.parse(allureLabelsRaw);
const preparedLabelObjects = labelObjects.filter((obj) => !obj.hasOwnProperty('test_layer_type') &&
    !obj.hasOwnProperty('test_root_field') &&
    !obj.hasOwnProperty('test_feature'));
allureLabelsRaw = null;
labelObjects = [];
/**
 * Матчинг отчета документалиста на лейблы
 */
const { unmatchedLabels, typeNodes } = (0, matcher_1.matcher)(preparedLabelObjects, docObjects);
/**
 * Репорт проблем
 */
const result = (0, reporter_1.reporter)(typeNodes);
fs_1.default.writeFileSync('./processedNodes.json', JSON.stringify(typeNodes, null, 2));
console.log(`Public API test coverage: ${result.coveragePercent}%`);
fs_1.default.writeFileSync('./interfaceCheckerResult.json', JSON.stringify(result, null, 4));
fs_1.default.writeFileSync('./interfaceCheckerUnmatchedLabels.json', JSON.stringify(unmatchedLabels, null, 4));
if (parseFloat(result.coveragePercent) < 73.45) {
    console.error('Процент покрытия уменьшился!');
    process_1.default.exit(1);
}
//# sourceMappingURL=index.js.map