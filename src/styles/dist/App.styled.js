"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledApp = void 0;
var styled_components_1 = require("styled-components");
var colors_1 = require("./colors");
exports.StyledApp = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n    background: ", ";\n    .header__logo{\n        font-size: 22px;\n        line-height: 26px;\n        font-weight: 500;\n        a{\n            color: ", ";\n            text-decoration: none;\n\n            span{\n                font-weight: 900;\n            }\n        }\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n    background: ", ";\n    .header__logo{\n        font-size: 22px;\n        line-height: 26px;\n        font-weight: 500;\n        a{\n            color: ", ";\n            text-decoration: none;\n\n            span{\n                font-weight: 900;\n            }\n        }\n    }\n"])), colors_1["default"].grey, colors_1["default"].red);
var templateObject_1;
