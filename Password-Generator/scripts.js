const passwordEle=document.getElementById("password");
const lengthEle=document.getElementById("length");
const lengthVal=document.getElementById("lengthVal");
const strengthEle=document.getElementById("strength");


function updateLength(){
    lengthEle.textContent=lengthVal.value;

}

function generatePassword(){
    let chars="";

    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+[]{}<>?";

    if (document.getElementById("upper").checked) chars+=upper;
    if (document.getElementById("lower").checked) chars+=lower;
    if(document.getElementById("number").checked) chars+=numbers;
    if(document.getElementById("symbol").checked) chars+=symbols;

    if (!chars){
        passwordEle.value="";
        strengthEle.textContent=" Select at least one option";
        return ;
    }

    let password="";
    for(let i=0;i<lengthVal.value;i++){
        let random_index=Math.floor(Math.random()*chars.length);
        password+=chars[random_index];
    }

    passwordEle.value=password;
    updateStrength();

    
}

function copyPassword(){
    if(!passwordEle.value)return
    navigator.clipboard.writeText(passwordEle.value);
    alert("Password copied!");
    // passwordEle.value="";
}

function updateStrength(){
    const val=lengthVal.value;
    let strength="weak";

    if(val>=12)strength="Medium";
    if(val>=16)strength="Strong";

    strengthEle.textContent="Strength: "+strength;
}

updateLength();