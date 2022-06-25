var buttonadd = document.querySelector("#add").addEventListener("click", function () {
    addperson()
})

var table = document.querySelector("#table");

function addperson() {
    var fname = document.querySelector("#firstName").value;
    var lname = document.querySelector("#lastName").value;
    var person = document.createElement("tr");
    var fnamecell = document.createElement("td");
    var lnamecell = document.createElement("td");
    var operations = document.createElement("td");
    var delettag = document.createElement("a");
    delettag.textContent = "Delete"
    delettag.href = "#";
    delettag.addEventListener("click", function () {
        deleteperson(person)
    })
    fnamecell.textContent = fname;
    lnamecell.textContent = lname;
    person.appendChild(fnamecell);
    person.appendChild(lnamecell);
    operations.appendChild(delettag)
    person.appendChild(operations)
    table.appendChild(person);
    console.log(table);

}

function deleteperson(per) {
    table.removeChild(per);
}
