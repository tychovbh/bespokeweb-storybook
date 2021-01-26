"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Question = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("p", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-forms-question') + " " + appendClassname }, children);
};
exports.Question = Question;
exports.Question.propTypes = {
    /**
     * The id of the Question
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
     * The text inside of the Question
     */
    children: prop_types_1.default.node.isRequired,
};
exports.Question.defaultProps = {
    appendClassname: ''
};
