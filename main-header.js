class MainHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const header = document.createElement('div');
        header.textContent = this.getAttribute('text');
        header.classList.add('main-header');

        // Optional: Add styles directly
        const style = document.createElement('style');
        style.textContent = `
            .main-header {
                color: white;
                background-color: var(--satin-red);
                height: 38px;
                display: grid;
                align-items: center;
                font-family: headers;
                font-size: 16px;
                letter-spacing: 6px;
                text-indent: 8px; /*because letter-spacing + centering is offset by the space amount*/
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(header);
    }
}

customElements.define('main-header', MainHeader);
