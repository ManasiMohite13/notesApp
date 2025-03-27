const createbtn = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');

showNotes();
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createbtn.addEventListener('click', function () {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contentEditable", "true");
    let img = document.createElement("img");
    img.src = "assets/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage(); 
});

// Remove note on clicking the delete icon
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})




