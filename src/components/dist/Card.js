"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_styled_1 = require("../styles/Card.styled");
var card_png_1 = require("../assets/img/card.png");
function Card() {
    return (react_1["default"].createElement(Card_styled_1["default"], null,
        react_1["default"].createElement("div", { className: "card__img" },
            react_1["default"].createElement("img", { src: card_png_1["default"], alt: "" }),
            react_1["default"].createElement("div", { className: "card__btns" },
                react_1["default"].createElement("button", { className: "card__btn" }, "Edit"),
                react_1["default"].createElement("button", { className: "card__btn" }, "Delete"))),
        react_1["default"].createElement("div", { className: "card__info" },
            react_1["default"].createElement("div", { className: "card__row" },
                react_1["default"].createElement("h2", { className: "card__title" }, "Pulp Fiction"),
                react_1["default"].createElement("p", { className: "card__release-date" }, "2005")),
            react_1["default"].createElement("div", { className: "card__tags" }, "Action & Adventure"))));
}
exports["default"] = Card;
