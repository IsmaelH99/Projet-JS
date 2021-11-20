var boutonAddTodo = document.getElementById("btn-add-note");
boutonAddTodo.addEventListener("click",function(){
    var input = document.getElementById("text-add-note");
    var note = input.value.trim();

    if(note<=20 && note>=0){
        var item = document.createElement("li");
        item.setAttribute("class", "list-group-item");
        item.innerText = note;
        var liste = document.getElementById("note-list");
        liste.appendChild(item);

        input.value = '';
        input.focus();
    }
    else{
        alert("Veuillez saisir une note entre 0 et 20")
        input.value = ''
    }
});

var boutonAddMoyenne = document.getElementById("btn-add-moyenne");
boutonAddMoyenne.addEventListener("click",function (){
    var list = document.getElementsByClassName("list-group-item");
    var moyenne=0;
    for(var i=0;i< list.length;i++)
    {
        moyenne = moyenne + Number(list[i].innerText)
    }
    alert("La moyenne des notes saisies est "+ moyenne/list.length)
  });