var todolist = document.getElementById("todolist")

function addTodo(){

    var val = document.getElementById("val") ;
    var litxt = document.createTextNode(val.value) ;
    var li = document.createElement("li");
    // li.appendChild(litxt) ;

    var div = document.createElement("div") ;
    div.setAttribute("class" , "container")

    var btnEdit = document.createElement("button") ;
    var edittxt = document.createTextNode("EDIT") ;
    btnEdit.setAttribute("onclick" , 'edit(this)')
    btnEdit.appendChild(edittxt)
    // li.appendChild(btnEdit);

    var btnDelete = document.createElement("button") ;
    var deletetxt = document.createTextNode("DELETE")
    btnDelete.setAttribute("onclick" , 'del(this)')
    btnDelete.appendChild(deletetxt) ;

    // li.appendChild(btnDelete) ;

    var div2 = document.createElement("div");
    div2.appendChild(btnEdit);
    div2.appendChild(btnDelete) ;

    div.appendChild(litxt);
    div.appendChild(div2)
    // div.appendChild(btnEdit);
    // div.appendChild(btnDelete) ;

   li.appendChild(div) ;

    todolist.appendChild(li)

    val.value = "" ;
}

function delAll(){
    todolist.innerHTML = "" ;
}

function del(e){
   e.parentNode.parentNode.parentNode.remove() ;
}

function edit(e){
    var newVal = prompt("Edit Text");

    e.parentNode.firstChild.nodeValue = newVal ;
}