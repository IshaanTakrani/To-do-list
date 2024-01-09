// const body = document.body; // This is the body of the webpage

// body.appendChild(); // can only append elements (div, span, anchor)
// body.append("hello world"); // append everything (strings too) This is better

// how to make element?

// const div = document.createElement("div");

// div.innerHTML = "<h1>Hello, I'm div</h1>";

// console.log(div.innerText);      // inner text looks at what is visible on the screen
// console.log(div.textContent);    // text content is the exact text content

// body.append(div);

// div.setAttribute("class", "big-text"); // change attribute, class, id, anything in that section

// const subheading = document.querySelector("#subheading");

// console.log(subheading.getAttribute("id"));

// subheading.classList.add("new-class"); // changes class
// subheading.classList.toggle("new-class", false); // if the class doesn't exist, it is added
// subheading.classList.toggle("new-class-2", true);

// div.style.color = "blue"; // change styles

let input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const items = document.querySelector(".todo-container");
// const removeBtn = document.querySelector(".remove");

addBtn.addEventListener("click", () => {
  let item = document.createElement("div");
  item.classList.add("item-div");
  let removeBtn = document.createElement("button");
  let itemText = document.createElement("p");

  removeBtn.innerHTML = "x";
  removeBtn.classList.add("remove");

  itemText.innerHTML = input.value;
  itemText.classList.add("item-text");

  item.innerHTML = itemText.outerHTML + removeBtn.outerHTML;

  items.appendChild(item);
  input.value = "";
  input.focus();

  //TODO: add strikethrough when text (not button) is clicked

  item.querySelector(".remove").addEventListener("click", function () {
    console.log("CLICK!!");
    items.removeChild(item);
  });
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let item = document.createElement("div");
    item.classList.add("item-div");
    let removeBtn = document.createElement("button");
    let itemText = document.createElement("p");

    removeBtn.innerHTML = "x";
    removeBtn.classList.add("remove");

    itemText.innerHTML = input.value;
    itemText.classList.add("item-text");

    item.innerHTML = itemText.outerHTML + removeBtn.outerHTML;

    items.appendChild(item);
    input.value = "";
    input.focus();

    item.querySelector(".remove").addEventListener("click", function () {
      console.log("CLICK!!");
      items.removeChild(item);
    });
  }
});
