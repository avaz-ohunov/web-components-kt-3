// card-component.js

'use strict';


class CardComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Шаблон для структуры карточки
        const template = document.createElement('template');
        template.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <div class="card bg-secondary text-light mb-3 shadow-sm">
                <div class="card-header text-center fw-bold">
                    <slot name="header">Default Header</slot>
                </div>
                <div class="card-body">
                    <slot name="content">Default Content</slot>
                </div>
            </div>
        `;

        // Добавление шаблона в Shadow DOM
        shadow.appendChild(template.content.cloneNode(true));
    }
}


// Регистрация веб-компонента
customElements.define('card-component', CardComponent);
