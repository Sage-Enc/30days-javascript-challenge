// Activity-1

// Task-1

const book = {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937};
console.log(book);

console.log("\n");

// Task-2

const {title, author} = book;
console.log(title, author);

console.log("\n");

// Activity-2

// Task-3

book.displayAuthTit = () => `Author: ${book.author}, Title: ${book.title}`;
console.log(book.displayAuthTit());

console.log("\n");

// Task-4

book.bookUpdate = () =>{
  book.year = 1939;
  return book;
};
console.log(book.bookUpdate());

console.log("\n");

// Activity-3

// Task-5

const library = {
  name: "Kita Bae",
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 }
  ]
};
console.log(library);

console.log("\n");

// Task-6

console.log(`In ${library.name} Following Books Are Available:\n${library.books.map(book => book.title)}`);

console.log("\n");

// Activity-4

// Task-7

book.displayThis = function(){
  return `${this.title} was written in ${this.year}`;
};
console.log(book.displayThis());

console.log("\n");

// Activity-5

// Task-8

for(let key in book){
  if(book.hasOwnProperty(key)){
    console.log(`${key}: ${book[key]}`);
  }
};

console.log("\n");

// Task-9

const keys = Object.keys(book);
const values = Object.values(book);
 for(let i=0; i<keys.length; i++){
   console.log(`${keys[i]}: ${values[i]}`);
 }
