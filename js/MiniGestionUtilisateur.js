var boutonAddPrenom = document.getElementById("btn-add-user");
boutonAddPrenom.addEventListener("click", function () {
    //Prénom
    var input1 = document.getElementById("text-add-prenom");
    var prenom = input1.value.trim();
    if (prenom.length == 0) return;

    var tr = document.createElement("tr")
    tr.setAttribute("class", "lig")
    var td1 = document.createElement("td");
    td1.innerText = prenom;
    tr.appendChild(td1)
    var liste1 = document.getElementById('list');
    input1.value = '';
    input1.focus();

    //Nom
    var input2 = document.getElementById("text-add-nom");
    var nom = input2.value.trim();
    if (nom.length == 0) return;
    var td2 = document.createElement("td");
    td2.innerText = nom;
    tr.appendChild(td2)
    input2.value = '';
    input2.focus();

    //Mail
    var input3 = document.getElementById("text-add-mail");
    var mail = input3.value.trim();
    if (mail.length == 0) return;

    var td3 = document.createElement("td");
    td3.innerText = mail;
    tr.appendChild(td3);
    input3.value = '';
    input3.focus();

    //Poste
    var input4 = document.getElementById("text-add-poste");
    var poste = input4.value.trim();
    if (poste.length == 0) return;
    var td4 = document.createElement("td");
    td4.innerText = poste;
    tr.appendChild(td4);
    input4.value = '';
    input4.focus();

    // Bouton supprimer
    let boutonSupp = document.createElement("button")
    var td5 = document.createElement("td");
    boutonSupp.setAttribute('class', "bouton-supprimer btn btn-primary btn-sm list-group-item")

    boutonSupp.innerText = "Supp"
    td5.appendChild(boutonSupp)
    tr.appendChild(td5)

    liste1.appendChild(tr);

    boutonSupp.addEventListener("click", () => {
        liste1.removeChild(tr)
    })
});
