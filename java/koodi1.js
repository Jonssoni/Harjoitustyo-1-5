document.querySelector("button").addEventListener("click", addNote);
let body = document.querySelector("body");

let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");



//luodaan funtio addtext
function addNote() {

    let h3 = document.createElement("h3");

    let p = document.createElement("p");
    p.textContent = viesti.value;

    //onko checkbox painettuna vai ei

    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
    }

    //kaikki elementit bodyn sisälle
    body.append(h3,p,document.createElement("p"));
}