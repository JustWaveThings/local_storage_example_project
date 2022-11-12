/* const colorsArray = ['blue', 'Green', 'White', 'Red', 'Chartruse'];
localStorage.setItem('colors', JSON.stringify(colorsArray));

const numbersArray = [1, 2, 3, 4];
localStorage.setItem('numbers', JSON.stringify(numbersArray)); */

const colorsData = JSON.parse(localStorage.getItem('colors'));
console.log(colorsData);

const numbersData = JSON.parse(localStorage.getItem('numbers'));
console.log(numbersData);

localStorage.clear();
