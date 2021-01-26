"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandImage = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var BrandImage = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, src = _a.src, alt = _a.alt;
    return react_1.default.createElement("img", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-navigation-brand-image') + " " + appendClassname, src: src, alt: alt });
};
exports.BrandImage = BrandImage;
exports.BrandImage.propTypes = {
    /**
     * The id of the BrandImage
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
     * The image of the BrandImage
     */
    img: prop_types_1.default.string,
    /**
     * The alt of the BrandImage
     */
    alt: prop_types_1.default.string
};
exports.BrandImage.defaultProps = {
    appendClassname: '',
    alt: ''
};
