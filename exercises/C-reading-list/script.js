function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  for(let n of books) {
    let listOfBooks = document.createElement("p");
    let unorderedListTag = document.createElement("ul");
    let booksList = document.createElement("li");
    booksList.innerText = `${n.title} ${n.author}`;
    content.appendChild(booksList);
    let image = document.createElement("img");
    image.src = n.imgUrl;
    content.appendChild(image);
    
    if(n.alreadyRead === true) {
      document.image.backgroundColor = "green";
    }
    else {
      return "red";
    }
    
    }
    
  }


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imgUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81zpLhP1gWL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.co.uk%2FDesign-Everyday-Things-Revised-Expanded%2Fdp%2F0465050654&tbnid=pgxuR-tpo7SBlM&vet=12ahUKEwjTgtzHtabuAhUQNhoKHW59DTcQMygAegUIARCkAQ..i&docid=V9AsWliO-KnarM&w=1678&h=2560&q=The%20Design%20of%20Everyday%20Things&ved=2ahUKEwjTgtzHtabuAhUQNhoKHW59DTcQMygAegUIARCkAQ"

  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imgUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.cultura.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F1000x1000%2F9df78eab33525d08d6e5fb8d27136e95%2Ft%2Fh%2Fthe-most-human-human-tea-9780141971551_0.jpg%3Ft%3D1579214048&imgrefurl=https%3A%2F%2Fwww.cultura.com%2Fthe-most-human-human-tea-9780141971551.html&tbnid=ABoqK5DhZ33crM&vet=12ahUKEwi1-9zbt6buAhUKnRoKHT8nBkIQMygAegUIARCKAQ..i&docid=_NgmoJYSrS7gRM&w=1000&h=1000&itg=1&q=most%20human%20human&ved=2ahUKEwi1-9zbt6buAhUKnRoKHT8nBkIQMygAegUIARCKAQ"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imgUrl: "https://www.google.com/search?sa=X&rlz=1C1CHBD_en-GBGB922GB922&q=The+Pragmatic+Programmer:+Your+Journey+to+Mastery,+20th+Anniversary+Edition&stick=H4sIAAAAAAAAAONgFuLUz9U3MM7KjjdW4tVP1zc0zDC3rLQozjXUkspOttJPys_P1k8sLcnIL7ICsYsV8vNyKh8xLmDiFnj5456w1DSmSWtOXmPsZ-LCo16ohovNNa8ks6RSqEiogEsGrrK8KLOkJDUvvjy_KNsKok1IDa5WhotXCuE-DQYpbi4k5yoEcYMcbGSUVZhbVhjEAZJJTkoxCmIHsbIrs62YNBirmDgYlbKN4nddmnaOLVLQqYKB4VVggIOUppYQF7tnsU9-cmKO4K70r_sL_r-31xLm4ghJrMjPy8-tFNx5WObAf6CgkiKnc7f0gj8_39sLFr1nWLBwkamDBKsCjwab4UtFRgdFdRMHLYamfSsOsbFwMAowWDE5gC3lWcTqHZKRqhBQlJiem1iSmQxk5acXJebmphZZKUTmlxYpeAGJvNRKhZJ8Bd_E4pLUokodBSODkgwFx7y8zLLUouLEokoF15TMksz8PABKDNEdqgEAAA&npsic=0&ved=2ahUKEwi6x6OEuKbuAhVHilwKHYgwBRkQ-BYwG3oECCEQOA"

  }
];

readingList(books);