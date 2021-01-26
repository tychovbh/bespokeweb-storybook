"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Brand = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-navigation-brand') + " " + appendClassname }, children);
};
exports.Brand = Brand;
exports.Brand.propTypes = {
    /**
     * The id of the Brand
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
     * The HTML inside of Brand
     */
    children: prop_types_1.default.node.isRequired,
};
exports.Brand.defaultProps = {
    appendClassname: ''
};
