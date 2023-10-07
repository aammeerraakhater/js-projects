let lists = document.getElementsByClassName("list");
let firstlist = document.getElementById("right");
let secondlist = document.getElementById("left");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        firstlist.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        firstlist.addEventListener("drop", function (e) {
            firstlist.appendChild(selected);
            selected = null;
        })
        secondlist.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        secondlist.addEventListener("drop", function (e) {
            secondlist.appendChild(selected);
            selected = null;
        })
    })
}

