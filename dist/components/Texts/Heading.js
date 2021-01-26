"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Heading = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children, type = _a.type;
    var typeClass = type ? 'storybook-texts-heading-' + type : '';
    switch (type) {
        case 'h1':
            return react_1.default.createElement("h1", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-heading') + " " + typeClass + " " + appendClassname }, children);
        case 'h2':
            return react_1.default.createElement("h2", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-heading') + " " + typeClass + " " + appendClassname }, children);
        case 'h3':
            return react_1.default.createElement("h3", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-heading') + " " + typeClass + " " + appendClassname }, children);
        case 'h4':
            return react_1.default.createElement("h4", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-heading') + " " + typeClass + " " + appendClassname }, children);
        case 'h5':
            return react_1.default.createElement("h5", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-heading') + " " + typeClass + " " + appendClassname }, children);
        case 'h6':
            return react_1.default.createElement("h6", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-texts-heading') + " " + typeClass + " " + appendClassname }, children);
    }
};
exports.Heading = Heading;
exports.Heading.propTypes = {
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
    /**
     * The type of Heading
     */
    type: prop_types_1.default.oneOf(['h1', 'h2', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
exports.Heading.defaultProps = {
    appendClassname: '',
    type: 'h1'
};
