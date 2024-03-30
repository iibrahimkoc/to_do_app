var deger;
var i;
if (localStorage.getItem("i") == null) {
    var i = 0;
}
else {
    i = localStorage.getItem("i");
}


for (let k = 1; k <= localStorage.getItem("i"); k++) {
    if (localStorage.getItem(`deger${k}`) == null) {
        continue;
    }
    else {
        document.querySelector(".todoList").innerHTML += localStorage.getItem(`deger${k}`);
    }
}

function add() {
    if(document.getElementById("todoText").value.trim()){
        i++;
    deger = document.getElementById("todoText").value;
    document.querySelector(".todoList").innerHTML += `<div class="todolistExampleBox value${i}">     
            <input type="text" class="todolistTextExample" value="${deger}" onclick="duzelt(${i})"></input>
            <i class="fa-regular fa-trash-can symbol${i}"  onclick="remove(${i})"></i>
        </div>
    
`

    console.log(i);
    localStorage.setItem(`deger${i}`, `<div class="todolistExampleBox value${i}">
    <input type="text" class="todolistTextExample" value="${deger}" onclick="duzelt(${i})"></input>
    <i class="fa-regular fa-trash-can symbol${i}" onclick="remove(${i})"></i>
</div>`);
    localStorage.setItem("i", i);
    }
    
}

function remove(a) {
    console.log(a);
    document.querySelector(`.value${a}`).outerHTML = "";
    localStorage.removeItem(`deger${a}`);
    localStorage.setItem("i", i);
}



document.getElementById("todoText").addEventListener("keypress",
    function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("todoAddButton").click();
            document.getElementById("todoText").value = "";
        }
    }
)





