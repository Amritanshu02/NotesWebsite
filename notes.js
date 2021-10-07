showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);
    let myObj = {
        Content: addText.value,
        Title: addTitle.value
    };
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    addTitle.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);
    let html = "";
    notesObj.forEach(function (element, index) {
    if ((element.Title.length > 0 && element.Content.length > 0)) {
            html += `
            <div class="card special-card  my-2 mx-2" style="width: 18rem; background-color: white; ">
                <div class="card-body">
                    <h5 class="card-title  text-light" style="text-decoration:underline;" >${element.Title}</h5>
                    <p class="card-text text-white-50" >${element.Content}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                </div>
                </div>`;
        }
    else {
            let alert = document.getElementById("alerting");
            alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Error!</strong> Note heading and content cannot be empty.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>`;
            setTimeout(function () {
                alert.innerHTML = '';
            }, 3000);
        }
    });
    let notesElm = document.getElementById("content");
    if (notesObj.length != 0)
        notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `Nothing to show. Use "Add Note" to add a note.`;
}


var darktheme=false
function switchtheme()
{
    
    document.querySelector("body").classList.toggle("bg-dark")
    document.querySelectorAll("h2").forEach(element=>{
        element.classList.toggle("text-white")
    })
    document.querySelectorAll("textarea").forEach(element=>{
        element.classList.toggle("bg-light")
    })
    document.querySelectorAll(".card").forEach(element=>{
        element.classList.toggle("bg-light")
    })
    document.querySelectorAll(".card-title").forEach(element=>{
        element.classList.toggle("text-light")
    })
    document.querySelectorAll(".card-text").forEach(element=>{
        element.classList.toggle("text-white-50")
    })
    document.querySelector(".toggle-theme").classList.toggle("btn-dark")
    document.querySelector(".darky").classList.toggle("visually-hidden") 
    document.querySelector(".lighty").classList.toggle("visually-hidden") 
    
    
}




function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchText');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("card");
    Array.from(noteCards).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});

const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();