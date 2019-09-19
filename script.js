const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
const fruitsList = document.getElementById('fruits');

for (let i=0; i < fruits.length; i += 1) {
    if (fruits[i] === 'Apple') {
        let toList = document.createElement('li');
        toList.innerHTML = `Only ${fruits[i]}`;
        fruitsList.appendChild(toList);
    } else {
        let toList = document.createElement('li');
        toList.innerHTML = fruits[i];
        fruitsList.appendChild(toList);
    }
}
