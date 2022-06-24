
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
