console.log("kaise ho")

const item=document.querySelector("#item")
const btn=document.querySelector("button")
const toDoBox=document.querySelector(".to-do-box")

item.addEventListener("keyup",
function(event){
   if(event.key=="Enter"){
    if(this.value!=""){
        addToDo(this.value);
        console.log(this.value);
    }
    this.value=""
   }
});

btn.addEventListener("click",
function(){
    if(item.value!=""){
        addToDo(item.value);
        console.log(item.value)
    }
    item.value=""
});

const addToDo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`${item} 
    <i class="fas fa-times"></i>`;

    listItem.addEventListener("click",
    function() {
        this.classList.toggle("done");
    }   
    )
    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove();
    })
    toDoBox.appendChild(listItem);
}