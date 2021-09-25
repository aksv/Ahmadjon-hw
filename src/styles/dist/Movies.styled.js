"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledMovies = void 0;
var styled_components_1 = require("styled-components");
var colors_1 = require("./colors");
exports.StyledMovies = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 80vh;\n    background-color: ", ";\n    padding: 0 57px;\n\n\n    .tabs{\n        display: flex;\n        \n    }\n    .tab{\n        list-style: none;\n        font-weight: 500;\n        font-size: 16px;\n        line-height: 20px;\n        color: ", ";\n        text-transform: uppercase;\n        margin-left:30px;\n        &:hover{\n            cursor: pointer;\n            border-bottom: 1px solid ", ";\n        }\n    }\n    .tab--active{\n        cursor: pointer;\n        border-bottom: 1px solid ", ";\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 80vh;\n    background-color: ", ";\n    padding: 0 57px;\n\n\n    .tabs{\n        display: flex;\n        \n    }\n    .tab{\n        list-style: none;\n        font-weight: 500;\n        font-size: 16px;\n        line-height: 20px;\n        color: ", ";\n        text-transform: uppercase;\n        margin-left:30px;\n        &:hover{\n            cursor: pointer;\n            border-bottom: 1px solid ", ";\n        }\n    }\n    .tab--active{\n        cursor: pointer;\n        border-bottom: 1px solid ", ";\n    }\n"])), colors_1["default"].bg, colors_1["default"].white, colors_1["default"].red, colors_1["default"].red);
var templateObject_1;
