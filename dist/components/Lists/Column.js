"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Column = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type, colSpan = _a.colSpan;
    var titleClass = type ? 'storybook-lists-column-' + type : '';
    var colsSpanClass = colSpan ? 'col-span-' + colSpan : '';
    return react_1.default.createElement("dd", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-lists-column') + " " + colsSpanClass + " " + titleClass + " " + appendClassname }, children);
};
exports.Column = Column;
exports.Column.propTypes = {
    /**
     * The id of the Column
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
     * The HTML inside of the Column
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * The type of Column
     */
    type: prop_types_1.default.oneOf(['dt', 'dd'])
};
exports.Column.defaultProps = {
    appendClassname: '',
    type: 'dd'
};
