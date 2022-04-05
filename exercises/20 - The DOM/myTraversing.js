// explanation of nodes & elements here: https://stackoverflow.com/a/9979779
// select an element in the inspector and then put $0 in the console & it will return information
const natalie = document.querySelector('.natalie');
// Elements
// console.log(natalie.children);
// console.log(natalie.firstElementChild);
// console.log(natalie.lastElementChild);
// console.log(natalie.previousElementSibling);
// console.log(natalie.nextElementSibling);
// console.log(natalie.parentElement);
// console.log(' ');
// Nodes
// console.log(natalie.childNodes);
// console.log(natalie.firstChild);
// console.log(natalie.lastChild);
// console.log(natalie.previousSibling);
// console.log(natalie.nextSibling);
// console.log(natalie.parentNode);



const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
