import { calculateAccuracy, calculateWPM } from "./helpers.js";
import { fetchSentence } from "./sentence.js";

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const textInput = document.getElementById("text-input");
  const sentenceDisplay = document.getElementById("sentence-section");
  const resultDisplay = document.getElementById("result");
  const timerDisplay = document.getElementById("timer");

  let targetSentence = "";
  let startTime;
  let timerInterval;
  let isRunning = false;

  startBtn.onclick = () => start();
  restartBtn.onclick = () => start();

  function textClear() {
    textInput.value = "";
    resultDisplay.textContent = "";
    timerDisplay.textContent = "";
  }

  async function start() {
    textClear();
    targetSentence = await fetchSentence();
    sentenceDisplay.textContent = targetSentence;
    textInput.focus();
    startTimer();
    isRunning = true;
  }

  // Anti-Cheat Enhancements
  textInput.addEventListener("contextmenu", (e) => e.preventDefault());

  ["copy", "paste", "cut", "dragstart", "drop"].forEach((event) => {
    textInput.addEventListener(event, (e) => {
      e.preventDefault();
      alert("Cheating is not allowed!");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C")) ||
      (e.ctrlKey && e.key === "U") ||
      e.key === "F12"
    ) {
      e.preventDefault();
      alert("DevTools are disabled during the test.");
    }
  });

  function startTimer() {
    startTime = new Date();
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      const timeElapsed = (new Date() - startTime) / 1000;
      timerDisplay.textContent = `Time: ${timeElapsed.toFixed(1)}s`;

      if (textInput.value.length > 0 && isRunning) {
        updateLiveResults(timeElapsed);
      }
    }, 100);
  }

  function endTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    return (new Date() - startTime) / 1000;
  }

  function updateLiveResults(timeElapsed) {
    const words = targetSentence.trim().split(" ").length;
    const wpm = calculateWPM(words, timeElapsed);
    const accuracy = calculateAccuracy(textInput.value, targetSentence);
    resultDisplay.textContent = `WPM: ${wpm} | Accuracy: ${accuracy}%`;
  }

  textInput.addEventListener("input", () => {
    if (textInput.value.trim() === targetSentence.trim()) {
      const time = endTimer();
      updateLiveResults(time);
    }
  });
});
