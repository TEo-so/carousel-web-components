customElements.define('img-slider',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('img-slider');
      const templateContent = template.content;
      this.attachShadow({mode: 'open'}).appendChild(
      templateContent.cloneNode(true)
        );
      }
    })