const addButton = document.getElementById('add-btn');
 const resetButton = document.getElementById('reset-btn');
let title=document.getElementById("title")
let notitle=document.getElementById("notitle")
let list=document.getElementById("list")
let todolist=JSON.parse(localStorage.getItem('todolist'))||[]

addButton.addEventListener('click',function(){
    if(title.value)
        {
            todolist.push(title.value);
            title.value='';
            notitle.textContent=" "
            render()
            localStorage.setItem('todolist',JSON.stringify(todolist))
        }
        else {
        notitle.textContent="*Enter the title"
    }
}
)
function render()
{
    list.innerHTML=" "
    for(let i=0;i<todolist.length;i++)
    {
        list.innerHTML+=`
    <li class="list">
    ${todolist[i]}
    <button onclick="remove(${i})">X</button>
    </li>
    `;
    
    }
}

resetButton.addEventListener('click',function reset()
{
    list.innerHTML=" "
    todolist=[]
    localStorage.removeItem('todolist');
})

function remove(i)
{
    todolist.splice(i,1)
    render()
    localStorage.setItem('todolist',JSON.stringify(todolist))
}
render()

