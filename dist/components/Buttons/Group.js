"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var Group = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-button-group') + " " + appendClassname }, children);
};
exports.Group = Group;
exports.Group.propTypes = {
    /**
     * The id of a Buttons
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
     * The title of the Buttons
     */
    children: prop_types_1.default.string,
};
exports.Group.defaultProps = {
    appendClassname: '',
};
