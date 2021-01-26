"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Avatar = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, type = _a.type, img = _a.img, notificationColor = _a.notificationColor;
    var typeClass = 'storybook-elements-avatar-' + type;
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-elements-avatar') + " " + typeClass + " " + appendClassname },
        react_1.default.createElement("div", { className: "storybook-elements-avatar-notification " + ('bg-' + notificationColor) }),
        react_1.default.createElement("img", { src: img, alt: 'avatar' }));
};
exports.Avatar = Avatar;
exports.Avatar.propTypes = {
    /**
     * The id of the Avatar
     */
    id: prop_types_1.default.string,
    /**
     * The className of the Avatar
     */
    className: prop_types_1.default.string,
    /**
     * Add more classNames to the Avatar
     */
    appendClassname: prop_types_1.default.string,
    /**
     * The type of Avatar
     */
    type: prop_types_1.default.oneOf(['circular', 'circular-notification', 'rounded', 'rounded-notification'])
};
exports.Avatar.defaultProps = {
    appendClassname: '',
    type: 'circular',
    notificationColor: 'white'
};
