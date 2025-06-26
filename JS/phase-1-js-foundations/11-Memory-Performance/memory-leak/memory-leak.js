let leaky = [];

function addEventListenerLeak() {
  const element = document.createElement("div");
  document.body.appendChild(element);

  function onClick() {
    console.log("Clicked!");
  }

  element.addEventListener("click", onClick);
  document.body.removeChild(element);

  leaky.push(onClick); // holds reference => memory leak
  console.log("Event listener added, but element removed from DOM.");
}
