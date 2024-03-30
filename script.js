var deger;
var i;

if (localStorage.getItem("i") == null) {
     i = 0;
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
    document.querySelector(".todoList").innerHTML += `<div class="todolistExampleBox values${i}">     
            <input type="text" class="todolistTextExample value${i}" value="${deger}" onclick="duzelt(${i})"></input>
            <i class="fa-regular fa-trash-can symbol${i}" onclick="remove(${i})"></i>
            <i class="fa-regular fa-floppy-disk save${i}" onclick="save(${i})" style="display: none;"></i>
        </div>
    
`
    console.log(i);
    localStorage.setItem(`deger${i}`, `<div class="todolistExampleBox values${i}">
    <input type="text" class="todolistTextExample value${i}" value="${deger}" onclick="duzelt(${i})"></input>
    <i class="fa-regular fa-trash-can symbol${i}" onclick="remove(${i})"></i>
    <i class="fa-regular fa-floppy-disk save${i}" onclick="save(${i})" style="display: none;"></i>
</div>`);
    localStorage.setItem("i", i);
    }
    
}

function remove(a) {
    console.log(a);
    document.querySelector(`.values${a}`).outerHTML = "";
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

function duzelt(budeger){
    console.log(budeger);
    document.querySelector(`.symbol${budeger}`).style.display = "none";
    document.querySelector(`.save${budeger}`).style.display = "flex";
}

function save(b){
    document.querySelector(`.symbol${b}`).style.display = "flex";
    document.querySelector(`.save${b}`).style.display = "none";

    
    localStorage.setItem(`deger${b}`,`<div class="todolistExampleBox values${b}">
    <input type="text" class="todolistTextExample value${b}" value="${document.querySelector(`.value${b}`).value}" onclick="duzelt(${b})"></input>
    <i class="fa-regular fa-trash-can symbol${b}" onclick="remove(${b})"></i>
    <i class="fa-regular fa-floppy-disk save${i}" onclick="save(${i})" style="display: none;"></i>
</div>`)
}

