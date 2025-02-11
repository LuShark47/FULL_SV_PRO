function toggleRecipe(button) {
    const recipe = button.nextElementSibling;
    recipe.classList.toggle('hidden');
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        toggleRecipe(this);
    });
});

let imageindex = 0;
const imageArr = ['https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

function click_to_change() {
    let image = document.getElementById('changeButton');
    imageindex = (imageindex + 1) % imageArr.length;
    image.setAttribute('src', imageArr[imageindex]);
}

document.getElementById('changeButton').addEventListener('click', click_to_change);