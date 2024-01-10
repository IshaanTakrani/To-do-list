const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const items = document.querySelector(".todo-container");
const darkModeBtn = document.querySelector(".dark-mode-btn");

function changeToStrikethrough(item) {
  if (
    item.querySelector(".item-text").style.textDecoration === "line-through"
  ) {
    item.querySelector(".item-text").style.textDecoration = "none";
    item.querySelector(".item-text").style.opacity = "1";
    console.log("click!");
  } else {
    item.querySelector(".item-text").style.textDecoration = "line-through";
    item.querySelector(".item-text").style.opacity = "0.65";
  }
}

function changeColourMode() {
  if ((document.body.background = "white")) {
    document.body.style.background = "black";
    document.querySelector(".title").style.color = "white";
    const itemTexts = Array.from(document.getElementsByClassName("item-text"));
    const itemRemoveBtns = Array.from(
      document.getElementsByClassName("remove")
    );
    const itemStrikeBtns = Array.from(
      document.getElementsByClassName("strike-btn")
    );

    const itemCount = itemTexts.length;

    for (let i = 0; i < itemCount; i++) {
      console.log(itemTexts[i].innerHTML);
      itemTexts[i].style.color = "white";
    }

    for (let i = 0; i < itemCount; i++) {
      console.log(itemRemoveBtns[i].innerHTML);
      itemRemoveBtns[i].setAttribute("class", "remove-dark");
    }

    for (let i = 0; i < itemCount; i++) {
      console.log(itemStrikeBtns[i].innerHTML);
      itemStrikeBtns[i].setAttribute("class", "strike-btn-dark");
    }
  } else {
    document.body.style.background = "white";
    document.querySelector(".title").style.color = "black";
    const itemTexts = Array.from(document.getElementsByClassName("item-text"));
    const itemRemoveBtns = Array.from(
      document.getElementsByClassName("remove")
    );
    const itemStrikeBtns = Array.from(
      document.getElementsByClassName("strike-btn")
    );

    const itemCount = itemTexts.length;

    for (let i = 0; i < itemCount; i++) {
      console.log(itemTexts[i].innerHTML);
      itemTexts[i].style.color = "black";
    }

    for (let i = 0; i < itemCount; i++) {
      console.log(itemRemoveBtns[i].innerHTML);
      itemRemoveBtns[i].setAttribute("class", "remove");
    }

    for (let i = 0; i < itemCount; i++) {
      console.log(itemStrikeBtns[i].innerHTML);
      itemStrikeBtns[i].setAttribute("class", "strike-btn");
    }
  }
}

function addItem() {
  let item = document.createElement("div");
  item.classList.add("item-div");
  let removeBtn = document.createElement("button");
  let strikeBtn = document.createElement("button");
  let itemText = document.createElement("p");
  let buttonDiv = document.createElement("div");

  removeBtn.innerHTML =
    '<img src="media/close_FILL0_wght400_GRAD0_opsz24.svg" alt="close_icon" />';
  removeBtn.classList.add("remove");

  strikeBtn.innerHTML =
    '<img src="media/done_FILL0_wght400_GRAD0_opsz24.svg" alt="check_icon" />';
  strikeBtn.classList.add("strike-btn");

  buttonDiv.innerHTML = strikeBtn.outerHTML + removeBtn.outerHTML;
  buttonDiv.classList.add("button-div");

  itemText.innerHTML = input.value;
  itemText.classList.toggle("item-text", true);

  item.innerHTML = itemText.outerHTML + buttonDiv.outerHTML;

  items.appendChild(item);
  input.value = "";
  input.focus();

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

darkModeBtn.addEventListener("click", changeColourMode);
