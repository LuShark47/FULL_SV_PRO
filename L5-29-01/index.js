const person = [{
    name: 'John Doe',
    birthYear: 1980,
    car: {
        manufacturer: 'Toyota',
        model: 'Corolla',
        year: 2015,
        plate: 'ABC-123',
        features: ['power windows', 'power steering', 'automatic transmission']
    }
}, {
    name: 'mile Doe',
    birthYear: 1985,
    car: {
        manufacturer: 'Honda',
        model: 'Civic',
        year: 2018,
        plate: 'XYZ-456',
        features: ['power windows', 'power steering', 'automatic transmission']
    }
}, {
    name: 'jane Doe',
    birthYear: 1990,
    car: {
        manufacturer: 'Ford',
        model: 'Fiesta',
        year: 2019,
        plate: 'DEF-789',
        features: ['power windows', 'power steering', 'automatic transmission']
    }
}];

function targil2() {
    let thename = document.querySelector("#MyInput").value;
    let filteredPersons = person.filter(p => p.name.toLowerCase() === thename.toLowerCase());
    let str = '<ul>' + filteredPersons.map(p => `<li>${p.name} was born in ${p.birthYear} and drives a ${p.car.manufacturer} ${p.car.model}</li>`).join('') + '</ul>';
    document.querySelector("#MyDiv").innerHTML = str;
}