"use strict";
exports.__esModule = true;
var react_1 = require("react");
var utility_1 = require("./utility");
function Tabs() {
    var _a = react_1.useState('all'), activeTab = _a[0], setActiveTab = _a[1];
    var tablsList = react_1.useState(utility_1.tabs)[0];
    var handleClick = function (tab) {
        setActiveTab(tab);
    };
    var renderTabs = function () {
        return tablsList.map(function (tab, index) { return (react_1["default"].createElement("li", { onClick: function () { return handleClick(tab.id); }, key: index, className: tab.id === activeTab ? ' tab--active tab' : "tab" }, tab.title)); });
    };
    console.log(utility_1.tabs, activeTab);
    return (react_1["default"].createElement("div", { className: "tabs__container" },
        react_1["default"].createElement("ul", { className: "tabs__list" }, renderTabs()),
        react_1["default"].createElement("div", { className: "sort-by" },
            react_1["default"].createElement("label", null, "Sort by"),
            react_1["default"].createElement("select", null,
                react_1["default"].createElement("option", { value: "none" }, "Release Date"),
                react_1["default"].createElement("option", { value: "popularity.desc" }, "Popularity Descending"),
                react_1["default"].createElement("option", { value: "popularity.asc" }, "Popularity Ascending"),
                react_1["default"].createElement("option", { value: "release_date.desc" }, "Release Date Descending"),
                react_1["default"].createElement("option", { value: "release_date.asc" }, "Release Date Ascending"),
                react_1["default"].createElement("option", { value: "revenue.desc" }, "Revenue Descending"),
                react_1["default"].createElement("option", { value: "revenue.asc" }, "Revenue Ascending"),
                react_1["default"].createElement("option", { value: "primary_release_date.desc" }, "Primary Release Date Descending"),
                react_1["default"].createElement("option", { value: "primary_release_date.asc" }, "Primary Release Date Ascending"),
                react_1["default"].createElement("option", { value: "original_title.desc" }, "Original Title Descending"),
                react_1["default"].createElement("option", { value: "original_title.asc" }, "Original Title Ascending"),
                react_1["default"].createElement("option", { value: "vote_average.desc" }, "Vote Average Descending"),
                react_1["default"].createElement("option", { value: "vote_average.asc" }, "Vote Average Ascending"),
                react_1["default"].createElement("option", { value: "vote_count.desc" }, "Vote Count Descending"),
                react_1["default"].createElement("option", { value: "vote_count.asc" }, "Vote Count Ascending")))));
}
exports["default"] = Tabs;
