let arr=[];
const characters = "qwertyuiopasdfghjklzxcvbnm,./;'=-0987654321!@#$%^&*()_+}{";
let pass = "";

//characters.charAt(Math.floor(Math.random()*characters.length)-1);

for (let i=0;i<11;i++){
    arr.length=i;
    arr.pop(-1);
    arr.push(characters.charAt(Math.floor(Math.random()*characters.length)-1));
}
pass=arr.join("");




let button= document.getElementById('button');
let span = document.getElementById('span');
button.addEventListener('click', function generatePassword(){
    span.textContent=`${pass}`;
})
  

