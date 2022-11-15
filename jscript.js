let form=document.querySelector('.form')
form.style.display="grid";
form.style.gridTemplateColumns='1fr 1fr';
form.style.gridGap='50px';
let name=document.querySelector('.name');
let surname=document.querySelector('.surname');
let email=document.querySelector('.email');
let password=document.querySelector('.password');
let namep=document.querySelector('.namep');
let surnamep=document.querySelector('.surnamep');
let emailp=document.querySelector('.emailp');
let passwordp=document.querySelector('.passwordp');
let button=document.querySelector('.button');
let main=document.querySelector('.main');
main.style.margin='30px 60px'

function error(inpname, leng, section, number){
    if (inpname.value.length<=leng){
    inpname.style.color='red';
section.innerText=`(The place should consist of at least ${number} symbols!)`;
section.style.color='Red';
    }
    else{
        inpname.style.color='green'; 
        section.innerText=`(Perfect!)`;
        section.style.color='Green';  
    }
}
name.addEventListener('input', () => {
    error(name,3,namep,3);
})
surname.addEventListener('input', () => {
    error(surname,5,surnamep,5);
})
password.addEventListener('input', () => {
    error(password,6,passwordp,6);
})
email.addEventListener('input', () => {
    let a=email.value;
    if(a.indexOf('@mail.ru')!==-1||a.indexOf('@gmail.com')!==-1 ){
    email.style.color='Green';
    emailp.innerText='perfect!';
    emailp.style.color='green';
    }
    else{
        email.style.color='Red';
        emailp.innerText='(input correct e-mail adress)';
        emailp.style.color='Red';
    }
    
})
let btnp=document.querySelector('.btnp');
button.addEventListener('click',()=>
{
        name.style.color='White';
    surname.style.color='White';
    email.style.color='White';
    password.style.color='White';
btnp.innerText=`Name-(${name.value}),   Surname(${surname.value}), 
  E-mail-(${email.value}),    Password(${password.value}) `
btnp.style.background='Azure';
btnp.style.color='Blue'
}
)
