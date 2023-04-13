"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reporter = void 0;
const client_1 = require("@documentalist/client");
require("./patchedDocumentalistTypes");
function generateCoverage(signature, nodeDesc) {
    let totalNodesCnt = 0;
    let coveredNodesCnt = 0;
    let noTestReports = [];
    let parameters = signature.parameters;
    /**
     * Репорт для сигнатур без опциональных параметров
     */
    if (signature.hasMatchedTest) {
        coveredNodesCnt++;
    }
    else {
        noTestReports.push(nodeDesc);
    }
    totalNodesCnt++;
    /**
     * Репорт для обычных параметров сигнатур
     */
    for (let paramNode of parameters) {
        if (paramNode.shouldSkip) {
            continue;
        }
        else if (paramNode.hasMatchedTest) {
            coveredNodesCnt++;
        }
        else {
            noTestReports.push(`${nodeDesc}; parameter: ${paramNode.name}`);
        }
        totalNodesCnt++;
    }
    /**
     * Репорт для объектных параметров сигнатур
     */
    function processProps(props, paramName) {
        for (let prop of props) {
            if (prop.properties) {
                processProps(prop.properties, `${paramName}.${prop.name}`);
                break;
            }
            else if (prop.shouldSkip) {
                continue;
            }
            else if (prop.hasMatchedTest) {
                coveredNodesCnt++;
            }
            else {
                noTestReports.push(`${nodeDesc}; parameter: ${paramName}.${prop.name}`);
            }
            totalNodesCnt++;
        }
    }
    for (let paramNode of parameters) {
        if (paramNode.properties) {
            processProps(paramNode.properties, paramNode.name);
        }
    }
    return {
        noTestReports,
        coveredNodesCnt,
        totalNodesCnt,
    };
}
function reporter(typeNodes) {
    const nodes = Object.values(typeNodes);
    const classes = [];
    const methods = [];
    nodes.forEach((node) => {
        if ((0, client_1.isTsClass)(node)) {
            classes.push(node);
        }
        else if ((0, client_1.isTsMethod)(node)) {
            methods.push(node);
        }
    });
    let noTestsForClassConstructors = [];
    let noTestsForClassMethods = [];
    let nodesTotal = 0;
    let nodesWithTests = 0;
    /**
     * Обход конструкторов классов
     */
    classes.forEach((classNode) => {
        let constructorSignature = classNode.constructorType.signatures[0];
        let result = generateCoverage(constructorSignature, classNode.name);
        nodesTotal += result.totalNodesCnt;
        nodesWithTests += result.coveredNodesCnt;
        noTestsForClassConstructors = result.noTestReports;
    });
    /**
     * Обход методов классов
     */
    classes.forEach((classNode) => {
        classNode.methods.forEach((methodNode) => {
            const methodSignature = methodNode.signatures[0];
            let result = generateCoverage(methodSignature, `${classNode.name}.${methodNode.name}`);
            nodesTotal += result.totalNodesCnt;
            nodesWithTests += result.coveredNodesCnt;
            noTestsForClassMethods = noTestsForClassMethods.concat(result.noTestReports);
        });
    });
    /**
     * Обход независимых методов-функций (isSupported и т.п.)
     */
    methods.forEach((methodNode) => {
        const methodSignature = methodNode.signatures[0];
        let result = generateCoverage(methodSignature, `${methodNode.name}`);
        nodesTotal += result.totalNodesCnt;
        nodesWithTests += result.coveredNodesCnt;
        noTestsForClassMethods = noTestsForClassMethods.concat(result.noTestReports);
    });
    const coveragePercent = ((nodesWithTests / nodesTotal) * 100).toFixed(2);
    return {
        coveragePercent,
        noTestsForClassConstructors,
        noTestsForClassMethods,
    };
}
exports.reporter = reporter;
//# sourceMappingURL=reporter.js.map