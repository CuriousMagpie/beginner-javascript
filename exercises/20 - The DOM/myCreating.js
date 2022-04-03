console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200';
myImage.alt = 'alt text';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h1');
const headingTwo = document.createElement('h2');
heading.textContent = 'cool things!';
headingTwo.textContent = 'more cool things!';
myDiv.append(headingTwo); // puts this at the end
myDiv.insertAdjacentElement('afterbegin', heading); // puts it wherever the first argument tells you to put it!

// this is a LOT of code for a list. More efficient to use an array or string of some sort with a loop.
const list = document.createElement('ul');
list.classList.add('list');
const li = document.createElement('li');
li.textContent = 'three';
list.append(li);
document.body.insertAdjacentElement('afterbegin', list);
// console.log(list);
const li5 = document.createElement('li');
const li4 = document.createElement('li');
const li2 = document.createElement('li');
const li1 = document.createElement('li');
li5.textContent = 'five';
li4.textContent = 'four';
li2.textContent = 'two';
li1.textContent = 'one';
list.append(li4);
list.append(li5);
list.insertAdjacentElement('afterbegin', li2);
list.insertAdjacentElement('afterbegin', li1);
