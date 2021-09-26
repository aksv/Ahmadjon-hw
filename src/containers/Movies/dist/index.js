"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MoviesLabel_1 = require("../../components/MoviesLabel");
var Tabs_1 = require("../../components/Tabs");
var Movies_styled_1 = require("../../styles/Movies.styled");
var MovieCards_1 = require("./MovieCards");
function Movies() {
    return (react_1["default"].createElement(Movies_styled_1.StyledMovies, null,
        react_1["default"].createElement(Tabs_1["default"], null),
        react_1["default"].createElement(MoviesLabel_1["default"], { number: 39 }),
        react_1["default"].createElement(MovieCards_1["default"], null)));
}
exports["default"] = Movies;
