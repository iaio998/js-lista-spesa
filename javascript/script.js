// UTILITY
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

const list = [];

//// SOLUZIONE SENZA CICLI
// btn.addEventListener("click", function () {
//   const listElements = inputEl.value;
//   list.push(listElements);
//   console.log(list);
//   if (listElements === "Stop".toLocaleLowerCase()) {
//     list.pop();
//     msg = `Gentile utente ecco a lei la lista del carrello: ${list}`;
//     resultEl.classList.remove("d-none");
//     resultEl.innerHTML = msg;
//   }
// });
