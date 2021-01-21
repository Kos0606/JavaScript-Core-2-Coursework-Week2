function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  for(let n of books) {
    let listOfBooks = document.createElement("p");
    let unorderedListTag = document.createElement("ul");
    let booksList = document.createElement("li");
    booksList.innerText = `${n.title} ${n.author}`;
  
    let image = document.createElement("img");  
let imageArray = ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg", "https://images-eu.ssl-images-amazon.com/images/I/71Nxk9VhSTL.SR160,240_BG243,243,243.jpg"];
for(let i = 0; i < imageArray.length; i++) {
  image.src = imageArray[i];
  }
  
  
content.appendChild(booksList);
content.appendChild(listOfBooks);
content.appendChild(image);

}
 if(n.alreadyRead === true) {
   return image.backgroundColor = "green";
 }
 else {
   return "red";
 }   
  }


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false

  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true

  }
];

readingList(books);