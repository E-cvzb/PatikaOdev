const container = document.querySelector(".container");

container.addEventListener('submit',function(event){
    event.preventDefault();
    const input =document.querySelector("#input").value;
    console.log(input);
    if(input ==""){
        alert("Lütfen bir iş giriniz");
    }else{
        const list = document.querySelector("#list");
        const listItem = document.createElement("li");
        const newspan = document.createElement("span");
        newspan.textContent = "x";
        listItem.textContent = input;
        listItem.appendChild(newspan);
        list.appendChild(listItem);
        alert("İş başarıyla eklendi");
    }
    
});
const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click",function( event){
    const index = event.target.parentElement.index;
    console.log(index);
   
}); 
