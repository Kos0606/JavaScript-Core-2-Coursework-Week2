function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  for(let n of books) {
    let listOfBooks = document.createElement("p");
    let unorderedListTag = document.createElement("ul");
    let booksList = document.createElement("li");
    let image = document.createElement("img");
    booksList.innerText = `${n.title} ${n.author}`;
    booksList.style.backgroundColor = 
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