const input= document.getElementById("input-set");
const listItem= document.getElementById("listItems");
function addItem(){
    if(input.value === " "){
        alert("Enter item first");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= input.value;
        listItems.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value=" ";
}
listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);