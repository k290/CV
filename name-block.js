class NameBlock extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const nameBlock = document.createElement('div');
        header.classList.add('main-header');

        // Optional: Add styles directly
        const style = document.createElement('style');
        style.textContent = `
            .main-header {
                font-size: 24px;
                font-weight: bold;
                margin: 10px 0;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(header);
    }
}

// Define the new element
customElements.define('main-header', MainHeader);
