class GalerieComp extends HTMLElement {
    static get observedAttributes() {
        return ['message']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return
        this[property] = newValue
    }
    constructor() {
        super()
        const article = document.createElement("article")
        article.setAttribute('class', ' small')
        const img = document.createElement('img')
        img.setAttribute('class', 'img-fluid photo')
        article.appendChild(img)
        this.appendChild(article)

        var images = document.getElementsByClassName("photo");

        for (var i = 0; i < images.length; i++) {

            images[i].addEventListener("click", function () {

                var source = this.getAttribute("src");

                document.getElementById("big-img").setAttribute("src", source);

            });

        }
    }
    connectedCallback() {
        this.lastElementChild.lastChild.setAttribute('src', this.message);
    }

}

customElements.define('galerie-comp', GalerieComp)