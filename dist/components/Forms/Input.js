"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
/**
 * Form Input component
 */
var Input = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, name = _a.name, type = _a.type, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange;
    return react_1.default.createElement("input", { id: id, type: type, className: (className !== null && className !== void 0 ? className : 'storybook-forms-input') + " " + appendClassname, name: name, placeholder: placeholder, value: value, onChange: onChange });
};
exports.Input = Input;
exports.Input.propTypes = {
    /**
     * The id of an Input
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
     * The name of an Input
     */
    name: prop_types_1.default.string,
    /**
     * The type of an Input (e.g. Texts, Password, Radio, Checkbox)
     */
    type: prop_types_1.default.oneOf(['text', 'password']),
    /**
     * The placeholder of an Input
     */
    placeholder: prop_types_1.default.string,
    /**
     * The value of an Input
     */
    value: prop_types_1.default.string,
    /**
     * The onChange method of an Input
     */
    onChange: prop_types_1.default.func
};
exports.Input.defaultProps = {
    appendClassname: '',
    type: 'text'
};
