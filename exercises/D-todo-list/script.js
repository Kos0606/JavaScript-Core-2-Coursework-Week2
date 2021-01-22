function todoList(todos) {
  // Write your code here...
   
  let content = document.getElementById("content");
  let h1 = document.createElement("h1");
  h1.innerHTML = "Todo List";
  content.appendChild(h1);

  
  let unOrderedList = document.createElement("ul");
  unOrderedList.style.listStyleType = "circle";

  
  for(let i = 0; i < todos.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = todos[i].todo;

    
    list.addEventListener("click", function() {
      if( !todos[i].isFinished ) {
        list.style.textDecoration = "line-through";
        todos[i].isFinished = true;
        list.style.listStyleType = "disc";
      }
      else {
        list.style.textDecoration = "none";
        todos[i].isFinished = false;
        list.style.listStyleType = "circle";
      }
    });

    
    unOrderedList.appendChild(list);
  }

  
  content.appendChild(unOrderedList);
}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);