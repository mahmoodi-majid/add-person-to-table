var buttonadd = document.querySelector("#add").addEventListener("click", function () {
    addperson(this)
})

var table = document.querySelector("#table");

function addperson(btn) {
    var fname = document.querySelector("#firstName").value;
    var lname = document.querySelector("#lastName").value;
    if (btn.textContent == "add") {
        var person = document.createElement("tr");
        var fnamecell = document.createElement("td");
        var lnamecell = document.createElement("td");
        var operations = document.createElement("td");
        var delettag = document.createElement("a");
        delettag.textContent = "Delete"
        delettag.href = "#";
        var edittag = document.createElement("a");
        edittag.textContent = "Edit"
        edittag.href = "#"
        var textnode = document.createTextNode("  |  ")
        delettag.addEventListener("click", function () {
            deleteperson(person)
        })
        edittag.addEventListener("click", function () {
            editperson(person)
        })
        fnamecell.textContent = fname;
        lnamecell.textContent = lname;
        person.appendChild(fnamecell);
        person.appendChild(lnamecell);
        operations.appendChild(delettag)
        operations.appendChild(textnode)
        operations.appendChild(edittag)
        person.appendChild(operations)
        table.appendChild(person);
        console.log(table);
    } else {
        
        editpersons.childNodes[0].textContent = fname;
        editpersons.childNodes[1].textContent = lname;
        editpersons.style.backgroundColor = "white";
        btn.textContent = "add";
    }

}

function deleteperson(per) {

    table.removeChild(per);

} 
function editperson(per) {
    editpersons = per
    document.querySelector("#add").textContent = "edit";
    per.style.backgroundColor = "aqua";
    var fname = document.querySelector("#firstName").value = per.childNodes[0].textContent;
    var lname = document.querySelector("#lastName").value = per.childNodes[1].textContent;
}
