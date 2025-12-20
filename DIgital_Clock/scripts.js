const clock=document.querySelector(".clock");
const start=document.querySelector(".start");
const stops=document.querySelector(".stop");
const datEle=document.querySelector("#date");
let timer=null;

function updateClock(){
    const now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm=hours>=12?"PM":"AM";

    hours%=12;
    hours=hours?hours:12

    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    clock.textContent=`${hours}:${minutes}:${seconds} ${ampm}`;

    const options={weekday:'long',year:'numeric',month:'long', day:'numeric'};
    datEle.textContent=now.toLocaleDateString(undefined,options);

    //day-night theme

    if(now.getHours()>=6 && now.getHours<18){
        document.body.style.backgroundColor="#e0f7fa";
        clock.style.color="#006064";
    }
    else{
        document.body.style.backgroundColor="111";
        clock.style.color="#00ffcc";
    }


}


function startClock(){
    if(!timer){
        updateClock();
        timer=setInterval(updateClock,1000);

    }
}

function stopClock(){
    clearInterval(timer);
    timer=null;
}

start.addEventListener("click",startClock);
stops.addEventListener("click",stopClock);


startClock();

