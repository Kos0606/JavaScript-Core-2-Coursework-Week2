function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for(let i = 0; i < todos.length; i++) {
    let listItem = createListItem(todos[i].task);
    if(todos[i].completed) {
      listItem.style.textDecoration = "line-through";
    }
    list.appendChild(listItem);
  }

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
let todoInput = document.getElementById("todoInput");

  if(todoInput.value !== "") {
    let listItem = createListItem(todoInput.value);
    let list = document.getElementById("todo-list");
    list.appendChild(listItem);
    todoInput.value = "";
  }

}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  
  function deleteAllCompletedTodos(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  let listItems = document.getElementsByClassName("list-group-item");
  for(let i = 0; i < listItems.length; i++) {
    if(listItems[i].style.textDecoration === "line-through") {
      listItems[i].parentNode.removeChild(listItems[i]);
      i = i - 1;
    }
  }
  }
}
