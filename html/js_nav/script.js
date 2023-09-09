// const lista = document.getElementsByTagName("li");

// let num = [10, 20, 30, 40];

//tipo de repetição for
//for
// for (let i = 0; i <= 3; i++) {
//   console.log(num[i]);
// }
// console.log(lista);
// console.log(lista[1]);
// console.log(lista[1].innerHTML);

// for (let i = 0; i <= 5; i++) {
//   console.log(lista[i].innerHTML);
// }

// for in
// for (n in num) {
//   console.log(num[n]);
// }
// for (n in lista) {
//   console.log(lista[n]);
// }

//for of
// for (n of num) {
//   console.log(n);
// }
// const btnEnviar = document.getElementById("enviar");

// btnEnviar.addEventListener("click", (event) => {
//   event.preventDefault();
//   const login = document.getElementById("login");
//   const senha = document.getElementById("senha");
//   console.log(login.value);
//   console.log(senha.value);

//   limparDados();
// });

// function limparDados() {
//   const login = document.getElementById("login");
//   const senha = document.getElementById("senha");

//   login.innerText = "";
//   senha.innerHTML = "";
// }
// for (let i = 0 ;  ; i++ ) {

// }

const menu = document.querySelector(".material-symbols-outlined");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("hide-icon");
});
