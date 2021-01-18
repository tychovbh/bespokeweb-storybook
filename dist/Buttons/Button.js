"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type, onClick = _a.onClick;
    var typeClass = type ? 'storybook-button-' + type : '';
    return react_1.default.createElement("button", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-button') + " " + typeClass + " " + appendClassname, onClick: onClick }, children);
};
exports.Button = Button;
exports.Button.propTypes = {
    /**
     * The id of a Button
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
     * The title of the Button
     */
    children: prop_types_1.default.string,
    /**
     * the color of a Submit button
     */
    type: prop_types_1.default.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    /**
     * The onClick function of the Button
     */
    onClick: prop_types_1.default.func
};
exports.Button.defaultProps = {
    appendClassname: '',
    type: 'default',
    onClick: function () { }
};
