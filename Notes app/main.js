const notesContainer = document.getElementById("Note-container");

function AddNote(){
    let p = document.createElement("p");
    p.classList.add("input-box");
    p.contentEditable="true";
    let deleteimg = document.createElement("img");
    deleteimg.src="images/delete.png"
    deleteimg.classList.add("deleteImg")
    notesContainer.appendChild(p).appendChild(deleteimg);
    saveNotes();
}

notesContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup= function() {
                saveNotes();
            }
        });
    }
    saveNotes()
});
function saveNotes(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}
function displayNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
document.addEventListener("keydown", event=>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
displayNotes();