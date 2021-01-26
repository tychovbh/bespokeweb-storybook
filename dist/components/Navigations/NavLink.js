"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavLink = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var NavLink = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, link = _a.link, active = _a.active;
    var activeClass = active ? 'storybook-navigation-nav-link-active' : '';
    return react_1.default.createElement("a", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-navigation-nav-link') + " " + activeClass + " " + appendClassname, href: link }, children);
};
exports.NavLink = NavLink;
exports.NavLink.propTypes = {
    /**
     * The id of the NavLink
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
     * The HTML inside of the NavLink
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * The link of the NavLink
     */
    link: prop_types_1.default.string,
    /**
     * Is the NavLink active?
     */
    active: prop_types_1.default.bool
};
exports.NavLink.defaultProps = {
    appendClassname: ''
};
