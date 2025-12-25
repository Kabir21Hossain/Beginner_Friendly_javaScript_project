const questions=[
    {
        question:"What does JS stand for?",
        options:["Java Source","JavaScript","Just Script","JSON Script"],
        answer:1
    },

    {
        question:"Which Keyword declares a constant?",
        options:["var","let","const","define"],
        answer:2
    },

    {
        question:"Which symbol is used for comments?",
        options:["<!-- -->","//","#",";"],
        answer:1
    },
    
    {
        question:"Which method selects multiple elements?",
        options:["getElementById","querySelector","querySelectorAll","getElements"],
        answer:2
    }
]

let score=0;
let index=0;

const questionEle=document.getElementById("question");
const optionsEle=document.getElementById("options");
const nextBtn=document.getElementById("nextBtn");
const resultBox=document.getElementById("result-box");
const quizBox=document.getElementById("quiz-box");
const scoreText=document.getElementById("scoreText");
 

function loadQuestion(){
  nextBtn.classList.add("hidden");
  optionsEle.innerHTML="";

  const q=questions[index];
  questionEle.textContent=q.question;

  q.options.forEach((option,i)=>{
    const btn=document.createElement("button");
    btn.textContent=option;
    btn.className="w-full bg-slate-700 hover:bg-slate-600 py-2 rounded";
    btn.onclick=()=>checkAnswer(i,btn);
    optionsEle.appendChild(btn);

  });
}

function checkAnswer(selected,button){
  const correct=questions[index].answer;

  Array.from(optionsEle.children).forEach(btn => btn.disabled = true);
  if(selected==correct){
    button.className=" w-full  py-2 rounded bg-green-600";
    score++;
  
  }

  else{
    button.className="bg-red-600 w-full py-2 rounded ";
    optionsEle.children[correct].className="bg-green-600 w-full rounded py-2"
  }

  nextBtn.classList.remove("hidden");

}


nextBtn.onclick=()=>{
  index++;

  if(index<questions.length){
    loadQuestion();
  }
  else{
    showResult();
  }
};

function showResult(){
  nextBtn.classList.add("hidden");
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent=`Your score:${score}/${questions.length}`;

}


function restartQuiz(){
  index=0;
  score=0;
  
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
}


loadQuestion();

// let index=0;
// let score=0;

// const questionEle=document.getElementById("question");
// const optionsEle=document.getElementById("options");
// const nextBtn=document.getElementById("nextBtn");
// const resultBox=document.getElementById("result-box");
// const quizBox=document.getElementById("quiz-box");
// const scoreText=document.getElementById("scoreText");

// function loadQuestion(){
//   nextBtn.classList.add("hidden");
//   optionsEle.innerHTML="";
//   const q=questions[index];

//   questionEle.textContent=q.question;

//   q.options.forEach((option,i)=>{
//     const btn=document.createElement("button");
//     btn.textContent=option;
//     btn.className="w-full bg-slate-700 py-2 rounded hover:bg-slate-600";
//     btn.onclick= () =>checkAnswer(i,btn);
//     optionsEle.appendChild(btn);

//   });
// }

// function checkAnswer(selected,button){
//   const correct=questions[index].answer;
//   Array.from(optionsEle.children).forEach(btn=>btn.disabled=true);

//   if(selected==correct){
//     button.className=" w-full bg-green-700  py-2 rounded";
//     score++;
//   }

//   else{
//     button.className="bg-red-700 py-2 rounded w-full";
//     optionsEle.children[correct].className="bg-green-700 w-full py-2 rounded";
//   }

//   nextBtn.classList.remove("hidden");

// }

// nextBtn.onclick= () =>{
//   index++;
//   if(index<questions.length){
//     loadQuestion();

//   }
//   else{
//     showResult();
//   }

// };

// function showResult(){
//   quizBox.classList.add("hidden");
//   nextBtn.classList.add("hidden");
//   resultBox.classList.remove("hidden");
//   scoreText.textContent=`Your score is: ${score}/${questions.length}`;
  
// }

// function restartQuiz(){
//   index=0;
//   score=0;
//   resultBox.classList.add("hidden");
//   quizBox.classList.remove("hidden");
//   loadQuestion();
// }

// loadQuestion();