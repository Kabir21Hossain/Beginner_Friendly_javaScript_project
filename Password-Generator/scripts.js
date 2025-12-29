const passwordEle=document.getElementById("password");
const lengthEle=document.getElementById("lengthValue");
const lengthValue=document.getElementById("length");
const strength=document.getElementById("strength");


function copyPassword(){
    navigator.clipboard.writeText(passwordEle.value);
    alert("Password Copied");
}

function updateLength(){
    lengthEle.textContent=lengthValue.value;

}

function generatePassword(){
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+[]{}<>?";

    let chars="";

    if(document.getElementById("upper").checked)chars+=upper;
    if(document.getElementById("lower").checked)chars+=lower;
    if(document.getElementById("number").checked)chars+=numbers;
    if(document.getElementById("symbol").checked)chars+=symbols;

    if(!chars){
        passwordEle.textContent="";
        strength.textContent="select at least one option";
        return;
    }

    let password="";


    for(let i=0;i<lengthValue.value;i++){
        const randomIndex=Math.floor(Math.random()*chars.length);
        password+=chars[randomIndex];

    }

    passwordEle.value=password;
    updateStrength();

}

function updateStrength(){
    const len=lengthValue.value;
    let power="weak";

    if(len>=12) power="Medium";
    if(len>=16) power="strong";
    strength.textContent="Strength:" +power;
}

updateLength();