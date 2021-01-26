"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Table = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type;
    var typeClass = type ? 'storybook-tables-table-' + type : '';
    return react_1.default.createElement("table", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-tables-table') + " " + appendClassname + " " + typeClass }, children);
};
exports.Table = Table;
exports.Table.propTypes = {
    /**
     * The id of the Table
     */
    id: prop_types_1.default.string,
    /**
     * Use a diferent className
     */
    className: prop_types_1.default.string,
    /**
     * Add more classnames
     */
    appendClassname: prop_types_1.default.string,
    /**
     * The html inside of the Table
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * The type of Table
     */
    type: prop_types_1.default.oneOf(['simple', 'striped'])
};
exports.Table.defaultprops = {
    appendClassname: '',
    type: 'simple'
};
