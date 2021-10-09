window.onload = function () {
    document.getElementById('loading').style.display = "none";
    document.getElementById('container').style.display = "block";
  }
  particlesJS.load("particles-js", "../config.json", function () {
    console.log("callback - particles.js config loaded");
  });

showNotes();
let successAlert = document.getElementById("successAlert");
let deleteAlert = document.getElementById("deleteAlert");
successAlert.style.display = "none";
deleteAlert.style.display = "none";
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value,
    };
    let titleTxt = document.getElementById("addTitle");
    let textTxt = document.getElementById("addTxt");
    if (myObj.title != "" && myObj.text != "") {
        notesObj.push(myObj);
        successAlert.style.display = "block";
        setInterval(() => {
            successAlert.style.display = "none";
        }, 3000);
    } else if (myObj.title == "" || myObj.text == "") {
        titleTxt.placeholder = `Can't be empty :/`;
        textTxt.placeholder = `Can't be empty :/`;
        setInterval(() => {
            titleTxt.placeholder = `Title goes here...`;
            textTxt.placeholder = `Share ideas, to-do's, tasks...`;
        }, 3000);
    }

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addTxt.value = "";
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
            html += `
            <div class="card my-2 mx-2" style="width: 18rem">
                <div class="card-body>
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="delBtn btn btn-danger">Delete</button>
                </div>
                </div>`;
    });
    let notesElm = document.getElementById("content");
    if (notesObj.length != 0)
        notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body text-center">
                    <h5 class="card-title">Lets Note Together</h5>
                    <p class="card-text">Enter your customized notes</p>
                    <button href="#" class="delBtn btn btn-danger">Delete Note</button>
                </div>
            </div>`;
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];
    else
    notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    deleteAlert.style.display = "block";
    setInterval(() => {
        deleteAlert.style.display = "none";
    }, 3000);
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

// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,500);
}
window.onload = fadeOut;
// pre loader end

//Twak.to added


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61608300157d100a41ab7897/1fhgfvf98';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

