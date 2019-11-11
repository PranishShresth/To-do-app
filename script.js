const button = document.getElementById("btn");
const tasks = document.getElementById("list");


button.addEventListener("click",Add);



tasks.addEventListener("click", crossout)

function crossout(e){
    e.target.classList.toggle("clicked");
   
}

function Add(){
    const typebar= document.getElementById("add").value;
    
    if(typebar!=""){
        const li = document.createElement('li')
        li.append(typebar);
        tasks.appendChild(li);
        const remove = document.createElement('span');
         const removes= document.createTextNode('x');
        remove.appendChild(removes);
    
    li.appendChild(remove);
    remove.classList.add("remove");
   
    remove.addEventListener('click', function() {
        li.parentNode.removeChild(li);
    }, false);
    document.querySelector("#add").value="";
         
    }
    else{
        alert("String is empty!!")
    }
   
    
 

    
    
 
}

