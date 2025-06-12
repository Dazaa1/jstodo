const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#add-button");
const ul = document.querySelector('ul');
const body = document.querySelector('body');

const li = document.querySelector('li');
const editButton = document.querySelector('button');
const removeButton = document.querySelector('button');

const checkEmptyString = (li) => {
    if (!li) {
        console.log("empty string");
    }
}

// add a click event to the button
addButton.addEventListener("click", () => {
    li.textContent = userInput.value;
    checkEmptyString(li.textContent)
    checkEmptyString(li);    
    userInput.value = "";
    ul.appendChild(li);

    body.appendChild(ul);
    
})