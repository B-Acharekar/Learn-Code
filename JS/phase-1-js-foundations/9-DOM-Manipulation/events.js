// 1️⃣ Basic click event
const clickBtn = document.getElementById("click-btn");
clickBtn.onclick = () => {
  alert("Button clicked using onclick!");
};

// 2️⃣ addEventListener
clickBtn.addEventListener("click", () => {
  console.log("✅ Clicked (via addEventListener)");
});

// 3️⃣ Keyboard event
const input = document.getElementById("key-input");
input.addEventListener("keydown", (e) => {
  console.log("⌨️ Key Pressed:", e.key);
  if (e.key === "Enter") {
    alert("You pressed Enter!");
  }
});

// 4️⃣ Event bubbling
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", (e) => {
  console.log("🧱 Parent clicked");
});

child.addEventListener("click", (e) => {
  e.stopPropagation(); // Try commenting this to see bubbling
  console.log("👶 Child clicked");
});

// 5️⃣ Mouse event details
child.addEventListener("mouseover", (e) => {
  child.style.backgroundColor = "lightgreen";
});

child.addEventListener("mouseout", (e) => {
  child.style.backgroundColor = "lightblue";
});
