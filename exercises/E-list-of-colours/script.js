function listOfColours(colours) {
  // Write your code here...

  let content = document.getElementById("content");

  
  let h1 = document.createElement("h1");
  h1.innerHTML = "Colours Selection";

  
  let dropDownTag = document.createElement("label");
  dropDownTag.innerHTML = "Colour choice: ";
  dropDownTag.for = "colours";

  
  let dropDownList = document.createElement("select");
  dropDownList.id = "colours";

  
  let createP = document.createElement("p");
  createP.innerHTML = "";

  
  for(let i = 0; i < colours.length; i++) {
    let dropDownItem = document.createElement("option");
    dropDownItem.innerHTML = colours[i].toUpperCase();
    
    dropDownList.appendChild(dropDownItem);
  }

  
  dropDownList.addEventListener("change", function() {
    createP.innerHTML = `Colour choice made ${this.value.toLowerCase()}!`;
    createP.style.color = this.value.toLowerCase();
  });

  
  content.appendChild(h1);
  content.appendChild(dropDownTag);
  content.appendChild(dropDownList);
  content.appendChild(createP);
}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
