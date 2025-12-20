let count=0;

const countId=document.querySelector("#count");
const increaseBtn=document.querySelector(".increase");
const decreaseBtn=document.querySelector(".decrease");
const resetBtn=document.querySelector(".reset");
const fiveIncrease=document.querySelector(".fiveIncrease");
const fiveDecrease=document.querySelector(".fiveDecrease");

function updateColor(){
    if(count>0){
        countId.style.color="green";
    }
    else{
        countId.style.color="red";
    }
}

updateColor();

increaseBtn.addEventListener("click",()=>{
    count+=1;
    countId.textContent=count;
    updateColor();
   

});

decreaseBtn.addEventListener("click",()=>{
    
    if(count>0)
        count-=1;
    else{
        alert("count can't be negative");
    }
    countId.textContent=count;
    updateColor();


});


resetBtn.addEventListener("click",()=>{
    count=0;
    countId.textContent=count;
    updateColor();
   
});


fiveIncrease.addEventListener("click",()=>{ 
    count+=5;
    countId.textContent=count;
    updateColor();
});
   


fiveDecrease.addEventListener("click",()=>{

    if (count==0){
        fiveDecrease.disabled=count=0;
    }
    if(count>=5){
        count-=5;

    }
    else{
        alert("count can't be negative");
    }
    countId.textContent=count;
    updateColor;
    


})


