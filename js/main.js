const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#add-button");
const ul = document.createElement('ul');
const body = document.querySelector('body');

const editButton = document.createElement('button');
const removeButton = document.createElement('button');

editButton.textContent = "Edit";
removeButton.textContent = "Remove";

const createListItems = () => {
    const li = document.createElement('li');
    li.textContent = userInput.value;
    li.appendChild(editButton);
    li.appendChild(removeButton);
    return li;
}

const checkEmptyString = (li) => {
    if (!li.textContent) {
        console.log("empty string");
    }
}
// add a click event to the button
addButton.addEventListener("click", () => {
    li = createListItems();
    checkEmptyString(li);    
    
    userInput.value = "";
    ul.appendChild(li);
    body.appendChild(ul);
    
})