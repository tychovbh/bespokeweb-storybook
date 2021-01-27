"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Row = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("dt", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-lists-row') + " " + appendClassname }, children);
};
exports.Row = Row;
exports.Row.propTypes = {
    /**
     * The id of the Row
     */
    id: prop_types_1.default.string,
    /**
     * Use a different classname
     */
    className: prop_types_1.default.string,
    /**
     * Add more classnames
     */
    appendClassname: prop_types_1.default.string,
    /**
     * The HTML inside of the Row
     */
    children: prop_types_1.default.node.isRequired
};
exports.Row.defaultProps = {
    appendClassname: ''
};
