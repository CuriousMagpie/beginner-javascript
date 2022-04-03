// console.log('it works!');
const item = document.querySelector('.item');

const size = `300x300`;
const src = `https://source.unsplash.com/random/${size}`;
const desc = `Cute <img onload="alert('HACKED')" src="https://source.unsplash.com/random/50x50">`; // example of XSS
const myHTML = `
  <div class = "wrapper">
    <h2>${desc}!</h2>
    <img src="${src}" alt="${desc}!" />
    <p>Hi, I am ${desc}!</p>
  `;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.append(myFragment);

console.log(myFragment.querySelector('img'));

console.log(myFragment);

item.innerHTML = myHTML; // setter
console.log(item.innerHTML); // getter

const itemImage = document.querySelector('.wrapper img');
itemImage.classList.add('round');
console.log(itemImage);
