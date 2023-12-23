let InputBox = document.getElementById("input-box");
let ListContainer = document.getElementById("list-container");
let prioritySelect = document.getElementById("prioritySelect");

function addTask(){
    let priority = prioritySelect.value;
    if(InputBox.value === '')
    {
        alert("You must Write something!!!");
    }
    else
    {
        let li=document.createElement("li");
        let  button=document.createElement("button")
        li.innerHTML=InputBox.value;
        ListContainer.appendChild(li);
        button.innerHTML="Delete";
        button.className="vanish";
        li.appendChild(button);     
        li.classList.add(priority + "-priority");
        document.getElementById("list-container").appendChild(li);  
    }
    
    InputBox.value='';
    saveData();
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showtask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showtask();
