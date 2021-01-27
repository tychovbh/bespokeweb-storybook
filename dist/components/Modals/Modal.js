"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.Overlay = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Overlay = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, open = _a.open;
    var showClass = open ? 'storybook-modals-visible' : '';
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-modals-overlay') + " " + showClass + " " + appendClassname }, children);
};
exports.Overlay = Overlay;
var Modal = function (_a) {
    var children = _a.children, open = _a.open, onClose = _a.onClose;
    react_1.useEffect(function () {
        if (open) {
            document.body.classList.add('no-scroll');
        }
        else {
            document.body.classList.remove('no-scroll');
        }
    }, [open]);
    return react_1.default.createElement(exports.Overlay, { open: open, onClose: onClose },
        react_1.default.createElement("div", { className: 'storybook-models-onblur', onClick: onClose }),
        react_1.default.createElement("div", { className: 'storybook-modals-model' }, children));
};
exports.Modal = Modal;
exports.Modal.propTypes = {
    /**
     * The HTML inside the Modal
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * The visibility of the Modal
     */
    open: prop_types_1.default.bool,
    /**
     * The onClose method of the Modal
     */
    onClose: prop_types_1.default.func
};
exports.Modal.defaultProps = {
    show: false
};
