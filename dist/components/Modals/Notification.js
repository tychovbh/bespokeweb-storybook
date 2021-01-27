"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var __1 = require("../../");
var Icons_1 = require("../Icons");
var icons = {
    success: {
        className: 'text-green-500',
        icon: 'check-circle'
    },
    warning: {
        className: 'text-orange-500',
        icon: 'exclamation'
    },
    danger: {
        className: 'text-red-500',
        icon: 'shield-exclamation'
    },
};
var Notification = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type, title = _a.title, description = _a.description;
    var typeClass = type ? ' storybook-modals-notification-' + type : '';
    if (children) {
        return react_1.default.createElement("div", { id: id, className: "" + (className !== null && className !== void 0 ? className : 'storybook-modals-notification') + typeClass + " " + appendClassname },
            react_1.default.createElement("div", { className: 'storybook-modals-notification-body' }, children));
    }
    return react_1.default.createElement("div", { id: id, className: "" + (className !== null && className !== void 0 ? className : 'storybook-modals-notification') + typeClass + " " + appendClassname },
        react_1.default.createElement("div", { className: 'storybook-modals-notification-body' },
            type &&
                react_1.default.createElement(Icons_1.Icon, { className: icons[type].className + " storybook-modals-notification-icon", type: icons[type].icon }),
            react_1.default.createElement("div", { className: 'storybook-modals-notification-content' },
                react_1.default.createElement(__1.Texts.Heading, { type: 'h4' }, title),
                react_1.default.createElement(__1.Texts.Primary, null, description)),
            react_1.default.createElement("div", { className: 'storybook-modals-notification-close' },
                react_1.default.createElement(__1.Buttons.Button, null,
                    react_1.default.createElement(Icons_1.Icon, { className: "storybook-modals-notification-close", type: 'x' })))));
};
exports.Notification = Notification;
exports.Notification.propTypes = {
    /**
     * The id of the Container
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
     * The type of Notification
     */
    type: prop_types_1.default.oneOf(['default', 'success', 'warning', 'danger'])
};
exports.Notification.defaultProps = {
    appendClassname: ''
};
