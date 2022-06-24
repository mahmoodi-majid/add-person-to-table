//var buttonAdd = document.querySelector("#add").addEventListener("click", function () {
//    addpersons()
//})
//
//function addpersons() {
//    var firstName = document.querySelector("#firstName").value;
//    var lastName = document.querySelector("#lastName").value;
//    var table = document.querySelector("#table");
//    var person = document.createElement("tr");
//    var fnCell = document.createElement("td");
//    var lnCell = document.createElement("td");
//    fnCell.textContent = firstName;
//    lnCell.textContent = lastName;
//    person.appendChild(fnCell);
//    person.appendChild(lnCell);
//    table.appendChild(person);
//    
//    fnCell = ""
//    lnCell = ""
//    console.log(table);
//}
// 









var buttonadd = document.querySelector("#add").addEventListener("click", function () {
    addperson()
})

function addperson() {
    var table = document.querySelector("#table")
    var fname = document.querySelector("#firstName").value;
    var lname = document.querySelector("#lastName").value;
    var person = document.createElement("tr");
    var fnamecell = document.createElement("td");
    var lnamecell = document.createElement("td");
    fnamecell.textContent = fname;
    lnamecell.textContent = lname;
    person.appendChild(fnamecell);
    person.appendChild(lnamecell);
    table.appendChild(person);

    console.log(table);

}
