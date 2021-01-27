"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Alert = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type;
    var typeClass = type ? 'storybook-feedbacks-alert-' + type : '';
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-feedbacks-alert') + " " + typeClass + " " + appendClassname }, children);
};
exports.Alert = Alert;
exports.Alert.propTypes = {
    /**
     * The id of the Alert
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
     * The text of the Alert
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * The type of Alert
     */
    type: prop_types_1.default.oneOf(['default', 'information', 'success', 'warning', 'danger'])
};
exports.Alert.defaultProps = {
    appendClassname: '',
    type: 'default'
};
