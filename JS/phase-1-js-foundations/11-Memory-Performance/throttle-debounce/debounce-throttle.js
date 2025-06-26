const input = document.getElementById("input");
const output = document.getElementById("output");

// ✅ Debounce: waits for user to stop typing
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ✅ Throttle: limits how often function runs
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Usage example:

const updateText = (e) => {
  output.textContent = `🖊️ You typed: ${e.target.value}`;
};

// Choose ONE:
// input.addEventListener("input", debounce(updateText, 500));
input.addEventListener("input", throttle(updateText, 1000));
