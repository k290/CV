import { FASTElement, attr, css, html } from "@microsoft/fast-element";

const template = html<MainHeader>`<div>${x => x.text}!</div>`

/**
 * Create CSS styles using the css tag template literal
 */
const styles = css`
    :host {
      border: 1px solid blue;
    }

    span {
      color: red;
    }
`;

class MainHeader extends FASTElement {
    @attr
    text!: string;
}

MainHeader.define({
    name: "main-jeader",
    template,
    styles,
});
