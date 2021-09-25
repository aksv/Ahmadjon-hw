"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Tabs_1 = require("../../components/Tabs");
var Movies_styled_1 = require("../../styles/Movies.styled");
function Movies() {
    return (react_1["default"].createElement(Movies_styled_1.StyledMovies, null,
        react_1["default"].createElement(Tabs_1["default"], null)));
}
exports["default"] = Movies;
