// index.js

// Car object
const car1 = {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "aaagb5"
};

// Student object
const student1 = {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    AverageGrade: 85.72,
    email: "john123@gmail.com"
};

// User object
const user1 = {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    email: "john123@gmail.com",
    phone: "054-1234567",
    year: 2018
};

// Array of car objects
const cars = [
    { manufacturer: "Mazda", model: "6", year: 2020, plate: "abc123" },
    { manufacturer: "Ford", model: "Focus", year: 2020, plate: "aaagb5" },
    { manufacturer: "Toyota", model: "Rav4", year: 2014, plate: "ghk111" },
    { manufacturer: "Mazda", model: "3", year: 2020, plate: "hse73j" },
    { manufacturer: "Subaru", model: "Outback", year: 2018, plate: "kdyb72" },
    { manufacturer: "Toyota", model: "Rav4", year: 2016, plate: "dzdi64" },
    { manufacturer: "Ford", model: "Focus", year: 2020, plate: "atg5aa" },
    { manufacturer: "Subaru", model: "Outback", year: 2019, plate: "oxt63c" },
    { manufacturer: "Toyota", model: "Rav4", year: 2014, plate: "eswi77" },
    { manufacturer: "Ford", model: "Focus", year: 2020, plate: "osr3h6" },
    { manufacturer: "Mazda", model: "3", year: 2020, plate: "wwjyx4" },
    { manufacturer: "Toyota", model: "Rav4", year: 2018, plate: "22i64d" }
];

// Function to log and modify a car object
function function1() {
    const car = { manufacturer: "Toyota", model: "Corolla", year: 2021, plate: "xyz789" };
    console.log(car);
    car.manufacturer = "Honda";
    car.model = "Civic";
    console.log(car);
}

// Function to display car object properties in HTML
function function2() {
    const car = { manufacturer: "Toyota", model: "Corolla", year: 2021, plate: "xyz789" };
    const output = document.getElementById("output");
    output.innerHTML = "<ul>" +
        Object.keys(car).map(key => `<li>${key}: ${car[key]}</li>`).join('') +
        "</ul>";
}

// Function to log object values
function function3(var1) {
    console.log(Object.values(var1).join(', '));
}

// Function to log values of predefined objects
function function3B() {
    function3(car1);
    function3(student1);
    function3(user1);
}
function function4() {
    const output = document.getElementById("output2");
    output.innerHTML = "<ul>" +
        cars.map(car => `<li>${Object.keys(car).map(key => `${key}: ${car[key]}`).join(', ')}</li>`).join('') +
        "</ul>";
}
function function5() {
    const output = document.getElementById("output3");
    output.innerHTML = "<input type='text' id='search' placeholder='Search by manufacturer'> " +
        "<button onclick='searchCars()'>Search</button>";
}
function searchCars() {
    const search = document.getElementById("search").value;
    const output = document.getElementById("output3");
    output.innerHTML = "<ul>" +
        cars.filter(car => car.manufacturer === search).map(car => `<li>${Object.keys(car).map(key => `${key}: ${car[key]}`).join(', ')}</li>`).join('') +
        "</ul>";
}