var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FASTElement, attr, css, html } from "@microsoft/fast-element";
const template = html `<div>${x => x.text}!</div>`;
/**
 * Create CSS styles using the css tag template literal
 */
const styles = css `
    :host {
      border: 1px solid blue;
    }

    span {
      color: red;
    }
`;
class MainHeader extends FASTElement {
    text;
}
__decorate([
    attr
], MainHeader.prototype, "text", void 0);
MainHeader.define({
    name: "main-jeader",
    template,
    styles,
});
//# sourceMappingURL=main-header.js.map