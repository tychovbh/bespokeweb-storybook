"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var react_1 = __importDefault(require("react"));
var Container = function (_a) {
    var id = _a.id, className = _a.className, _b = _a.appendClassname, appendClassname = _b === void 0 ? '' : _b, children = _a.children;
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-layouts-container') + " " + appendClassname }, children);
};
exports.Container = Container;
