const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#add-button");
const ul = document.createElement('ul');
const body = document.querySelector('body');

const editButton = document.createElement('button');
const removeButton = document.createElement('button');

editButton.textContent = "Edit";
removeButton.textContent = "Remove";



// add a click event to the button
addButton.addEventListener("click", () => {
    const li = document.createElement('li');

    li.textContent = userInput.value;
    if (!li.textContent) {
        console.log("empty string");
    }

    else {
        li.appendChild(editButton);
        li.appendChild(removeButton);
        userInput.value = "";
        ul.appendChild(li);
        body.appendChild(ul);
    }

})

