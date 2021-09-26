"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_1 = require("../../components/Card");
function MovieCards() {
    return (react_1["default"].createElement("div", { className: "movie__cards" },
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null),
        react_1["default"].createElement(Card_1["default"], null)));
}
exports["default"] = MovieCards;
