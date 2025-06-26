// select elements
const title = document.getElementById("main-title")
const info = document.getElementsByClassName("info")
const button = document.querySelector("#change-btn");
const image = document.querySelector("#sample-img")

button.addEventListener("click",() => {
    title.textContent = "DOM Manipulated !";
    title.style.color = "crimson";
    title.style.fontSize = "2rem";

    info.innerText = "🎉 Text changed via JS";
    image.setAttribute("src", "https://placecats.com/millie_neo/300/200");
    image.setAttribute("alt","cute cat")
})