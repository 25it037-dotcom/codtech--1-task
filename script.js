const quiz = [
  {
    question: "HTML stands for?",
    answers: ["Hyper Text Markup Language","Home Tool Markup","Hyperlinks"],
    correct: 0
  },
  {
    question: "CSS is used for?",
    answers: ["Styling","Database","Backend"],
    correct: 0
  },
  {
    question: "JavaScript is?",
    answers: ["Programming Language","Browser","Server"],
    correct: 0
  }
];

let current = 0;
let score = 0;

function loadQuestion(){
  document.getElementById("question").innerText =
  quiz[current].question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  quiz[current].answers.forEach((ans,index)=>{
    let btn = document.createElement("button");
    btn.innerText = ans;

    btn.onclick = ()=>{
      if(index === quiz[current].correct){
        score++;
        alert("Correct");
      }else{
        alert("Wrong");
      }
    };

    answersDiv.appendChild(btn);
    answersDiv.appendChild(document.createElement("br"));
  });
}

function nextQuestion(){
  current++;

  if(current < quiz.length){
    loadQuestion();
  }else{
    document.querySelector(".quiz-container").innerHTML =
    `<h1>Your Score: ${score}/${quiz.length}</h1>`;
  }
}

loadQuestion();
