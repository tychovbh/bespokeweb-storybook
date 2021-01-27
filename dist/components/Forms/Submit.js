"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submit = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
/**
 * Form Submit component
 */
var Submit = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, title = _a.title, type = _a.type, onClick = _a.onClick;
    var typeClass = type ? 'storybook-forms-submit-' + type : '';
    return react_1.default.createElement("input", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-forms-submit') + " " + typeClass + " " + appendClassname, type: 'submit', value: title, onClick: onClick });
};
exports.Submit = Submit;
exports.Submit.propTypes = {
    /**
     * The id of a Submit button
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
     * The title of a Submit button
     */
    title: prop_types_1.default.string,
    /**
     * the color of a Submit button
     */
    type: prop_types_1.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};
exports.Submit.defaultProps = {
    appendClassname: '',
    type: 'light'
};
