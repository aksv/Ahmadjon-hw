"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Logo_1 = require("../../components/Logo");
var Header_styled_1 = require("../../styles/Header.styled");
function Header() {
    return (react_1["default"].createElement(Header_styled_1.StyledHeader, null,
        react_1["default"].createElement("div", { className: "header__top" },
            react_1["default"].createElement(Logo_1["default"], null),
            react_1["default"].createElement("button", { className: "header__button" }, "+ Add Movie")),
        react_1["default"].createElement("div", { className: "header__body" },
            react_1["default"].createElement("div", { className: "header__search-box" },
                react_1["default"].createElement("input", { type: "text", className: "header__search-input", placeholder: "What do you want to watch?" }),
                react_1["default"].createElement("button", { className: "header__search-button" }, "Search")))));
}
exports["default"] = Header;
