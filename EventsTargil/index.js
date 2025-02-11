// document.addEventListener('DOMContentLoaded', function() {
//     const myButton = document.querySelector('#myButton');
//     myButton.addEventListener('click', function() {
//         alert('Button clicked!');
//     });
// });

function initializeEventListeners() {
    document.getElementById('myButton').addEventListener('click', function() {
        image_setattribute();
    });
}

function taggle_practice() {
    // when click the the button the background togglie bg color to purple
    const btn = document.getElementById('myButton');
    btn.addEventListener('click', function() {
        document.body.classList.toggle('bg-purple');
    });
}
function image_setattribute() {
    const img = document.getElementById('myImage');
    img.setAttribute('src', 'https://images.pexels.com/photos/20265009/pexels-photo-20265009/free-photo-of-portrait-of-woman-in-black-jacket-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    img.removeAttribute('alt');
}

initializeEventListeners();
taggle_practice();

