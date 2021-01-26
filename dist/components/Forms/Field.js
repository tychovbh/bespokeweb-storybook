"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Field = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type;
    var typeClass = type ? 'storybook-forms-field-' + type : '';
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-forms-field') + " " + typeClass + " " + appendClassname }, children);
};
exports.Field = Field;
exports.Field.propTypes = {
    /**
     * The children
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * The type of Field
     */
    type: prop_types_1.default.oneOf(['default', 'inline'])
};
exports.Field.defaultProps = {
    appendClassname: '',
    type: 'default'
};
