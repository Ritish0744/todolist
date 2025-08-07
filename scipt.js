

function add(){
  let input=document.getElementById(`input`).value;
  let list=document.getElementById(`list`)
  let todolists=document.createElement(`li`);
  let error=document.createElement(`li`);
  
  if(input==""){
    error.innerHTML="enter a task"
    error.style.color="red"
    error.style.opacity="1"
    
    error.style.transition = "opacity 0.3s ease";
    list.appendChild(error)
   setTimeout(() => {
    error.style.opacity="0"
    
    
    
  }, 800);
  setTimeout(() => {
        if (list.contains(error)) {
            list.removeChild(error);
        }
    }, 1200);
  }
  else{

  
    

let span1 = document.createElement("span");
span1.textContent=input;

let btn1 = document.createElement("button");
btn1.classList.add("btn1")
btn1.textContent = "✓";



let del = document.createElement("button");
del.classList.add("del")
del.innerText="🗑️"



 
 let div1=document.createElement("span")
 div1.classList.add("div1")
div1.appendChild(del);

todolists.appendChild(btn1);
todolists.appendChild(span1);
todolists.appendChild(div1);
list.appendChild(todolists);
  

   document.getElementById("input").value = ""; // clear input
let check=true;
btn1.onclick=function(){
  if (check){
btn1.style.backgroundColor="cyan"
 span1.style.textDecoration = "line-through";
 del.style.textDecoration = "none";

  }
  else if(!check){
    btn1.style.backgroundColor="white"
 span1.style.textDecoration = "none";
  
  }
  check=!check
}

del.onclick=function(){
  list.removeChild(todolists)
}


  }
}
