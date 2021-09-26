"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    };
    //   componentDidCatch(error:any, errorInfo:any) {
    //     // You can also log the error to an error reporting service
    //     console.log(error, errorInfo);
    //   }
    ErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return react_1["default"].createElement("h1", null, "Something went wrong.");
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(react_1.Component));
exports["default"] = ErrorBoundary;
