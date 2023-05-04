let span = document.getElementById('span');

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
    return;
}  
 


