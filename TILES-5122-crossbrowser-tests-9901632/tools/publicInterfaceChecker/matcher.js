"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matcher = void 0;
const client_1 = require("@documentalist/client");
require("./patchedDocumentalistTypes");
function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const interfaceNames = [];
function isNodeWithInterfaceType(node) {
    return interfaceNames.indexOf(node.type) !== -1;
}
function matcher(preparedLabelObjects, docObjects) {
    /**
     * Главный источник узлов
     */
    const typeNodes = docObjects.typescript;
    /**
     * Получаем все имена интерфейсов
     */
    for (let key in typeNodes) {
        const node = typeNodes[key];
        if ((0, client_1.isTsInterface)(node)) {
            interfaceNames.push(node.name);
        }
    }
    /**
     * Разворачиваем дерево интерфейсов. Нужно для случаев,
     * когда интерфейс включает в себя свойства, определяемые другими
     * интерфейсами. Таким образом мы копируем все необходимые свойства,
     * чтобы каждый интерфейс содержал все необходимые ему свойства и чтобы
     * не было общих свойств у разных интерфейсов (общие интерфейсы шарятся
     * между разными интерфейсами в исходном дереве документалиста)
     */
    function unwrapInterfaces(prop) {
        var _a;
        if ((0, client_1.isTsProperty)(prop) && interfaceNames.indexOf(prop.type) !== -1) {
            const interfaceName = prop.type;
            const node = typeNodes[interfaceName];
            if ((0, client_1.isTsInterface)(node)) {
                prop.properties = node.properties.map((propNode) => {
                    return unwrapInterfaces(propNode);
                });
            }
        }
        // нас не интересуют обязательные свойства, так как
        // без них код не будет работать, поэтому они не указываются в лейблах,
        // и поэтому эти узлы нужно пропускать при подсчете общего покрытия,
        // но в репортере нужно проверять их properites, так как там могут быть
        // необязательные свойства
        if (((_a = prop.flags) === null || _a === void 0 ? void 0 : _a.isOptional) === false) {
            prop.shouldSkip = true;
        }
        return prop;
    }
    interfaceNames.forEach((interfaceName) => {
        const node = typeNodes[interfaceName];
        if ((0, client_1.isTsInterface)(node)) {
            node.properties.forEach((propNode) => {
                unwrapInterfaces(propNode);
            });
        }
    });
    /**
     * Иинлайним интерфейсы в узлы конструктора и методов класса,
     * так как у параметров конструкторов и методов разных классов могут быть
     * общие интерфейсы. Клонирование необходимо, чтобы можно было независимо
     * устанавливать флаг наличия теста hasMatchedTest
     */
    function inlineInterfaces(signatureNode) {
        signatureNode.parameters.forEach((paramNode) => {
            if (interfaceNames.indexOf(paramNode.type) !== -1) {
                const interfaceName = paramNode.type;
                const node = typeNodes[interfaceName];
                if ((0, client_1.isTsInterface)(node)) {
                    paramNode.properties = cloneObj(node.properties);
                }
            }
        });
    }
    function markRequiredParamsAsMatched(signatureNode) {
        signatureNode.parameters.forEach((paramNode) => {
            var _a;
            // если в параметрах метода требуется объект опций,
            // для упрощения вычисления покрытия делаем пометку,
            // что у этого объекта есть тест
            if (((_a = paramNode.flags) === null || _a === void 0 ? void 0 : _a.isOptional) === false && isNodeWithInterfaceType(paramNode)) {
                paramNode.hasMatchedTest = true;
            }
        });
    }
    function markRequiredParamsAsSkipped(signatureNode) {
        signatureNode.parameters.forEach((paramNode) => {
            var _a;
            if (((_a = paramNode.flags) === null || _a === void 0 ? void 0 : _a.isOptional) === false && !isNodeWithInterfaceType(paramNode)) {
                paramNode.shouldSkip = true;
            }
        });
    }
    function prepareSignatures(node) {
        node.signatures.forEach(inlineInterfaces);
        // нас не интересуют обязательные параметры с простым типом данных, так как
        // без них код не будет работать, поэтому они не указываются в лейблах,
        // и поэтому их нужно пропускать при подсчете общего покрытия
        node.signatures.forEach(markRequiredParamsAsSkipped);
    }
    function prepareMethods(methods) {
        methods.forEach(prepareSignatures);
    }
    for (let key in typeNodes) {
        const node = typeNodes[key];
        if ((0, client_1.isTsClass)(node)) {
            prepareMethods(node.methods);
            prepareSignatures(node.constructorType);
        }
        else if ((0, client_1.isTsMethod)(node)) {
            prepareSignatures(node);
        }
    }
    /**
     * Рекурсивный поиск параметров в конструкторах и методах классов.
     * Ищет параметры вида:
     * - `param`
     * - `param1.param2`
     * - `param1.param2.param3`
     * - и т.п.
     */
    function searchProp(currNode, propsForSearch, propIdx) {
        let currPropIdx = propIdx || 0;
        let currPropNameForSearch = propsForSearch[currPropIdx];
        let properties = currNode.properties;
        if (properties) {
            for (let propNode of properties) {
                if (propNode.name === currPropNameForSearch) {
                    if (currPropIdx === propsForSearch.length - 1) {
                        return propNode;
                    }
                    else {
                        if (propNode.properties) {
                            return searchProp(propNode, propsForSearch, currPropIdx + 1);
                        }
                    }
                }
            }
        }
        return false;
    }
    /**
     * Установка hasMatchedTest для всего дерева свойств `[param1, param2, param3]`
     */
    function markPropertiesAsMatched(node, markedProperties) {
        let currNode = node;
        if (!currNode.shouldSkip) {
            currNode.hasMatchedTest = true;
        }
        for (let currName of markedProperties) {
            let properties = currNode.properties || [];
            for (let propertyNode of properties) {
                if (propertyNode.name === currName) {
                    if (!propertyNode.shouldSkip) {
                        propertyNode.hasMatchedTest = true;
                    }
                    currNode = propertyNode;
                    break;
                }
            }
        }
    }
    let unmatchedLabels = [];
    /**
     * Поиск узлов по лейблу теста в отчете documentalist и отметка сматченных узлов
     */
    preparedLabelObjects.forEach((label) => {
        let hasMatch;
        if (label.test_class &&
            label.test_method &&
            label.test_parameter &&
            label.test_interface &&
            label.test_property) {
            /**
             * 1)
             * Обработка лейбла теста, покрывающего объектный параметр метода класса
             * Доступ до вложенного свойства определяется с помощью точки.
             * В лейбле можно перечислить несколько свойств через запятую.
             *
             * Например:
             *     @test_class ScaleControl
             *     @test_method setPosition
             *     @test_parameter position
             *     @test_interface ControlPosition
             *     @test_property topLeft
             *
             * или:
             *     @test_class SomeClass
             *     @test_method someMethod
             *     @test_parameter someParam
             *     @test_interface LabelOptions
             *     @test_property image.pixelRatio
             *
             * или:
             *     @test_class SomeClass
             *     @test_method someMethod
             *     @test_parameter someParam
             *     @test_interface LabelOptions
             *     @test_property color, image.pixelRatio
             */
            let classNode = typeNodes[label.test_class];
            let interfaceNode = typeNodes[label.test_interface];
            if ((0, client_1.isTsClass)(classNode) && (0, client_1.isTsInterface)(interfaceNode)) {
                let classMethods = classNode.methods;
                for (let methodNode of classMethods) {
                    if (methodNode.name === label.test_method) {
                        let matchedPropertiesCnt = 0;
                        let propertiesList = label.test_property
                            .split(',')
                            .map((prop) => prop.trim());
                        for (let currentProp of propertiesList) {
                            let propsForSearch = currentProp.split('.');
                            let methodParams = methodNode.signatures[0].parameters;
                            for (let paramNode of methodParams) {
                                if (paramNode.name === label.test_parameter) {
                                    let propNode = searchProp(paramNode, propsForSearch, 0);
                                    if ((0, client_1.isTsProperty)(propNode)) {
                                        matchedPropertiesCnt++;
                                        markPropertiesAsMatched(paramNode, propsForSearch);
                                        break;
                                    }
                                }
                            }
                        }
                        hasMatch = matchedPropertiesCnt === propertiesList.length;
                        // может быть найден только один метод,
                        // поэтому сразу выходим из цикла
                        break;
                    }
                }
            }
        }
        else if (label.test_class && label.test_method && label.test_parameter) {
            /**
             * 2)
             * Обработка лейбла теста, покрывающего примитивный параметр метода класса
             *
             * Например:
             *     @test_class Map
             *     @test_method addLayer
             *     @test_parameter beforeId
             *
             * или:
             *     @test_class Map
             *     @test_method addLayer
             *     @test_parameter beforeId, otherParam
             */
            let classNode = typeNodes[label.test_class];
            if ((0, client_1.isTsClass)(classNode)) {
                let classMethods = classNode.methods;
                for (let methodNode of classMethods) {
                    if (methodNode.name === label.test_method) {
                        let methodSignature = methodNode.signatures[0];
                        let parametersList = label.test_parameter
                            .split(',')
                            .map((param) => param.trim());
                        let matchedParamsCnt = 0;
                        for (let currentParam of parametersList) {
                            for (let paramNode of methodSignature.parameters) {
                                if (paramNode.name === currentParam) {
                                    matchedParamsCnt++;
                                    paramNode.hasMatchedTest = true;
                                    break;
                                }
                            }
                        }
                        hasMatch = matchedParamsCnt === parametersList.length;
                        // может быть найден только один метод,
                        // поэтому сразу выходим из цикла
                        break;
                    }
                }
            }
        }
        else if (label.test_class && label.test_method) {
            /**
             * 3)
             * Обработка лейбла теста, покрывающего метод класса
             * без опциональных параметров.
             *
             * Например:
             *     @test_class Label
             *     @test_method setCoordinates
             */
            let classNode = typeNodes[label.test_class];
            let methodName = label.test_method;
            if ((0, client_1.isTsClass)(classNode)) {
                let classMethods = classNode.methods;
                for (let methodNode of classMethods) {
                    if (methodNode.name === methodName) {
                        let methodSignature = methodNode.signatures[0];
                        markRequiredParamsAsMatched(methodSignature);
                        methodSignature.hasMatchedTest = true;
                        hasMatch = true;
                        break;
                    }
                }
            }
        }
        else if (label.test_class && label.test_interface && label.test_property) {
            /**
             * 4)
             * Обработка лейбла теста, покрывающего объектный параметр конструктора класса.
             * Доступ до вложенного свойства определяется с помощью точки.
             * В лейбле можно перечислить несколько свойств через запятую.
             *
             * Например:
             *     @test_class CircleMarker
             *     @test_interface CircleMarkerOptions
             *     @test_property color
             *
             * или:
             *     @test_class CircleMarker
             *     @test_interface CircleMarkerOptions
             *     @test_property color, zIndex
             *
             * или:
             *     @test_class Label
             *     @test_interface LabelOptions
             *     @test_property anchor, image.size, image.pixelRatio
             */
            let classNode = typeNodes[label.test_class];
            let interfaceNode = typeNodes[label.test_interface];
            if ((0, client_1.isTsClass)(classNode) && (0, client_1.isTsInterface)(interfaceNode)) {
                let matchedPropertiesCnt = 0;
                let propertiesList = label.test_property.split(',').map((prop) => prop.trim());
                for (let currentProp of propertiesList) {
                    let propsForSearch = currentProp.split('.');
                    let constructorParams = classNode.constructorType.signatures[0].parameters;
                    for (let paramNode of constructorParams) {
                        if (paramNode.properties !== undefined) {
                            let propNode = searchProp(paramNode, propsForSearch, 0);
                            if ((0, client_1.isTsProperty)(propNode)) {
                                markPropertiesAsMatched(paramNode, propsForSearch);
                                matchedPropertiesCnt++;
                                break;
                            }
                        }
                    }
                }
                hasMatch = matchedPropertiesCnt === propertiesList.length;
            }
        }
        else if (label.test_class && label.test_parameter) {
            /**
             * 5)
             * Обработка лейбла теста, покрывающего примитивный параметр конструктора класса.
             *
             * Например:
             *     @test_class SomeClass
             *     @test_parameter param
             *
             * или:
             *     @test_class SomeClass
             *     @test_parameter param1, param2
             */
            let classNode = typeNodes[label.test_class];
            if ((0, client_1.isTsClass)(classNode)) {
                let constructorParams = classNode.constructorType.signatures[0].parameters;
                let matchedParamsCnt = 0;
                let parametersList = label.test_parameter.split(',').map((param) => param.trim());
                for (let currentParam of parametersList) {
                    for (let paramNode of constructorParams) {
                        if (paramNode.name === currentParam) {
                            paramNode.hasMatchedTest = true;
                            matchedParamsCnt++;
                            break;
                        }
                    }
                }
                hasMatch = matchedParamsCnt === parametersList.length;
            }
        }
        else if (label.test_class) {
            /**
             * 6)
             * Обработка лейбла теста, покрывающего конструктор класса
             * без опциональных параметров.
             *
             * Например:
             *     @test_class SomeClass
             */
            let classNode = typeNodes[label.test_class];
            if ((0, client_1.isTsClass)(classNode)) {
                let constructorSignature = classNode.constructorType.signatures[0];
                markRequiredParamsAsMatched(constructorSignature);
                constructorSignature.hasMatchedTest = true;
                hasMatch = true;
            }
        }
        else if (label.test_method &&
            label.test_parameter &&
            label.test_interface &&
            label.test_property) {
            /**
             * 7)
             * Обработка лейбла теста, покрывающего объектный параметр функции-метода
             *
             * Например:
             *     @test_method isSupported
             *     @test_parameter options
             *     @test_interface MapSupportOptions
             *     @test_property failIfMajorPerformanceCaveat
             *
             * или:
             *     @test_method isSupported
             *     @test_parameter options
             *     @test_interface MapSupportOptions
             *     @test_property prop1.prop2, otherProp
             */
            let methodNode = typeNodes[label.test_method];
            if ((0, client_1.isTsMethod)(methodNode)) {
                let matchedPropertiesCnt = 0;
                let propertiesList = label.test_property.split(',').map((prop) => prop.trim());
                for (let currentProp of propertiesList) {
                    let propsForSearch = currentProp.split('.');
                    let methodParams = methodNode.signatures[0].parameters;
                    for (let paramNode of methodParams) {
                        if (paramNode.name === label.test_parameter) {
                            let propNode = searchProp(paramNode, propsForSearch, 0);
                            if ((0, client_1.isTsProperty)(propNode)) {
                                markPropertiesAsMatched(paramNode, propsForSearch);
                                matchedPropertiesCnt++;
                                break;
                            }
                        }
                    }
                }
                hasMatch = matchedPropertiesCnt === propertiesList.length;
            }
        }
        else if (label.test_method && label.test_parameter) {
            /**
             * 8)
             * Обработка лейбла теста, покрывающего примитивный параметр функции-метода
             *
             * Например:
             *     @test_method isSupportedSomething
             *     @test_parameter someFlag
             *
             * или:
             *     @test_method isSupportedSomething
             *     @test_parameter someFlag, someOtherFlag
             */
            let methodNode = typeNodes[label.test_method];
            if ((0, client_1.isTsMethod)(methodNode)) {
                let methodSignature = methodNode.signatures[0];
                let parametersList = label.test_parameter.split(',').map((param) => param.trim());
                let matchedParamsCnt = 0;
                for (let currentParam of parametersList) {
                    for (let paramNode of methodSignature.parameters) {
                        if (paramNode.name === currentParam) {
                            paramNode.hasMatchedTest = true;
                            matchedParamsCnt++;
                            break;
                        }
                    }
                }
                hasMatch = matchedParamsCnt === parametersList.length;
            }
        }
        else if (label.test_method) {
            /**
             * 9)
             * Обработка лейбла теста, покрывающего экспортируемую функцию-метод
             * без опциональных параметров
             *
             * Например:
             *     @test_method isSupported
             */
            let methodNode = typeNodes[label.test_method];
            if ((0, client_1.isTsMethod)(methodNode)) {
                let methodSignature = methodNode.signatures[0];
                markRequiredParamsAsMatched(methodSignature);
                methodSignature.hasMatchedTest = true;
                hasMatch = true;
            }
        }
        /**
         * Если не нашли ничего подходящего, значит с лебйлом какая-то проблема.
         * Пушим его в массив несматченных лейблов, чтобы потом о них сообщить.
         */
        if (!hasMatch) {
            unmatchedLabels.push(label);
        }
    });
    return { unmatchedLabels, typeNodes };
}
exports.matcher = matcher;
//# sourceMappingURL=matcher.js.map