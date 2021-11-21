class GalerieComp extends HTMLElement {
   static get observedAttributes() {
      return ["message"];
   }

   attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[property] = newValue;
   }
   constructor() {
      super();
      const main = document.createElement("main");
      main.setAttribute("class", "container");
      const section = document.createElement("section");
      section.setAttribute("class", "row");
      const article = document.createElement("article");
      article.setAttribute("class", "col-12");
      const p = document.createElement("p");
      p.setAttribute("class", "text-center");
      const img = document.createElement("img");
      img.setAttribute("class", "img-fluid");
      img.setAttribute("src", "img/GOT1.jpg");
      img.setAttribute("id", "big-img");
      p.appendChild(img);
      article.appendChild(p);
      section.appendChild(article);
      main.appendChild(section);
      this.appendChild(main);
   }
   connectedCallback() {
      var imgMiniature = this.message.split(" ");
      const sectionMin = document.createElement("section");
      sectionMin.setAttribute("class", "row");
      for (let i = 0; i < imgMiniature.length; i++) {
         const articleMin = document.createElement("article");
         articleMin.setAttribute("class", "col");
         const imgMin = document.createElement("img");
         imgMin.setAttribute("class", "img-fluid photo");
         imgMin.setAttribute("src", imgMiniature[i]);
         articleMin.appendChild(imgMin);
         sectionMin.appendChild(articleMin);
         this.appendChild(sectionMin);

         imgMin.addEventListener("click", function () {
            var source = this.getAttribute("src");

            document.getElementById("big-img").setAttribute("src", source);
         });
      }
   }
}

customElements.define("galerie-comp", GalerieComp);
