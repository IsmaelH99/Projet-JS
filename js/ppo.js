var grad = {
    matiere:"maths",
    notes:[12,14],
    moyenne:function(){
        var moy = 0;
        for(var i=0; i<this.notes.length;i++){
            moy = moy + this.notes[i];
        }
        var res = moy / this.notes.length;
        alert("la moyenne est de : "+ res);
    }

};
grad.moyenne();