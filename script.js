const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const items = document.querySelector(".todo-container");
const darkModeBtn = document.querySelector(".dark-mode-btn");

let isDark = false;

function changeToStrikethrough(item) {
  if (
    item.querySelector(".item-text").style.textDecoration === "line-through"
  ) {
    item.querySelector(".item-text").style.textDecoration = "none";
    item.querySelector(".item-text").style.opacity = "1";
  } else {
    item.querySelector(".item-text").style.textDecoration = "line-through";
    item.querySelector(".item-text").style.opacity = "0.65";
  }
}

function makeDark() {
  darkModeBtn.innerHTML =
    '<span class="material-symbols-outlined"> light_mode </span>';

  darkModeBtn.style.color = "#ffffff";

  document.body.style.background = "black";
  document.querySelector(".title").style.color = "white";
  const itemTexts = Array.from(document.getElementsByClassName("item-text"));
  const itemRemoveBtns = Array.from(document.getElementsByClassName("remove"));
  const itemStrikeBtns = Array.from(
    document.getElementsByClassName("strike-btn")
  );

  const itemCount = itemTexts.length;

  for (let i = 0; i < itemCount; i++) {
    itemTexts[i].style.color = "white";
  }

  for (let i = 0; i < itemCount; i++) {
    itemRemoveBtns[i].style.color = "white";
  }

  for (let i = 0; i < itemCount; i++) {
    itemStrikeBtns[i].style.color = "white";
  }

  isDark = true;
}

function makeElementsWhite() {
  const itemTexts = Array.from(document.getElementsByClassName("item-text"));
  const itemRemoveBtns = Array.from(document.getElementsByClassName("remove"));
  const itemStrikeBtns = Array.from(
    document.getElementsByClassName("strike-btn")
  );

  const itemCount = itemTexts.length;

  if (document.body.style.background === "black") {
    for (let i = 0; i < itemCount; i++) {
      itemRemoveBtns[i].style.color = "white";
    }

    for (let i = 0; i < itemCount; i++) {
      itemStrikeBtns[i].style.color = "white";
    }
  }
}

function makeLight() {
  darkModeBtn.innerHTML =
    '<span class="material-symbols-outlined"> dark_mode </span>';
  darkModeBtn.style.color = "black";

  document.body.style.background = "white";
  document.querySelector(".title").style.color = "black";
  const itemTexts = Array.from(document.getElementsByClassName("item-text"));
  const itemRemoveBtns = Array.from(document.getElementsByClassName("remove"));
  const itemStrikeBtns = Array.from(
    document.getElementsByClassName("strike-btn")
  );

  const itemCount = itemTexts.length;

  for (let i = 0; i < itemCount; i++) {
    itemTexts[i].style.color = "black";
  }

  for (let i = 0; i < itemCount; i++) {
    itemRemoveBtns[i].style.color = "black";
  }

  for (let i = 0; i < itemCount; i++) {
    itemStrikeBtns[i].style.color = "black";
  }

  isDark = false;
}

function addItem() {
  let item = document.createElement("div");
  item.classList.add("item-div");
  let removeBtn = document.createElement("button");
  let strikeBtn = document.createElement("button");
  let itemText = document.createElement("p");
  let buttonDiv = document.createElement("div");

  removeBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
  removeBtn.classList.add("remove");

  strikeBtn.innerHTML = '<span class="material-symbols-outlined">done</span>';
  strikeBtn.classList.add("strike-btn");

  buttonDiv.innerHTML = strikeBtn.outerHTML + removeBtn.outerHTML;
  buttonDiv.classList.add("button-div");

  itemText.innerHTML = input.value;
  itemText.classList.add("item-text");

  if (isDark) {
    itemText.style.color = "white";
  } else {
    itemText.style.color = "black";
  }

  item.innerHTML = itemText.outerHTML + buttonDiv.outerHTML;

  items.appendChild(item);
  input.value = "";
  input.focus();

  makeElementsWhite();

  item.querySelector(".item-text").addEventListener("click", () => {
    changeToStrikethrough(item);
  });

  item.querySelector(".strike-btn").addEventListener("click", () => {
    changeToStrikethrough(item);
  });

  item.querySelector(".remove").addEventListener("click", () => {
    items.removeChild(item);
  });
}

addBtn.addEventListener("click", addItem);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

darkModeBtn.addEventListener("click", () => {
  if (document.body.style.background === "black") {
    makeLight();
  } else {
    makeDark();
  }
});
