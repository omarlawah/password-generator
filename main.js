let span = document.getElementById('span');
let button = document.getElementById('button');
let refresh = document.getElementById('refresh-btn')
let arr=[];
const characters = "qwertyuiopasdfghjklzxcvbnm,./;'=-0987654321!@#$%^&*()_+}{";
let pass = "";

//characters.charAt(Math.floor(Math.random()*characters.length)-1);

for (let i=0;i<21;i++){
    arr.length=i;
    arr.pop(-1);
    arr.push(characters.charAt(Math.floor(Math.random()*characters.length)));
}

pass=arr.join("");

function generatePassword(){
    span.textContent=`${pass}`;
    button.classList.add('display');
    refresh.classList.remove('display');
    return;
}  

 function refreshPage(){
    if(confirm("are you sure you want to regenerate another password?")==true){
        document.location.reload();
    }
 }




//copyrights scripts.

let copy= document.querySelector('#copyrights')

function copyrights(){
    new Date().getFullYear();
    copy.innerHTML= `${new Date().getFullYear()}`;
}

copyrights();