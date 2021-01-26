"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Label = function (_a) {
    var id = _a.id, htmlFor = _a.htmlFor, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("label", { id: id, htmlFor: htmlFor, className: (className !== null && className !== void 0 ? className : 'storybook-forms-label') + " " + appendClassname }, children);
};
exports.Label = Label;
exports.Label.propTypes = {
    /**
     * The id of a Label
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
     * Change the text of a Label
     */
    children: prop_types_1.default.node.isRequired
};
exports.Label.defaultProps = {
    appendClassname: ''
};
