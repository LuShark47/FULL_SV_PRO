const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

const book = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: 1937,
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951,
    }
];

function printPersonInfo() {
    const output = document.getElementById('output');
    output.innerHTML = `My name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`;
}

// function printBookInfo() {
//    const output = document.getElementById('output2');
//    let str = `<ul>
//         ${(Object.keys(book)).map((key) =>{ return `<li>${key}: ${book[key]}</li>`}).join('')}
//     </ul>`;
//     output.innerHTML = str;

// }
function printBookInfo() {
    const output = document.getElementById('output2');
    let str = '<ul>' + book.map(b => `<li>${b.title} by ${b.author} (${b.year})</li>`).join('') + '</ul>';
    output.innerHTML = str;
}
function isAvailable() {
    const output = document.getElementById("output3");
    output.innerHTML = '<input type="text" id="bookTitle" placeholder="Enter book title"><button onclick="searchBook(document.getElementById(\'bookTitle\').value)">Check availability</button>';
}
function searchBook(bookTitle) {
    debugger
    const output = document.getElementById('output4');
    const bookname = book.find(b => b.title === bookTitle);
    if (bookname) {
        output.innerHTML = `The book ${book.title} is available.`;
    } else {
        output.innerHTML = `The book ${bookTitle} is not available.`;
    }
}