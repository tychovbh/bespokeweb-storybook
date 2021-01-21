"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
/**
 * Primary UI component for user interaction
 */
var Download = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, onClick = _a.onClick;
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-button-download') + " " + appendClassname },
        react_1.default.createElement("div", { className: 'storybook-button-download-content' }, children),
        react_1.default.createElement("button", { className: 'storybook-button-download-content-button', onClick: onClick }, "Download"));
};
exports.Download = Download;
exports.Download.propTypes = {
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
    /**
     * the color of a Submit button
     */
    type: prop_types_1.default.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    /**
     * The onClick function of the Buttons
     */
    onClick: prop_types_1.default.func
};
exports.Download.defaultProps = {
    appendClassname: '',
    type: 'default',
    onClick: function () {
    }
};
