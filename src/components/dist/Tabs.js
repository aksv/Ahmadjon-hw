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
    return (react_1["default"].createElement("ul", { className: "tabs" }, renderTabs()));
}
exports["default"] = Tabs;
