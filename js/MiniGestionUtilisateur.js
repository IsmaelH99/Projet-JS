var boutonAddPrenom = document.getElementById("btn-add-user");
boutonAddPrenom.addEventListener("click",function(){
//Prénom
    var input1 = document.getElementById("text-add-prenom");
    var prenom = input1.value.trim();
    if(prenom.length == 0) return;

    var item1 = document.createElement("li");
    item1.setAttribute("class", "list-group-item");
    item1.innerText = prenom;
    var liste1 = document.getElementById("list-prenom");
    liste1.appendChild(item1);

    input1.value = '';
    input1.focus();
        // Delete a li item on click 
        liste1.onclick = function(){
            this.parentNode.removeChild(this);
          }

//Nom
    var input2 = document.getElementById("text-add-nom");
    var nom = input2.value.trim();
    if(nom.length == 0) return;

    var item2 = document.createElement("li");
    item2.setAttribute("class", "list-group-item");
    item2.innerText = nom;
    var liste2 = document.getElementById("list-nom");
    liste2.appendChild(item2);

    input2.value = '';
    input2.focus();

//Mail
    var input3 = document.getElementById("text-add-mail");
    var mail = input3.value.trim();
    if(mail.length == 0) return;

    var item3 = document.createElement("li");
    item3.setAttribute("class", "list-group-item");
    item3.innerText = mail;
    var liste3 = document.getElementById("list-mail");
    liste3.appendChild(item3);

    input3.value = '';
    input3.focus();

//Poste
    var input4 = document.getElementById("text-add-poste");
    var poste = input4.value.trim();
    if(poste.length == 0) return;

    var item4 = document.createElement("li");
    item4.setAttribute("class", "list-group-item");
    item4.innerText = poste;
    var liste4 = document.getElementById("list-poste");
    liste4.appendChild(item4);

    input4.value = '';
    input4.focus();
});

let bouton = document.getElementById("supp");
bouton.addEventListener("click",function(){
    let elems = document.getElementById("lig");
    for(var i=0; i< elems.length; i++){
        console.log(elems[i]);
        alert(elems[i].innerText);
        elems[i].remove();
    }
});