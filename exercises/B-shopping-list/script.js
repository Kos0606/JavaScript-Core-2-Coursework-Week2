function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  for(let y of arrayOfPeople) {
    let createUnOderedListTag = document.createElement("ul");
    let createListTag = document.createElement("li");
    createListTag.innerText = `${y}`;
    content.appendChild(createListTag);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
