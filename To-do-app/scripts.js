const input=document.getElementById("todoInput");
const addBtn=document.getElementById("addBtn");
const list=document.getElementById("todoList");

let todos=JSON.parse(localStorage.getItem("todos"))||[];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function renderTodos(){
    list.innerHTML="";

    todos.forEach((todo,index)=>{
        let li=document.createElement("li");
        li.className =
        "flex justify-between items-center bg-slate-700 px-3 py-2 rounded";
        li.innerHTML=`
        <span>${todo}</span>
        <button class="text-red-600 hover:text-red-500">✖</button>`;

        li.querySelector("button").onclick=()=>{
            todos.splice(index,1);
            saveTodos();
            renderTodos();


        };

        list.appendChild(li);

    });
}

addBtn.addEventListener("click",()=>{
    const value=input.value.trim();

    if(!value)return;

    todos.push(value);
    saveTodos();
    renderTodos();
    input.value="";
});

renderTodos();

