document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const resultSec = document.getElementById("result");
  const quizContainer = document.getElementById("quiz-question");
  const quiz = [
    {
      id: 1,
      question: "Which country has the highest life expectancy?",
      options: ["A. Japan", "B. Switzerland", "C. Hong Kong", "D. Australia"],
      answer: "C",
    },
    {
      id: 2,
      question: "What is the capital of Canada?",
      options: ["A. Toronto", "B. Vancouver", "C. Ottawa", "D. Montreal"],
      answer: "C",
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      options: ["A. Earth", "B. Venus", "C. Mars", "D. Jupiter"],
      answer: "C",
    },
    {
      id: 4,
      question: "What is the chemical symbol for Gold?",
      options: ["A. Au", "B. Ag", "C. Gd", "D. Go"],
      answer: "A",
    },
    {
      id: 5,
      question: "Which language is used to style web pages?",
      options: ["A. HTML", "B. CSS", "C. JavaScript", "D. Python"],
      answer: "B",
    },
  ];

  console.log(quiz);

  startBtn.addEventListener("click", () => {
    quizContainer.innerHTML = "";
    resultSec.classList.add("d-none");
    resultSec.innerHTML = "";
    showQuestions(quiz);
  });

  function showQuestions(quizData) {
    quizContainer.classList.remove("d-none");

    quizData.forEach((item) => {
      const divQuest = document.createElement("div");
      divQuest.classList.add("question");

      const q = document.createElement("p");
      q.textContent = item.question;

      const optionsWrapper = document.createElement("div");
      optionsWrapper.className = "answer-options";

      item.options.forEach((option) => {
        const label = document.createElement("label");
        label.style.display = "block";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question-${item.id}`; // group by question
        radio.value = option[0]; // "A", "B", etc.

        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${option}`));
        optionsWrapper.appendChild(label);
      });

      divQuest.appendChild(q);
      divQuest.appendChild(optionsWrapper);
      quizContainer.appendChild(divQuest);
    });

    const ansBtn = document.createElement("button");
    ansBtn.className = "btn btn-success mt-3";
    ansBtn.textContent = "Submit";
    ansBtn.onclick = () => submitAns(quizData);

    document.body.appendChild(quizContainer);
    quizContainer.appendChild(ansBtn);

  }

  function submitAns(quizData) {
    let score = 0;

    quizData.forEach((item) => {
      const selected = document.querySelector(
        `input[name="question-${item.id}"]:checked`
      );
      const userAnswer = selected ? selected.value : null;
      const correctAnswer = item.answer;

      if (userAnswer === correctAnswer) {
        score++;
      }
    });

    showResult(score, quizData.length);
  }

  function showResult(score, total) {
    resultSec.className = "alert alert-info mt-4";
    resultSec.innerHTML = `
      <h5>Result</h5>
      <p>You scored <strong>${score}</strong> out of <strong>${total}</strong>.</p>
      <p>Status: <strong>${score > total / 2 ? "Pass" : "Failed"}</strong></p>
    `;
  }
});
