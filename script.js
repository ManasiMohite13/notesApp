const createbtn = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');

createbtn.addEventListener('click', function () {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contentEditable", "true");
    let img = document.createElement("img");
    img.src = "assets/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
})

    notesContainer.addEventListener("click",function(e){
        if(e.target.tagName === "IMG"){
            e.target.parentElement.remove();
        }
    })



