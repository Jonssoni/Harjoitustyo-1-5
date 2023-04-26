document.querySelector("button").addEventListener("click", myFunction);
let print = document.querySelector("pp");

let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");
let nimi = document.getElementById("name2");



//luodaan funtio addtext
function myFunction() {

    let h3 = document.createElement("h3");

    let p = document.createElement("p");
    p.textContent = "Viesti:" + " " + viesti.value;

    let n = document.createElement("n");
    n.textContent = "(" + name2.value + ")";

    let d = new Date();





    //onko checkbox painettuna vai ei

    if (checkbox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }

    //tulostetaan teksti
    pp.append(n, p, d, document.createElement("hr"));

}
