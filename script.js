let input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const items = document.querySelector(".todo-container");

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
