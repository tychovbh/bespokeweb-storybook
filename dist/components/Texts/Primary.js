"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Primary = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("p", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-primary') + " " + appendClassname }, children);
};
exports.Primary = Primary;
exports.Primary.propTypes = {
    /**
     * The id of the Heading
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
     * The text of the Heading
     */
    children: prop_types_1.default.node.isRequired,
};
exports.Primary.defaultProps = {
    appendClassname: ''
};
