const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#add-button");
const ul = document.createElement('ul');
const body = document.querySelector('body');


// add a click event to the button
addButton.addEventListener("click", () => {
    const li = document.createElement('li');
    li.textContent = userInput.value;
    userInput.value = "";
    ul.appendChild(li);
    body.appendChild(ul);
})

