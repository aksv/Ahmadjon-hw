"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
function MoviesLabel(props) {
    return (react_1["default"].createElement("div", { className: "movies__label" },
        react_1["default"].createElement("span", null,
            props.number,
            " "),
        " movies found"));
}
MoviesLabel.propTypes = {
    number: prop_types_1["default"].number.isRequired
};
exports["default"] = MoviesLabel;
