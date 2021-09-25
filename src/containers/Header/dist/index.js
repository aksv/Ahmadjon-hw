"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_styled_1 = require("../../styles/Header.styled");
function Header() {
    return (react_1["default"].createElement(Header_styled_1.StyledHeader, null,
        react_1["default"].createElement("div", { className: "header__top" },
            react_1["default"].createElement("h4", { className: "header__logo" },
                react_1["default"].createElement("a", { href: "/" },
                    react_1["default"].createElement("span", null, "netflix"),
                    "roulette")),
            react_1["default"].createElement("button", { className: "header__button" }, "+ Add Movie")),
        react_1["default"].createElement("div", { className: "header__body" },
            react_1["default"].createElement("div", { className: "header__search-box" },
                react_1["default"].createElement("input", { type: "text", className: "header__search-input", placeholder: "What do you want to watch?" }),
                react_1["default"].createElement("button", { className: "header__search-button" }, "Search")))));
}
exports["default"] = Header;
