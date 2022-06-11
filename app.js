let inputText = document.querySelector(".input");
const submit = document.querySelector(".is-primary");
const bola = document.querySelector(".ball");
const Del = document.querySelector(".delete");
const msg = document.querySelector(".message");
const ball = document.querySelector(".ballredor");
let resultado = document.querySelector(".result");

let phrase = [
  "Com certeza, você consegue!",
  "Talvez, possa ser que sim!",
  "Não entendi oq vc falou!",
  "Clima terrivel!",
  "Vc pode contar com isso!",
  "Sim. Você definitivamente consegue!",
  "Pode ser que sim",
  "Amanha é outro dia!",
];
const generate = () => {
  if (inputText.value == 0) {
    meuAlert();
  } else {
    phrase;
    let handPhrase = Math.floor(Math.random() * phrase.length);

    resultado.innerHTML = phrase[handPhrase];
  }

  zerarInput();
};

let timeout = null;
document.addEventListener("keydown", (e) => {
  ball.classList.add("ball-expended");
  clearTimeout(timeout);
  timeout = setInterval(() => {
    ball.classList.remove("ball-expended");
  }, 500);
});

Del.addEventListener("click", () => {
  msg.classList.remove("oi");
  ball.classList.remove("nono");
});

const zerarInput = () => {
  inputText.value = "";
};

const opacityTextAndDisableButton = () => {
  submit.setAttribute("disabled", true);
  resultado.style.opacity = "1";
  setTimeout(() => {
    submit.removeAttribute("disabled", true);
    resultado.style.opacity = "0";
  }, 3000);
};

submit.addEventListener("click", () => {
  if (inputText.value == 0) {
    meuAlert();
  } else {
    generate();
    addAndRemoveClass();
    opacityTextAndDisableButton();
  }
});

const addAndRemoveClass = () => {
  ball.classList.remove("ball-expended");
  bola.classList.add("pulse");
  clearTimeout(timeout);
  timeout = setInterval(() => {
    bola.classList.remove("pulse");
    ball.classList.remove("ball-expended");
  }, 2000);
};

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submit.click();
    addAndRemoveClass();
  }
});

const meuAlert = () => {
  msg.classList.add("oi");
  addAndRemoveClass();
  ball.classList.add("nono");
};

// cursor animado

//identificar o elemento
let cursor = document.querySelector(".cursor");

//capturar a mesma

document.addEventListener("mousemove", (e) => {
  //atribuir a posição do mouse x e y como position do cursor
  let positionX = e.pageX - 13;
  let positionY = e.pageY - 13;

  cursor.style.left = positionX + "px";
  cursor.style.top = positionY + "px";
});
