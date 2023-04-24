document.querySelector("button").addEventListener("click", myFunction);
let print = document.querySelector("pp");

let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");
let nimi = document.getElementById("name").value;



//luodaan funtio addtext
function myFunction() {

    let h3 = document.createElement("h3");

    let p = document.createElement("p");
    p.textContent = viesti.value;

    let d = new Date();

    let n = nimi;




    //onko checkbox painettuna vai ei

    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
    }

    pp.append(p,d,document.createElement("hr"));
 
}
