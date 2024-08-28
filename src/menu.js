export function Menu(food, imgsrc) {
    function create() {
        const divContent = document.getElementById('content');

        const divPerFood = document.createElement('div');
        divPerFood.classList.add('food');
        
        const img = document.createElement('img');
        img.src = imgsrc;
        
        const title = document.createElement('h3');
        title.textContent = food;
        
        divPerFood.appendChild(img);
        divPerFood.appendChild(title);
        divContent.appendChild(divPerFood);
    }

    return{
        create,
    }
}