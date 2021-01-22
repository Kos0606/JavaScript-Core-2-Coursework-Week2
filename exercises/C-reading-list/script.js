function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
//books image url ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg", "https://images-eu.ssl-images-amazon.com/images/I/71Nxk9VhSTL.SR160,240_BG243,243,243.jpg"];
 
let unOrderedList = document.createElement("ul");

  // display the unordered list
   unOrderedList.style.listStyleType = "none";
   unOrderedList.style.display = "flex";
   unOrderedList.style.flexWrap = "wrap";
  

  for(let i = 0; i < books.length; i++) {
    
    let listTag = document.createElement("li");
    listTag.style.width = "25%";
    listTag.style.padding = "10px";
    listTag.style.margin = "15px";

    
    if(books[i].alreadyRead === true)
      listTag.style.backgroundColor = "green";
    else
      listTag.style.backgroundColor = "red";

    
    let createP = document.createElement("p");
    createP.innerHTML = `${books[i].title} - ${books[i].author}`;

    
    listTag.appendChild(createP);

    
    

    let coverImage = document.createElement("img");
  

    
    let imageUrl = ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg", "https://images-eu.ssl-images-amazon.com/images/I/71Nxk9VhSTL.SR160,240_BG243,243,243.jpg"];
 for(let j =0; j < imageUrl.length; j++) {
   books.coverPicture = imageUrl[j];
 }
    coverImage.src = books[i].coverPicture;
    

    
    listTag.appendChild(coverImage);

    
     unOrderedList.appendChild(listTag);
  }

  
  content.appendChild(unOrderedList);


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