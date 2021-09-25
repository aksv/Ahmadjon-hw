"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./components/Header");
var App_styled_1 = require("./styles/App.styled");
function App() {
    return (react_1["default"].createElement(App_styled_1.StyledApp, null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("h1", null, "Global mentoring react"),
        react_1["default"].createElement("p", null, "Hello world!")));
}
exports["default"] = App;
