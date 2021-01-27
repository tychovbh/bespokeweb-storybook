"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Checkbox = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, name = _a.name, value = _a.value, onClick = _a.onClick;
    return react_1.default.createElement("input", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-forms-checkbox') + " " + appendClassname, type: "checkbox", name: name, value: value, onClick: onClick });
};
exports.Checkbox = Checkbox;
exports.Checkbox.propTypes = {
    /**
     * The id of the Checkbox
     */
    id: prop_types_1.default.string,
    /**
     * Use a different className
     */
    className: prop_types_1.default.string,
    /**
     * Add more classnames
     */
    appendClassname: prop_types_1.default.string,
    /**
     * The nane of the checkbox
     */
    name: prop_types_1.default.string,
    /**
     * The value of the Checkbox
     */
    value: prop_types_1.default.string,
    /**
     * The onClick method of the Checkbox
     */
    onClick: prop_types_1.default.func
};
exports.Checkbox.defaultProp = {
    appendClassname: '',
    onClick: function () { }
};
