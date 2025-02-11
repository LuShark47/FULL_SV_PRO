function myFunction1() {
    const newelemnt = document.createElement('h2');
    newelemnt.textContent = 'i am a h2';
    document.body.appendChild(newelemnt);
}
function myFunction2() {
    const newelemnt = document.createElement('div');
    newelemnt.textContent = 'i am a div 1';
    document.body.appendChild(newelemnt);
}
function myFunction3() {
    const newelemnt = document.createElement('div');
    newelemnt.textContent = 'i am a div 3';
    document.body.appendChild(newelemnt);
}
function myFunction4() {
    const elemnt = document.querySelector('#child');
    elemnt.style.backgroundColor = 'red';

}
function myFunction5() {
    //where id is sibling font szie 18px
    const elemnt = document.querySelectorAll('#sibling').forEach((elemnt) =>{
        elemnt.style.fontSize = '18px';
    });
}
myFunction1();
myFunction2();
myFunction3();
myFunction4();
myFunction5();

