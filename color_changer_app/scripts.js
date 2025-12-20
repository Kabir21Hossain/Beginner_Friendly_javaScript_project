const randomBtn=document.querySelector(".random");
const resetBtn=document.querySelector(".reset");
const colorCode=document.querySelector("#colorId");

function getRandomColor(){
    const letters="0123456789ABCDEF";
    let color="#";

    for(let i =0 ;i <6;i++){
        color+=letters[Math.floor(Math.random()*16)];

    }

    return color;

}


randomBtn.addEventListener("click",()=>{
    const randomColor=getRandomColor();
    document.body.style.backgroundColor=randomColor;
    colorCode.textContent=randomColor;

});

resetBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor="#f4f4f4";
    colorCode.textContent="#f4f4f4";
});