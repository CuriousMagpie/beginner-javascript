// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.items img');
// // const item2 = document.querySelector('.item2');
// // const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(heading);
// console.log(heading.innerText); // textContent used as a getter
// console.log(heading.textContent); // supposed to show thie hidden h3 element but doesn't?
// // heading.textContent = `One thing I'll say for him, Jesus is cool`; // textContent used as a setter
// // console.log(heading.textContent); // textContent used as a getter
//
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);
//
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent}` + '🍕';
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
// pic.classList.remove('cool');
console.log(pic.classList);
pic.classList.contains('round');

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'cute pic'; // setter
console.log(pic.alt); // getter
pic.width = 200;

// console.log(pic.naturalWidth); // getter
//
// pic.addEventListener('load', () => {
//   console.log(pic.naturalWidth);
// });

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
